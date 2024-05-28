import React, { useState, useEffect, useRef } from 'react';
import { Text, TextInput, View, Keyboard } from 'react-native';
import styles from '../styles/LoginStyles';
import FormInput from '../../../../components/forms/form-input/FormInput';
import LoadingButton from '../../../../components/buttons/loading-button/LoadingButton';
import CheckSvg from '../../../../components/loading/spinners/CheckSvg';
import { theme } from '../../../../constants/theme';
import { useRouter } from "expo-router";
import { SendOtpResponse } from '../../../../api/api-contracts/user/responses/sendOtp.response';
import { PhoneInput } from '../../../../components/forms/phone-number-input/props/PhoneInput';
import { addToCache } from '../../../../store/cache/cache';
import { USER_EMAIL } from '../../../../store/cache/cacheKeys';
import { LoginOtpRequest } from '../../../../api/api-contracts/user/requests/loginOtp.request';
import { loginOtpRequest } from '../../../../api/endpoints/authApi';

const LogInWithEmail = () => {
    const emailRef = useRef<TextInput | null>(null);
    const passwordRef = useRef<any>();

    const [enteredEmail, setEnteredEmail] = useState<string>("");
    const [enteredpassword, setEnteredPassword] = useState<string>("");

    const [isEmailValid, setEmailValid] = useState<boolean>(false);
    const [isPasswordValid, setPasswordValid] = useState<boolean>(false);

    const [errorMessage, setErrorMessage] = useState<string>("");

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSuccessfull, setIsSuccessfull] = useState<boolean>(false);

    const router = useRouter();

    const handleValidEmailChange = (isValid: boolean) => {
        // setInputValid(isValid && isPasswordValid);
        // setEmailValid(isValid);
        setErrorMessage("");
    };

    const focusOnPassword = () => {
        passwordRef.current.focus();
    };

    const handleSendOtp = async (
        phoneDetails?: PhoneInput,
        email?: string
      ): Promise<SendOtpResponse> => {
    
        // add mobile to cache
        addToCache({ key: USER_EMAIL, value: email });
    
        const sendOtpRequest = new LoginOtpRequest(
          enteredEmail,
          undefined //mobile
        );
    
        const response: SendOtpResponse = await loginOtpRequest(sendOtpRequest);
        return response;
      };

    const handleLogin = async () => {
        if (!isEmailValid) {
            setErrorMessage("Please enter a valid email address");
            return;
        }

        setIsLoading(true);
        setErrorMessage("");

        try {
            const resp: SendOtpResponse = await handleSendOtp(undefined, enteredEmail);

            if (resp.status) {
                setErrorMessage("");
                setIsSuccessfull(true);

                // navigate to the next screen
                setTimeout(() => {
                    const item = { source: "email", value: enteredEmail };
                    router.push({ pathname: `/(auth)/loginotp`, params: item });
                }, 1000);
            } else {
                setErrorMessage(resp.message);
                setIsSuccessfull(false);
            }
        } catch (error) {
            setErrorMessage("Something went wrong. Please try again later");
            setIsSuccessfull(false);
        } finally {
            setIsLoading(false);
        }
    };

    const buttonContent = () => {
        if (isSuccessfull) {
            return (
                <CheckSvg />
            )
        } else {
            return (
                <Text>Continue</Text>
            )
        }
    }

    return (
        <>
            <View style={{height: 30}}/>
            {/* <Text style={[styles.input_title, { marginBottom: 15 }]}>
              Email
            </Text> */}
            <FormInput
              label="Email"
              type="email"
              style={styles.email_form_input}
              textInputOptions={{
                placeholder: "Email address",
                keyboardType: "email-address",
                autoCapitalize: "none",
                autoCorrect: false,
              }}
              Ref={emailRef}
              SubmitEditing={focusOnPassword}
              onValidChange={handleValidEmailChange}
              getValue={(value: string) => setEnteredEmail(value)}
              getValid={(value: boolean) => setEmailValid(value)}
            />

            {/* <Text style={[styles.input_title, { marginBottom: 15 }]}>
              Password
            </Text>

            <FormInput
              label="Password"
              type="validate-password"
              style={styles.password_form_input}
              textInputOptions={{
                placeholder: "Password",
                autoCapitalize: "none",
                autoCorrect: false,
              }}
              Ref={passwordRef}
              SubmitEditing={() => Keyboard.dismiss()}
              onValidChange={handleValidEmailChange}
              getValue={(value: string) => setEnteredPassword(value)}
              getValid={(value: boolean) => setPasswordValid(value)}
            />

            <Text style={styles.forgot_password}>
                Forgot Password?{" "}
                <Text style={{ color: theme.colors.primary }} onPress={() => {}}>
                Reset it
                </Text>
            </Text> */}

            <Text style={[styles.error_message]}>{errorMessage}</Text>

            <LoadingButton
                onPress={handleLogin} 
                button_style={styles.login_button}
                text_style={styles.login_button_text}
                isLoading={isLoading}
                disabled={!(isEmailValid)}
            >
                {buttonContent()}
            </LoadingButton>
   
        </>
    );
}

export default LogInWithEmail;
