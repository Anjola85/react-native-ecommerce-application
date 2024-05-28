import { View, Text, StyleSheet, Dimensions, Touchable } from "react-native";
import React, { useState } from "react";
import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import EditAddressModal from "../../../../onboarding/address-screen/components/EditAddressModal";
import { AddressRequest } from "../../../../../api/api-contracts/user/requests/dto/address.request";
import { useRouter } from "expo-router";
import { AddressRespDto } from "../../../../../api/api-contracts/user/responses/address.response";

interface UserAddressProps {
  isSelected?: boolean;
  address: AddressRespDto;
  hasSeperator?: boolean;
  setAsPrimary: (address: AddressRespDto) => void;
}

const UserAddress: React.FC<UserAddressProps> = ({
  isSelected,
  address,
  hasSeperator,
  setAsPrimary,
}) => {
  const { street, city, province, postalCode } = address;

  const width = Dimensions.get("window").width;

  const scale = width / 430;

  const router = useRouter();

  function handlePress() {
    console.log("address pressed");
    setAsPrimary(address);
    console.log("street: ", street);
    // TODO: set primary address to server
  }

  function handleEdit() {
    router.push(
      `/home/editAddress?source=/home/address&value=${JSON.stringify(
        address
      )}&isUpdate=true`
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.left}>
            {isSelected ? (
              <Ionicons
                name="checkmark"
                size={24 * scale}
                color="#204B38"
                style={{ marginRight: 5 }}
              />
            ) : (
              <MaterialCommunityIcons
                name="map-marker-outline"
                size={24 * scale}
                color="rgba(39, 38, 38, 0.6)"
                style={{ marginRight: 5 }}
              />
            )}
            <View>
              <Text
                style={[
                  styles.street,
                  { color: isSelected ? "#204B38" : "rgba(39, 38, 38, 0.6)" },
                ]}
              >
                {street}
              </Text>
              <Text
                style={[
                  styles.sub,
                  { color: isSelected ? "#204B38" : "rgba(39, 38, 38, 0.6)" },
                ]}
              >{`${city}, ${province} ${postalCode}`}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Feather
          name="edit-3"
          size={22 * scale}
          color={isSelected ? "#204B38" : "rgba(39, 38, 38, 0.6)"}
          onPress={handleEdit}
        />
      </View>

      {hasSeperator && <View style={styles.seperator} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginBottom: 20,
    position: "relative",
    width: "100%",
  },
  seperator: {
    height: 2,
    backgroundColor: "#E8E8E8",
    boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.25)",
    opacity: 0.5,
    position: "absolute",
    bottom: -10,
    width: "100%",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    // paddingHorizontal: 20,
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  street: {
    marginBottom: 3,
  },
  sub: {
    fontWeight: "300",
    fontSize: 12,
  },
});

export default UserAddress;
