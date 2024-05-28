import React, { useState } from "react";
import { Text } from "react-native";
import PhoneNumberInput from "../../../../components/forms/phone-number-input/PhoneNumberInput";
import { PhoneInput } from "../../../../components/forms/phone-number-input/props/PhoneInput";
import CheckSvg from "../../../../components/loading/spinners/CheckSvg";
import LoadingButton from "../../../../components/buttons/loading-button/LoadingButton";
import styles from "../styles/SignUpStyles";
import { useRouter } from "expo-router";
import { signupOtpRequest } from "../../../../api/endpoints/authApi";
import { SendOtpRequest } from "../../../../api/api-contracts/user/requests/sendOtp.request";
import { addToCache } from "../../../../store/cache/cache";
import { USER_MOBILE } from "../../../../store/cache/cacheKeys";
import { SendOtpResponse } from "../../../../api/api-contracts/user/responses/sendOtp.response";
import { MobileRequest as Mobile } from "../../../../api/api-contracts/user/requests/dto/mobile.request";

const SignUpWithPhone = () => {
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

    // const sendOtpRequest = new SendOtpRequest({
    //   mobile: new Mobile(phonenumber, countryCode, isoType),
    // });
    const sendOtpRequest: SendOtpRequest = {
      mobile: {
        phoneNumber,
        countryCode,
        isoType,
      },
    };

    const response: SendOtpResponse = await signupOtpRequest(sendOtpRequest);
    return response;
  };

  const handlePhoneSignUp = async () => {
    if (!phoneDetails?.isPhoneValid) {
      setErrorMessage("Please enter a valid phone number");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    const resp: SendOtpResponse = await handleSendOtp(phoneDetails);

    if (resp.status) {
      const phone = `${phoneDetails?.userPhoneNumber.phoneNumber}, ${phoneDetails?.userPhoneNumber.countryCode}, ${phoneDetails?.userPhoneNumber.isoType}`;
      const item = { source: "phone", value: phone };
      router.push({ pathname: `/(auth)/signupotp`, params: item });
      setErrorMessage("");
      setIsSuccessfull(true);

      setTimeout(() => {
        setIsSuccessfull(false);
      }, 1000);
    } else {
      setErrorMessage(resp.message);
      setIsSuccessfull(false);
    }
    setIsLoading(false);
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
        onPress={handlePhoneSignUp}
        button_style={styles.login_button}
        text_style={styles.login_button_text}
        isLoading={isLoading}
      >
        {buttonContent()}
      </LoadingButton>
    </>
  );
};

export default SignUpWithPhone;
