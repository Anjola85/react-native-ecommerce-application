import { Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DismissKeyboardView from "../../../../components/dismiss-keyboard";
import { AddressRequest } from "../../../../api/api-contracts/user/requests/dto/address.request";
import { router, useLocalSearchParams, useRouter } from "expo-router";
import { addressData as dummyData } from "../../data";
import { addressScreenStyles as styles } from "./styles";
import GoogleAutoCompleteSearchBox from "./components/GoogleAutoCompleteSearchBox";
import UserAddressesContainer from "./components/UserAddressesContainer";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { addAddress, getAddresses } from "../../../../api/endpoints/userApi";
import {
  AddressListRespDto,
  AddressRespDto,
} from "../../../../api/api-contracts/user/responses/address.response";

const AddressScreen = () => {
  const [selectedExistingAddresses, setSelectedExistingAddresses] = useState<
    AddressRespDto[]
  >([] as AddressRespDto[]);
  const [searchText, setSearchText] = useState("");

  const item = useLocalSearchParams();

  const updated = item.value === "updated";

  console.log("updatedkamsi: ", updated);

  const [isFocused, setIsFocused] = useState(false);

  const [primaryAddress, setPrimaryAddress] = useState<AddressRespDto>(
    {} as AddressRespDto
  );

  function handleSelectPrimaryAddress(address: AddressRespDto): void {
    setPrimaryAddress(address);
    // TODO: set primary address to server
  }

  async function addLocalAddress(address: AddressRequest) {
    const newAddress: AddressRespDto = {
      id: Number(address.id),
      isPrimary: address.primary as boolean,
      unit: address.unit,
      street: address.street,
      city: address.city,
      province: address.province,
      postalCode: address.postalCode,
      country: address.country,
      latitude: address.latitude as number,
      longitude: address.longitude as number,
    };

    setSelectedExistingAddresses((prevState) => {
      return [...prevState, newAddress];
    });
  }

  function clearAddressInput() {
    setSearchText("");
  }

  useEffect(() => {
    async function fetchExistingAddresses() {
      // TODO: shouldnt be calling direct api function, should call cache function
      const serverData = (await getAddresses()).payload as AddressListRespDto;

      const fetchedAddresses = serverData.addressList;

      console.log("fetchedAddresses: ", fetchedAddresses);

      if (!fetchedAddresses || fetchedAddresses.length === 0) {
        console.log("no addresses or addresses null");
        return;
      }

      setSelectedExistingAddresses(fetchedAddresses);

      fetchedAddresses.filter((address) => {
        if (address.isPrimary) {
          setPrimaryAddress(address);
        }
      });
      console.log("updated existing addys");
    }
    fetchExistingAddresses();
  }, [updated]);

  const router = useRouter();

  function closeAddressScreen() {
    router.back();
  }

  function mapAddressResponseToAddressRequest(
    address: AddressRespDto
  ): AddressRequest {
    return {
      id: address.id + "",
      primary: address.isPrimary,
      unit: address.unit,
      street: address.street,
      city: address.city,
      province: address.province,
      postalCode: address.postalCode,
      country: address.country,
      latitude: address.latitude,
      longitude: address.longitude,
    };
  }

  function mapAddressesResponseToAddressesRequest(
    addresses: AddressRespDto[]
  ): AddressRequest[] {
    return addresses.map((address) =>
      mapAddressResponseToAddressRequest(address)
    );
  }

  return (
    <DismissKeyboardView>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.button} onPress={closeAddressScreen}>
            <AntDesign name="close" size={20} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Search an address</Text>
        </View>

        {/* Search box for Address */}
        <GoogleAutoCompleteSearchBox
          selectedExistingAddresses={mapAddressesResponseToAddressesRequest(
            selectedExistingAddresses
          )}
          addAddress={addLocalAddress}
          setSearchText={setSearchText}
          searchText={searchText}
          clearAddressInput={clearAddressInput}
          setIsFocused={setIsFocused}
        />

        {/* Saved Address Section */}
        {!isFocused && selectedExistingAddresses.length > 0 && (
          <>
            <Text style={styles.subtitle}>Saved Addresses</Text>

            <UserAddressesContainer
              selectedExistingAddresses={selectedExistingAddresses}
              primaryAddress={primaryAddress}
              handleSelectPrimaryAddress={handleSelectPrimaryAddress}
            />
          </>
        )}
      </SafeAreaView>
    </DismissKeyboardView>
  );
};

export default AddressScreen;
