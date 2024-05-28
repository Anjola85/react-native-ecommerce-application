import React, { useState } from "react";
import { Text } from "react-native";
import PhoneNumberInput from "../../../../components/forms/phone-number-input/PhoneNumberInput";
import { PhoneInput } from "../../../../components/forms/phone-number-input/props/PhoneInput";
import CheckSvg from "../../../../components/loading/spinners/CheckSvg";
import LoadingButton from "../../../../components/buttons/loading-button/LoadingButton";
import styles from "../styles/LoginStyles";
import { useRouter } from "expo-router";
import { loginOtpRequest } from "../../../../api/endpoints/authApi";
import { LoginOtpRequest } from "../../../../api/api-contracts/user/requests/loginOtp.request";
import { SendOtpResponse } from "../../../../api/api-contracts/user/responses/sendOtp.response";
import { MobileRequest as Mobile } from "../../../../api/api-contracts/user/requests/dto/mobile.request";
import { addToCache } from "../../../../store/cache/cache";
import { USER_MOBILE } from "../../../../store/cache/cacheKeys";

const LogInWithPhone = () => {
  const router = useRouter();

  const [phoneDetails, setPhoneDetails] = useState<PhoneInput>();

  const [errorMessage, setErrorMessage] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccessfull, setIsSuccessfull] = useState<boolean>(false);

  const handleSendOtp = async (
    phoneDetails?: PhoneInput,
    email?: string
  ): Promise<SendOtpResponse> => {
    const phoneNumber = phoneDetails?.userPhoneNumber.phoneNumber || "";
    const countryCode = phoneDetails?.userPhoneNumber.countryCode || "";
    const isoType = phoneDetails?.userPhoneNumber.isoType || "";

    const mobile: Mobile = {
      phoneNumber: phoneDetails?.userPhoneNumber.phoneNumber || "",
      countryCode: phoneDetails?.userPhoneNumber.countryCode || "",
      isoType: phoneDetails?.userPhoneNumber.isoType || "",
    };

    // add mobile to cache
    addToCache({ key: USER_MOBILE, value: mobile });

    const sendOtpRequest: LoginOtpRequest = {
      mobile: {
        phoneNumber,
        countryCode,
        isoType,
      },
    };

    const response: SendOtpResponse = await loginOtpRequest(sendOtpRequest);
    return response;
  };

  const handleLogin = async () => {
    if (!phoneDetails?.isPhoneValid) {
      setErrorMessage("Please enter a valid phone number");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const resp: SendOtpResponse = await handleSendOtp(phoneDetails);

      if (resp.status) {
        setErrorMessage("");
        setIsSuccessfull(true);

        // navigate to the next screen
        setTimeout(() => {
          const phone = `${phoneDetails?.userPhoneNumber.phoneNumber}, ${phoneDetails?.userPhoneNumber.countryCode}, ${phoneDetails?.userPhoneNumber.isoType}`;
          const item = { source: "phone", value: phone };
          router.push({ pathname: `/(auth)/loginotp`, params: item });
        }, 1000);
        setIsSuccessfull(false);
      } else {
        setErrorMessage(resp.message);
        setIsSuccessfull(false);
      }
    } catch (error: any) {
      setErrorMessage(error.message);
      setIsSuccessfull(false);
    } finally {
      setIsLoading(false);
    }
  };

  const buttonContent = () => {
    if (isSuccessfull) {
      return <CheckSvg />;
    } else {
      return <Text>Continue</Text>;
    }
  };

  const phoneNumberInput = PhoneNumberInput({
    style: { marginBottom: 5, width: "90%", maxWidth: 400, marginTop: 5 },
    closeBtn: true,
    getPhoneDetails(phone) {
      setPhoneDetails(phone);
    },
  });

  return (
    <>
      {phoneNumberInput}

      <Text style={[styles.error_message]}>{errorMessage}</Text>

      <LoadingButton
        onPress={handleLogin}
        button_style={styles.login_button}
        text_style={styles.login_button_text}
        isLoading={isLoading}
      >
        {buttonContent()}
      </LoadingButton>
    </>
  );
};

export default LogInWithPhone;
