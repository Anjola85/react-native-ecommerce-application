import BottomSheet, { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import React, { useState } from "react";
import { View, Text, Platform } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import styles from "./styles/AddressScreenStyles";
import { mapStyle } from "./styles/MapStyles";
import { initialRegion } from "./data/mapData";
import FirstAddressModal from "./components/FirstAddressModal";
import AddressSelectionModal from "./components/AddressSelectionModal";
import { GoogleAutoCompleteAddress } from "./props/AddressSelectionModalProps";
import SummaryAddressModal from "./components/SummaryAddressModal";
import { useRouter } from "expo-router";
import { addToCache } from "../../../store/cache/cache";
import { USER_ADDRESS } from "../../../store/cache/cacheKeys";
import EditAddressModal from "./components/EditAddressModal";
import { AddressRequest } from "../../../api/api-contracts/user/requests/dto/address.request";

const OnboardingAddressScreen = () => {
  const router = useRouter();
  const [modalLevel, setModalLevel] = useState<string>(
    Platform.OS === "ios" ? "30%" : "32%"
  );
  const [activeModalComponent, setActiveModalComponent] =
    useState<string>("firstAddressModal");
  const [userAddress, setUserAddress] = useState<GoogleAutoCompleteAddress>({
    addressObject: {
      unit: "",
      street: "",
      city: "",
      province: "",
      postalCode: "",
      country: "",
      primary: false,
      id: "",
      latitude: 0,
      longitude: 0,
    },
    main_address: "",
    secondary_address: "",
  });

  const getUserAddress = (address: GoogleAutoCompleteAddress) => {
    setUserAddress(address);
    selectSummaryAddressModal();
  };

  const selectFirstAddressModal = () => {
    setActiveModalComponent("firstAddressModal");
    setModalLevel("32%");
  };

  const selectAddressSelectionModal = () => {
    setActiveModalComponent("addressSelectionModal");
    setModalLevel("80%");
  };

  const selectSummaryAddressModal = () => {
    setActiveModalComponent("summaryAddressModal");
    setModalLevel("45%");
  };

  const selectEditAddressModal = () => {
    setActiveModalComponent("editAddressModal");
    setModalLevel("100%");
  };

  const finishEditing = (address: AddressRequest) => {
    selectSummaryAddressModal();
    setUserAddress((prevState) => {
      return {
        ...prevState,
        addressObject: address,
      };
    });
  };

  const handleAddressConfirmation = () => {
    addToCache({ key: USER_ADDRESS, value: userAddress.addressObject });
    // goToNextScreen();
  };

  // const goToNextScreen = () => {
  //   router.push("/home/first-question");
  // };

  const modalContent = () => {
    switch (activeModalComponent) {
      case "firstAddressModal":
        return (
          <FirstAddressModal
            onButtonPress={() => setModalLevel("30%")}
            onSearchBarPress={selectAddressSelectionModal}
          />
        );
      case "addressSelectionModal":
        return (
          <AddressSelectionModal
            onAddressSelected={getUserAddress}
            onAddressSelectionCancelled={selectFirstAddressModal}
          />
        );
      case "summaryAddressModal":
        return (
          <SummaryAddressModal
            address={userAddress}
            onConfirm={handleAddressConfirmation}
            onEdit={selectEditAddressModal}
            onBack={selectAddressSelectionModal}
          />
        );
      case "editAddressModal":
        return (
          <EditAddressModal
            onAddressEdited={finishEditing}
            onFinishedEditing={() => {}}
            address={userAddress.addressObject}
          />
        );
      default:
        return (
          <FirstAddressModal
            onButtonPress={() => setModalLevel("30%")}
            onSearchBarPress={() => setModalLevel("100%")}
          />
        );
    }
  };

  return (
    <BottomSheetModalProvider>
      <MapView
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        style={styles.map}
        initialRegion={initialRegion}
        scrollEnabled={false} // disable map dragging
      ></MapView>
      <BottomSheet snapPoints={[modalLevel]} index={0}>
        {modalContent()}
      </BottomSheet>
    </BottomSheetModalProvider>
  );
};

export default OnboardingAddressScreen;
