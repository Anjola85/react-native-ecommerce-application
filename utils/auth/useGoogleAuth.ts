import React, { useState } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import Constants from 'expo-constants';
import axios from "axios";

WebBrowser.maybeCompleteAuthSession();

const useGoogleAuth = () => {
  const [token, setToken] = useState<string | undefined>("");
  const [userInfo, setUserInfo] = useState<any>(null);
  const [canNavigateToNext, setCanNavigateToNext] = useState<boolean>(false);

  const googleOAuth = Constants.expoConfig?.extra?.googleOAuth;

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: googleOAuth.expoClientId, 
    androidClientId: googleOAuth.androidClientId,
    iosClientId: googleOAuth.iosClientId,
    // useProxy: false,
    // projectNameForProxy: "@obito90/mobile-app",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication?.accessToken);
      getUserInfo();
    }
  }, [response, token]);

  React.useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
      setCanNavigateToNext(true);
    }
  }, [userInfo]);

  const getUserInfo = async () => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = response.data;
      setUserInfo(user);
    } catch (error) {
      console.log(error);
    }
  };

  return [request, response, promptAsync, canNavigateToNext, userInfo];
};

export default useGoogleAuth;
