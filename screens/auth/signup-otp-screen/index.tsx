import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoadingButton from "../../../components/buttons/loading-button/LoadingButton";
import { formatPhoneNumber } from "../../../utils/phone/phoneUtils";
import { theme } from "../../../constants/theme";
import { useRouter, useLocalSearchParams } from "expo-router";
import styles from "./styles/SignUpOTPStyles";
import CheckSvg from "../../../components/loading/spinners/CheckSvg";
import { PhoneInput } from "../../../components/forms/phone-number-input/props/PhoneInput";
import { SendOtpRequest } from "../../../api/api-contracts/user/requests/sendOtp.request";
import { signupOtpRequest, verifyOtp } from "../../../api/endpoints/authApi";
import { getItemFromCache } from "../../../store/cache/cache";
import { USER_MOBILE } from "../../../store/cache/cacheKeys";
import { VerifyOtpRequest } from "../../../api/api-contracts/user/requests/verifyOtp.requet";
import { ApiResponse } from "../../../api/api-contracts/user/responses/response";

interface Mobile {
  phoneNumber: string;
  countryCode: string; // +1
  isoType: string; // CA
}

const SignUpOTPScreen = () => {
  const PIN_LENGTH = 4;

  const router = useRouter();
  const item = useLocalSearchParams();

  const source = item.source; //email or phone
  const otpItem = item.value;

  const [pin, setPin] = useState("");
  const pinInput1 = useRef<TextInput>(null);
  const pinInput2 = useRef<TextInput>(null);
  const pinInput3 = useRef<TextInput>(null);
  const pinInput4 = useRef<TextInput>(null);

  const [errorMessage, setErrorMessage] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccessfull, setIsSuccessfull] = useState<boolean>(false);

  // error handling: if the email or mobile is not passed, navigate back to the previous screen
  useEffect(() => {
    setPin("");
    setIsSuccessfull(false);
    setErrorMessage("");

    if (!source || !otpItem) {
      router.push("/(auth)/signup");
    }
  }, []);

  /**
   * Makes call to the server to send an OTP to the user
   * @param phoneDetails
   * @param email
   */
  const resendCode = async () => {
    const cachedPhone = await getItemFromCache(USER_MOBILE);

    if (!cachedPhone) throw new Error("Phone number not found in cache");

    //TODO: fix the issue here
    const phoneDetails: Mobile = cachedPhone as Mobile;

    const requestData: SendOtpRequest = {
      mobile: {
        countryCode: phoneDetails.countryCode || "",
        phoneNumber: phoneDetails.phoneNumber || "",
        isoType: phoneDetails.isoType || "",
      },
    };
    try {
      const response = await signupOtpRequest(requestData);
      console.log("OTP sent successfully", response);
      // Handle success, such as showing a success message or navigating
    } catch (error) {
      console.error("Error sending OTP", error);
      // Handle error, such as showing an error message
    }
  };

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

  const verifyOTP = async (): Promise<ApiResponse> => {
    const requestData: VerifyOtpRequest = {
      code: pin,
    };
    try {
      const response = await verifyOtp(requestData);
      return response;
    } catch (error) {
      console.error("Error sending OTP", error);
      // Handle error, such as showing an error message
    }
    return {} as ApiResponse;
  };

  const handleSubmit = async () => {
    Keyboard.dismiss();
    setIsLoading(true);
    if (pin.length !== PIN_LENGTH) {
      setIsLoading(false);
      setErrorMessage("Oh no! The code you provided is incomplete");
    }

    const response: ApiResponse = await verifyOTP();

    setIsLoading(false);

    if (response && response.status) {
      setErrorMessage("");
      setIsSuccessfull(true);

      router.push("/(auth)/fullname");
    } else {
      setIsSuccessfull(false);
      setErrorMessage(response.message);
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
        <Text style={[styles.text_heading, { marginBottom: 40 }]}>
          Verification Code
        </Text>
        <Text
          style={[
            styles.text,
            { marginBottom: 20, maxWidth: 245, textAlign: "center" },
          ]}
        >
          We've sent a verification code to your{" "}
          {source === "email" ? "email" : "mobile number"}
        </Text>
        <Text
          style={[
            styles.text,
            { marginBottom: 30, color: theme.colors.primary },
          ]}
        >
          {source === "phone" ? displayPhoneNumber() : String(otpItem)}
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

export default SignUpOTPScreen;
