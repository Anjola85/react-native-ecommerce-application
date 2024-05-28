import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { headerStyles as styles } from "../../styles";
import { useRouter } from "expo-router";
import FlagDropdown from "../flag-dropdown/FlagDropdown";
import RegionModal from "../../../../components/custom-modals/RegionModal";
import {
  USER_ADDRESS_LIST,
  USER_COORDINATES,
  USER_FIRST_NAME,
} from "../../../../store/cache/cacheKeys";
import { getItemFromCache } from "../../../../store/cache/cache";
import { AddressListRespDto } from "../../../../api/api-contracts/user/responses/address.response";
import { LatLng } from "react-native-maps";
import { getAddressFromCoordinates } from "../../../../utils/address/addressUtils";
import {
  capitalizeFirstLetter,
  keepStringBeforeFirstComma,
} from "../../../../utils/string/stringUtils";

const Heading = () => {
  const router = useRouter();
  const [name, setName] = React.useState<string>("");
  const [address, setAddress] = React.useState<string>("");

  function handleAddressPress() {
    router.push(`/home/address`);
  }

  function handleNotificationPress() {
    router.push(`/home/notifications`);
  }

  function handleCartPress() {
    router.push(`/home/cartPage`);
  }

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const firstname = (await getItemFromCache(USER_FIRST_NAME)) as string;
        const addresses = (await getItemFromCache(
          USER_ADDRESS_LIST
        )) as AddressListRespDto;

        const cood = (await getItemFromCache(USER_COORDINATES)) as LatLng;

        let primaryAddress = null;

        if (addresses) {
          primaryAddress = addresses.addressList.find(
            (address) => address.isPrimary
          );
        }

        let addressToSet = "No Address";

        if (!primaryAddress && cood) {
          const addressFromCoordinates = await getAddressFromCoordinates(
            cood.latitude,
            cood.longitude
          );
          const unwanted = ["Unnamed Street", "Unnamed Road", "Unnamed Path"];

          const streetNumber = addressFromCoordinates?.streetNumber;

          const streetName = addressFromCoordinates?.street;

          if (
            streetNumber &&
            streetName &&
            !unwanted.includes(streetNumber) &&
            !unwanted.includes(streetName)
          ) {
            addressToSet = `${streetNumber} ${streetName}`;
          }
        } else if (primaryAddress) {
          addressToSet = keepStringBeforeFirstComma(primaryAddress.street);
        }

        setAddress(addressToSet);
        setName(capitalizeFirstLetter(firstname));
      } catch (error) {
        // Handle errors
        console.error("Error fetching user info:", error);
      }
    }

    fetchUserInfo();
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "PoppinsRegular",
          width: 100,
          flexWrap: "wrap",
        }}
      >
        Hi, {name}✨
      </Text>
      <TouchableOpacity
        style={styles.address_container}
        onPress={handleAddressPress}
      >
        <Text style={{ fontFamily: "PoppinsRegular" }}>{address}</Text>
        <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
      </TouchableOpacity>
      <View style={styles.icon_container}>
        <TouchableOpacity onPress={handleNotificationPress}>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
        {/* <TouchableOpacity style={{ marginLeft: 10 }} onPress={handleCartPress}>
          <AntDesign name="shoppingcart" size={24} color="black" />
        </TouchableOpacity> */}
        <FlagDropdown />
      </View>
    </View>
  );
};

export default Heading;
