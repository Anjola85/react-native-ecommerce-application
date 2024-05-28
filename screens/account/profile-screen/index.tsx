import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/header/Header";
import ProfileTextBox from "./components/ProfileTextBox";
import {
  USER_EMAIL,
  USER_FIRST_NAME,
  USER_LAST_NAME,
  USER_MOBILE,
} from "../../../store/cache/cacheKeys";
import { getItemFromCache } from "../../../store/cache/cache";
import { MobileRespDto } from "../../../api/api-contracts/user/responses/mobile.response";
import { capitalizeFirstLetter } from "../../../utils/string/stringUtils";
import email from "../../../app/(auth)/email";
import { formatPhoneNumber } from "../../../utils/phone/phoneUtils";

const ProfileScreen = () => {
  const [userprofile, setUserProfile] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  }>({
    firstName: "Empty",
    lastName: "Empty",
    email: "Empty",
    phoneNumber: "Empty",
  });

  function saveFirstName(firstName: string) {
    console.log(firstName);
  }

  function saveLastName(lastName: string) {
    console.log(lastName);
  }

  function saveEmail(email: string) {
    console.log(email);
  }

  function savePhoneNumber(phoneNumber: string) {
    console.log(phoneNumber);
  }

  function saveDateOfBirth(dateOfBirth: string) {
    console.log(dateOfBirth);
  }

  useEffect(() => {
    async function fetchUserProfile() {
      const userFirstName = (await getItemFromCache(USER_FIRST_NAME)) as string;
      const userLastName = (await getItemFromCache(USER_LAST_NAME)) as string;
      const userEmail = (await getItemFromCache(USER_EMAIL)) as string;
      const userPhoneNumber = (await getItemFromCache(
        USER_MOBILE
      )) as MobileRespDto;

      const countryCode = userPhoneNumber?.countryCode;
      const phoneNumber = userPhoneNumber?.phoneNumber;

      const fetchedUserProfile = {
        firstName: capitalizeFirstLetter(userFirstName),
        lastName: capitalizeFirstLetter(userLastName),
        email: capitalizeFirstLetter(userEmail),
        phoneNumber: `${countryCode} ${formatPhoneNumber(phoneNumber)}`,
      };

      if (JSON.stringify(fetchedUserProfile) !== JSON.stringify(userprofile)) {
        setUserProfile(fetchedUserProfile);
      }
    }

    fetchUserProfile();
  }, [userprofile]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Personal Info" hasSeperator hasButton isCloseButton />
      {/* TODO: too fucking ugly. NEEDS REDESIGN */}
      {/* <View style={styles.profile_heading}>
        <Image
          source={require("../../../assets/images/no_pic.png")}
          style={styles.avatar}
        />
        <Text style={styles.username}>{userprofile.firstName}</Text>
      </View> */}
      <View style={styles.text_box_container}>
        <ProfileTextBox
          label="First name"
          initialValue={userprofile.firstName}
          save={saveFirstName}
        />
        <ProfileTextBox
          label="Last name"
          initialValue={userprofile.lastName}
          save={saveLastName}
        />
        <ProfileTextBox
          label="Email"
          initialValue={userprofile.email}
          save={saveEmail}
        />
        <ProfileTextBox
          label="Phone number"
          initialValue={userprofile.phoneNumber}
          save={savePhoneNumber}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  profile_heading: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignSelf: "flex-start",
    paddingVertical: 15,
  },
  avatar: {
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  username: {
    fontSize: 16,
    fontFamily: "PoppinsMedium",
    alignSelf: "center",
    marginTop: 5,
    letterSpacing: 0.5,
  },
  text_box_container: {
    width: "100%",
    paddingHorizontal: 10,
  },
});

export default ProfileScreen;
