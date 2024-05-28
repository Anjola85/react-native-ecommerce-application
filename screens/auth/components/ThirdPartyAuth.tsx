import React, { useEffect } from "react";
import { View, Text } from "react-native";
import styles from "../styles/ThirdPartyStyles";
import Button from "../../../components/buttons/button/Button";
import useGoogleAuth from "../../../utils/auth/useGoogleAuth";
import GoogleIconSvg from "../../../components/buttons/button/components/GoogleIconSvg";
import useAppleAuth from "../../../utils/auth/useAppleAuth";

const ThirdPartyAuth = () => {
  //   const [request, response, promptAsync, canGoogleNavigate, userInfo] =
  //   useGoogleAuth();

  const [credential, canAppleNavigate, getAppleAuthContent] = useAppleAuth();

  // useEffect(() => {
  //     if (canGoogleNavigate) {
  //       addToCache({ key: USER_EMAIL, value: userInfo.email });
  //       addToCache({ key: USER_FIRST_NAME, value: userInfo.given_name });
  //       addToCache({ key: USER_LAST_NAME, value: userInfo.family_name });
  //       addToCache({ key: USER_PROFILE_IMAGE, value: userInfo.picture });

  //       // request to send this data to server

  //       navigation?.navigate("Tabs");
  //     }
  // }, [canGoogleNavigate]);

  useEffect(() => {
    if (canAppleNavigate) {
      //   addToCache({ key: USER_EMAIL, value: credential.email });
      //   addToCache({
      //     key: USER_FIRST_NAME,
      //     value: credential.fullName?.givenName,
      //   });
      //   addToCache({
      //     key: USER_LAST_NAME,
      //     value: credential.fullName?.familyName,
      //   });
      // send data to server
      //   navigation?.navigate("Tabs");
    }
  }, [canAppleNavigate]);

  return (
    <View style={styles.signup_buttons}>
      <Button
        onPress={() => {
          //   promptAsync();
        }}
        button_style={styles.signup}
        // disabled={!request}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", height: 25 }}
        >
          <GoogleIconSvg style={{ marginRight: 10 }} />
          <Text style={{ fontSize: 16, fontFamily: "NunitoRegular" }}>
            Continue with Google
          </Text>
        </View>
      </Button>
      {getAppleAuthContent()}
    </View>
  );
};

export default ThirdPartyAuth;
