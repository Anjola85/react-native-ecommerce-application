import { SafeAreaView } from "react-native-safe-area-context";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { accountScreenStyles } from "./styles";
import Header from "../../../components/header/Header";
import { ScrollView, View } from "react-native";
import {
  AccountLinkContainer,
  CreateImpactBanner,
  LogoutButton,
} from "./components";
import { generalLinks, socialLinks, miscellanousLinks } from "./data";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import LogoutSelection from "./components/logout-button/component/LogoutSelection";

const AccountScreen = () => {
  const snapPoints = useMemo(() => ["30%", "50%"], []);
  const [index, setIndex] = useState(-1);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpenBottomSheet() {
    bottomSheetRef.current?.snapToIndex(0);
  }

  function handleLogoutBtn() {
    handleOpenBottomSheet();
  }

  function handleLogout() {
    console.log("Logout");
  }

  function handleLogoutCancel() {
    bottomSheetRef.current?.close();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Settings" />

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <CreateImpactBanner />
        <View style={{ marginBottom: 30 }}>
          <AccountLinkContainer hasSeparator data={generalLinks} />
          <AccountLinkContainer hasSeparator data={miscellanousLinks} />
          <AccountLinkContainer data={socialLinks} />
        </View>
        <LogoutButton logoutFunc={handleLogoutBtn} />
      </ScrollView>

      <BottomSheet
        ref={bottomSheetRef}
        index={index}
        snapPoints={snapPoints}
        style={{
          backgroundColor: "red",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
      >
        <LogoutSelection
          cancelLogoutFunc={handleLogoutCancel}
          logoutFunc={handleLogout}
        />
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = accountScreenStyles;

export default AccountScreen;
