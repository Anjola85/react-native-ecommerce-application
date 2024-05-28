import React, { useState, useEffect, useRef } from 'react';
import { Text, TextInput, Keyboard } from 'react-native';
import styles from '../styles/SignUpStyles';
import FormInput from '../../../../components/forms/form-input/FormInput';
import LoadingButton from '../../../../components/buttons/loading-button/LoadingButton';
import CheckSvg from '../../../../components/loading/spinners/CheckSvg';
import { theme } from '../../../../constants/theme';
import { useRouter } from "expo-router";


const SignUpWithEmail = () => {
    const [enteredEmail, setEnteredEmail] = useState<string>("");

    const [isEmailValid, setEmailValid] = useState<boolean>(false);

    const [errorMessage, setErrorMessage] = useState<string>("");

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSuccessfull, setIsSuccessfull] = useState<boolean>(false);

    const router = useRouter();


    const handleValidEmailChange = (isValid: boolean) => {
        // setInputValid(isValid && isPasswordValid);
        // setEmailValid(isValid);
    };

    const handleEmailSignUp = () => {
        setIsLoading(true);
        setErrorMessage("");

        if(enteredEmail === "") {
            setErrorMessage("Oops! Your email is required");
            setIsLoading(false);
            return;
        }
        Keyboard.dismiss();

        // simulate a connection to the server
        setTimeout(() => {
            // if connection is successful, and server returns no errors
            if (isEmailValid) {
                // login successful
                setErrorMessage("");
                setIsSuccessfull(true);
            } else {
                // if the credentials are wrong, show an error message
                setErrorMessage("Error occured while signing up");

                // if there is any server error, reset the loading button
                setIsSuccessfull(false);
            }
            setIsLoading(false);
        }, 2000);

        setTimeout(() => {
            if (isEmailValid) {
                // navigate to the next screen
                const item = {source: "email", value: enteredEmail}
                router.push({ pathname: `/(auth)/signupotp`, params: item });
            }
        }, 4000);
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
            <Text style={[styles.input_title, { marginBottom: 15 }]}>
              Email
            </Text>
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
              onValidChange={handleValidEmailChange}
              getValue={(value: string) => setEnteredEmail(value)}
              getValid={(value: boolean) => setEmailValid(value)}
            />

            <Text style={[styles.error_message]}>{errorMessage}</Text>

            <LoadingButton
                onPress={handleEmailSignUp} 
                button_style={styles.login_button}
                text_style={{margin: 0, padding: 0}}
                isLoading={isLoading}
                disabled={!isEmailValid}
            >
                {buttonContent()}
            </LoadingButton>
        </>
    );
}

export default SignUpWithEmail;
