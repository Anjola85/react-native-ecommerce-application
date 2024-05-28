import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import { Audio } from "expo-av";
import { SafeAreaView } from "react-native-safe-area-context";
import LoadingButton from "../../../components/buttons/loading-button/LoadingButton";
import { Feather } from "@expo/vector-icons";
import { formatPhoneNumber } from "../../../utils/phone/phoneUtils";
import { theme } from "../../../constants/theme";
import { useRouter, useLocalSearchParams } from "expo-router";
import styles from "./styles/LoginOTPStyles";
import CheckSvg from "../../../components/loading/spinners/CheckSvg";
import { requestLocation } from "../../../utils/geolocation/useLocation";
import { addToCache } from "../../../store/cache/cache";
import { USER_COORDINATES } from "../../../store/cache/cacheKeys";
import { LatLng } from "react-native-maps";
import { SendOtpResponse } from "../../../api/api-contracts/user/responses/sendOtp.response";
import { loginApi, loginOtpRequest } from "../../../api/endpoints/authApi";
import { LoginOtpRequest } from "../../../api/api-contracts/user/requests/loginOtp.request";
import { SecureLoginRequest } from "../../../api/api-contracts/user/requests/login.request";
import { loadAllAssetsToCache } from "../../../store/functions/business";

interface Mobile {
  phoneNumber: string;
  countryCode: string; // +1
  isoType: string; // CA
}

const KNOWN_SOURCES = ["phone", "email"];

const LoginOTPScreen = () => {
  const PIN_LENGTH = 4;

  const router = useRouter();
  const item = useLocalSearchParams();

  const source = item.source; //email or phone
  const otpItem = item.value;

  const [errorMessage, setErrorMessage] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccessfull, setIsSuccessfull] = useState<boolean>(false);

  // error handling: if the email or mobile is not passed, navigate back to the previous screen
  useEffect(() => {
    setPin("");
    setIsSuccessfull(false);
    setErrorMessage("");

    const shouldNavigateBack =
      !KNOWN_SOURCES.includes(source as string) || !otpItem;
    if (shouldNavigateBack) {
      router.push("/(auth)/signup");
    }
  }, []);

  const [pin, setPin] = useState("");
  const pinInput1 = useRef<TextInput>(null);
  const pinInput2 = useRef<TextInput>(null);
  const pinInput3 = useRef<TextInput>(null);
  const pinInput4 = useRef<TextInput>(null);

  /**
   * Handles the change of the pin input
   * @param value
   * @param index
   */
  const handlePinChange = (value: string, index: number) => {
    value = value.replace(/[^0-9]+/g, "");
    if (value === "") {
      // Backspace or delete button pressed
      if (index === 0) {
        // Clear all text inputs and focus the first input
        setPin("");
        if (pinInput1.current) {
          pinInput1.current.focus();
        }
      } else {
        // Move the cursor to the previous input and clear the current input
        if (index === 1) {
          setPin((prev) => prev.substring(0, 1));
          pinInput1.current?.focus();
        } else if (index === 2) {
          setPin((prev) => prev.substring(0, 2));
          pinInput2.current?.focus();
        } else if (index === 3) {
          setPin((prev) => prev.substring(0, 3));
          pinInput3.current?.focus();
        }
      }
    } else {
      // Regular digit entered
      setPin((prev) => {
        let newPin = prev;
        if (index === 0) {
          newPin = value;
          if (pinInput2.current) {
            pinInput2.current.focus();
          }
        } else if (index === 1) {
          newPin = prev.substring(0, 1) + value;
          if (pinInput3.current) {
            pinInput3.current.focus();
          }
        } else if (index === 2) {
          newPin = prev.substring(0, 2) + value;
          if (pinInput4.current) {
            pinInput4.current.focus();
          }
        } else if (index === 3) {
          newPin = prev.substring(0, 3) + value;
          Keyboard.dismiss();
        }
        return newPin;
      });
    }
  };

  //TODO: REMOVE IF NOT BEING CALLED
  const displayPhoneNumber = () => {
    if (source !== "phone") return otpItem;

    let phone = new String(otpItem);
    const phoneItems = phone.split(", "); // [phoneNumber, countryCode, isoType]

    return `${phoneItems[1]} ${formatPhoneNumber(phoneItems[0])}`;
  };

  /**
   * This method returns the mobile object from the otpItem
   * otpItem must be a string containing the phone number
   * The Mobile object is used to better send requests to the server
   *
   * @returns Mobile object
   */
  const getPhoneNumberObject = (): Mobile => {
    if (source !== "phone") throw new Error("otpItem is not a phone number");

    let phone = new String(otpItem);
    const phoneItems = phone.split(", "); // [phoneNumber, countryCode, isoType]

    return {
      phoneNumber: phoneItems[0],
      countryCode: phoneItems[1],
      isoType: phoneItems[2],
    };
  };

  const handleSubmit = async () => {
    Keyboard.dismiss();
    setIsLoading(true);
    if (pin.length !== PIN_LENGTH) {
      setIsLoading(false);
      setErrorMessage("Oh no! The code you provided is incomplete");
    }

    const { location, errorMsg } = await requestLocation();

    if (errorMsg) {
      setIsLoading(false);
      setErrorMessage("Error getting location: " + errorMsg);
      return;
    }

    if (location) {
      const userCoordinates: LatLng = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      addToCache({ key: USER_COORDINATES, value: userCoordinates });
    }

    const mobile = getPhoneNumberObject();

    const loginRequest: SecureLoginRequest = {
      code: pin,
      mobile: {
        phoneNumber: mobile.phoneNumber,
        countryCode: mobile.countryCode,
        isoType: mobile.isoType,
      },
    };

    const userInformation = await loginApi(loginRequest);

    if (userInformation.status) {
      await loadAllAssetsToCache();
      setIsLoading(false);
      setIsSuccessfull(true);
      playCompletionSound();
      setTimeout(() => {
        router.replace("/(tabs)/home");
      }, 2000);
    } else {
      setIsLoading(false);
      setErrorMessage(userInformation.message);
    }
  };

  const playCompletionSound = async () => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(
        require("../../../assets/sounds/login-chime1.mp3")
      );
      await soundObject.playAsync();
    } catch (error) {
      console.log("Error playing sound: ", error);
    }
  };

  /**
   * Calls the loginOtpRequest to resend the otp code
   * @returns
   */
  async function resendCode(): Promise<SendOtpResponse> {
    const mobile: Mobile = getPhoneNumberObject();
    const sendOtpRequest: LoginOtpRequest = {
      mobile: {
        phoneNumber: mobile.phoneNumber,
        countryCode: mobile.countryCode,
        isoType: mobile.isoType,
      },
    };
    const resp: SendOtpResponse = await loginOtpRequest(sendOtpRequest);
    return resp;
  }

  const formatOTPSourceText = () => {
    switch (source) {
      case "phone":
        return "phone number";
      case "email":
        return "email";
      default:
        return "empty";
    }
  };

  const buttonContent = () => {
    if (isSuccessfull) {
      return <CheckSvg />;
    } else {
      return <Text style={[styles.text, { color: "#fff" }]}>Continue</Text>;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Feather
          name="arrow-left"
          size={24}
          color="black"
          style={{ position: "absolute", top: 55, left: 15 }}
          onPress={() => {
            router.push("/(auth)/login");
          }}
        />
        <Text style={[styles.text_heading, { marginBottom: 40 }]}>
          Enter Code
        </Text>
        <Text style={[styles.text, { marginBottom: 20, textAlign: "center" }]}>
          Enter the code, we sent to your {formatOTPSourceText()}
        </Text>
        <View style={styles.pin_input}>
          <TextInput
            style={styles.pin_input_box}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(value) => handlePinChange(value, 0)}
            value={pin.substring(0, 1)}
            ref={pinInput1}
          />
          <TextInput
            style={styles.pin_input_box}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(value) => handlePinChange(value, 1)}
            value={pin.substring(1, 2)}
            ref={pinInput2}
          />
          <TextInput
            style={styles.pin_input_box}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(value) => handlePinChange(value, 2)}
            value={pin.substring(2, 3)}
            ref={pinInput3}
          />
          <TextInput
            style={styles.pin_input_box}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(value) => handlePinChange(value, 3)}
            value={pin.substring(3, 4)}
            ref={pinInput4}
          />
        </View>
        <Text style={[styles.text, { marginBottom: 50 }]}>
          Didn't receive the code?{" "}
          <Text
            style={{ color: theme.colors.primary }}
            onPress={() => resendCode()}
          >
            Resend
          </Text>
        </Text>

        <Text style={[styles.error_message]}>{errorMessage}</Text>

        <LoadingButton
          onPress={() => handleSubmit()}
          button_style={{
            width: "80%",
            maxWidth: 350,
          }}
          disabled={pin.length !== PIN_LENGTH}
          isLoading={isLoading}
        >
          {buttonContent()}
        </LoadingButton>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginOTPScreen;
