import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import EditAddressModal from "../../../../onboarding/address-screen/components/EditAddressModal";
import { AddressRequest } from "../../../../../api/api-contracts/user/requests/dto/address.request";
import { useLocalSearchParams, useRouter } from "expo-router";
import { addAddress, updateUnit } from "../../../../../api/endpoints/userApi";
import { AddressRespDto } from "../../../../../api/api-contracts/user/responses/address.response";

const EditAddressScreen = () => {
  const item = useLocalSearchParams();

  const address = JSON.parse(item.value as string) as AddressRespDto;
  const isUpdate = item.isUpdate as string;

  console.log("isUpdate: ", isUpdate);

  const [userAddress, setUserAddress] = useState<AddressRespDto>({
    id: address.id,
    isPrimary: address.isPrimary || false,
    unit: address.unit || "",
    street: address.street || "",
    city: address.city || "",
    province: address.province || "",
    postalCode: address.postalCode || "",
    country: address.country || "",
    latitude: address.latitude,
    longitude: address.longitude,
  });

  const router = useRouter();

  const finishEditing = async (address: AddressRespDto) => {
    setUserAddress((prevState) => {
      return {
        ...prevState,
        addressObject: address,
      };
    });

    console.log("address ID: ", address.id);

    if (isUpdate) {
      await updateUnit({
        id: address.id,
        unit: address.unit || "",
      });
    } else {
      await addAddress({
        street: address.street,
        city: address.city,
        province: address.province,
        postalCode: address.postalCode,
        country: address.country,
      });
    }

    const pageToGoBackTo = item.source as string;
    console.log("pageToGoBackTo: ", pageToGoBackTo);
    let path = pageToGoBackTo.trim();
    path = path.startsWith("/") ? path.slice(1) : path;
    router.push({
      pathname: `/${path}`,
      params: { source: "/home/editAddress", value: "updated" },
    });
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <EditAddressModal
      onAddressEdited={finishEditing}
      onFinishedEditing={handleBack}
      address={userAddress}
    />
  );
};

export default EditAddressScreen;
