import React, { useState, useEffect } from "react";
import { View } from "react-native";
import * as Apple from "expo-apple-authentication";

const useAppleAuth = () => {
  const [appleAuthAvailable, setAppleAuthAvailable] = useState(false);
  const [canNavigateToNext, setCanNavigateToNext] = useState(false);
  const [userCredential, setUserCredential] = useState<any>(null);

  useEffect(() => {
    const checkAvailable = async () => {
      const isAvailable = await Apple.isAvailableAsync();
      setAppleAuthAvailable(isAvailable);
    };
    checkAvailable();
  }, []);

  const getAppleAuthContent = () => {
    if (appleAuthAvailable) {
      return (
        <Apple.AppleAuthenticationButton
          buttonType={Apple.AppleAuthenticationButtonType.CONTINUE}
          buttonStyle={Apple.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={50}
          style={{
            width: "70%",
            height: 47,
            borderRadius: 50,
          }}
          onPress={async () => {
            try {
              const credential = await Apple.signInAsync({
                requestedScopes: [
                  Apple.AppleAuthenticationScope.FULL_NAME,
                  Apple.AppleAuthenticationScope.EMAIL,
                ],
              });
              if (credential) {
                setCanNavigateToNext(true);
                setUserCredential(credential);
              }
              console.log("Apple Sign In Credential: ", credential);
              console.log("Apple sign in successful.");
            } catch (e: any) {
              if (e.code === "ERR_CANCELED") {
                console.log("User canceled Apple Sign in.");
              } else {
                console.log("Apple Sign In Error: ", e);
              }
            }
          }}
        />
      );
    } else {
      return <View style={{ width: 200, height: 44 }} />;
    }
  };

  return [userCredential, canNavigateToNext, getAppleAuthContent];
};

export default useAppleAuth;
