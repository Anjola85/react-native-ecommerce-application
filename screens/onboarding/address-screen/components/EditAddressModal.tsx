import { useState, useEffect, useRef } from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import styles from "../styles/EditAddressModalStyles";
import { EditAddressModalProps } from "../props/EditAddressModalProps";
import { AddressRequest } from "../../../../api/api-contracts/user/requests/dto/address.request";
import { theme } from "../../../../constants/theme";
import Button from "../../../../components/buttons/button/Button";
import { AddressRespDto } from "../../../../api/api-contracts/user/responses/address.response";
import { BottomSheetRefProps } from "../../../../components/bottom-sheet/props/BottomSheetProps";
import BottomSheet from "../../../../components/bottom-sheet/BottomSheet";
import ConfirmDeleteAddress from "./ConfirmDeleteAddress";

const EditAddressModal = ({
  address,
  onAddressEdited,
  onFinishedEditing,
}: EditAddressModalProps) => {
  const [addressNickname, setAddressNickname] = useState("");
  const [inputsValid, setInputsValid] = useState(false);
  const [userAddress, setUserAddress] = useState<AddressRespDto>({
    isPrimary: true,
    id: address.id,
    unit: address.unit,
    street: address.street,
    city: address.city,
    province: address.province,
    country: address.country,
    postalCode: address.postalCode,
    latitude: address.latitude,
    longitude: address.longitude,
  });
  const deleteBottomRef = useRef<BottomSheetRefProps>(null);

  // useEffect(() => {
  //   setUserAddress(address);
  // }, []);

  /**
   * Check if all inputs are filled
   */
  const checkInputsValidity = () => {
    const { unit, street, city, province, country, postalCode } = userAddress;
    const isInputValid: boolean =
      unit !== "" &&
      street !== "" &&
      city !== "" &&
      province !== "" &&
      country !== "" &&
      postalCode !== "";
    setInputsValid(isInputValid);
  };

  const finishEditing = () => {
    // onFinishedEditing();
    onAddressEdited(userAddress);
  };

  const openConfirmDeletePopup = () => {
    deleteBottomRef?.current?.scrollTo(-290);
  }

  const onDelete = () => {
    onFinishedEditing();
  }

  const handleCancelDelete = () => {
    deleteBottomRef?.current?.scrollTo(100);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.background}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.content}>
            <View>
              <Text style={styles.title}>Address</Text>
              <TextInput
                value={userAddress.unit}
                placeholder="Apt/ Suite/floor Number"
                style={[styles.input_box]}
                onChangeText={(text) =>
                  setUserAddress({ ...userAddress, unit: text })
                }
                onBlur={checkInputsValidity}
              />
              <View style={[styles.input_box, { paddingHorizontal: 0 }]}>
                <TextInput
                  value={userAddress.street}
                  placeholder="Street Address"
                  style={styles.input_box}
                  onChangeText={(text) =>
                    setUserAddress({ ...userAddress, street: text })
                  }
                  onBlur={checkInputsValidity}
                />
                <AntDesign
                  name="closecircle"
                  size={16}
                  color="#AAA6A636"
                  style={{ position: "absolute", top: 18, right: 15 }}
                  onPress={() => {
                    setUserAddress({ ...userAddress, street: "" });
                    setInputsValid(false);
                  }}
                />
              </View>
              <TextInput
                value={userAddress.city}
                placeholder="City"
                style={styles.input_box}
                onChangeText={(text) =>
                  setUserAddress({ ...userAddress, city: text })
                }
                onBlur={checkInputsValidity}
              />
              <TextInput
                value={userAddress.province}
                placeholder="Province/State"
                style={styles.input_box}
                onChangeText={(text) =>
                  setUserAddress({ ...userAddress, province: text })
                }
                onBlur={checkInputsValidity}
              />
              <TextInput
                value={userAddress.country}
                placeholder="Country"
                style={styles.input_box}
                onChangeText={(text) =>
                  setUserAddress({ ...userAddress, country: text })
                }
                onBlur={checkInputsValidity}
              />
              <TextInput
                value={userAddress.postalCode}
                placeholder="Postal Code"
                style={styles.input_box}
                onChangeText={(text) =>
                  setUserAddress({ ...userAddress, postalCode: text })
                }
                onBlur={checkInputsValidity}
              />
            </View>
            <View style={styles.btn_container}>
              <Button
                onPress={openConfirmDeletePopup}
                button_style={{
                  width: "90%",
                  maxWidth: 400,
                  borderRadius: 7,
                  marginBottom: 0,
                  backgroundColor: "#979797",
                }}
              >
                <Text style={[styles.btn_text, { color: "#fff" }]}>
                  Delete
                </Text>
              </Button>
              <Button
                onPress={finishEditing}
                button_style={{
                  width: "90%",
                  maxWidth: 400,
                  borderRadius: 7,
                  marginBottom: 0,
                }}
              >
                <Text style={[styles.btn_text, { color: "#fff" }]}>
                  Finished
                </Text>
              </Button>
            </View>
          </View>
          <BottomSheet ref={deleteBottomRef}>
            <ConfirmDeleteAddress 
              onCancel={handleCancelDelete}
              address={userAddress}
              onDelete={onDelete}
            />
          </BottomSheet>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default EditAddressModal;
