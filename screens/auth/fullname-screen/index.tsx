import React, { useEffect, useState } from "react";
import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoadingButton from "../../../components/buttons/loading-button/LoadingButton";
import FormInput from "../../../components/forms/form-input/FormInput";
import ArrowBackSvg from "../../../assets/svgs/ArrowBackSvg";
import { theme } from "../../../constants/theme";
import { addToCache } from "../../../store/cache/cache";
import {
  USER_FIRST_NAME,
  USER_LAST_NAME,
} from "../../../store/cache/cacheKeys";
import { useRouter } from "expo-router";
import styles from "./styles/FullNameScreenStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const SignUpFullNameScreen = () => {
  const [firstNameIsValid, setFirstNameIsValid] = useState(false);
  const [lastNameIsValid, setLastNameIsValid] = useState(false);

  const [enteredFirstName, setEnteredFirstName] = useState<string>("");
  const [enteredLastName, setEnteredLastName] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  function navigateToOnboardingQuestionsdScreen() {
    if (firstNameIsValid && lastNameIsValid) {
      router.push("/(onboarding)/address-selection");
    }
  }

  function navigateToSignUpScreen() {
    router.push("/(auth)/signup");
  }

  function navigateToPasswordScreen() {
    router.push("/(auth)/password");
  }

  function navigateToEmailScreen() {
    router.push("/(auth)/email");
  }

  const handleFirstNameValidChange = (isValid: boolean) => {
    setFirstNameIsValid(isValid);
  };

  const handleLastNameValidChange = (isValid: boolean) => {
    setLastNameIsValid(isValid);
  };

  const saveUsersName = async () => {
    setIsLoading(true);
    try {
      await addToCache({ key: USER_FIRST_NAME, value: enteredFirstName });
      await addToCache({ key: USER_LAST_NAME, value: enteredLastName });

      navigateToEmailScreen();
    } catch (error) {
      setErrorMessage("Error occured while signing up");
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.back_button}
          onPress={navigateToSignUpScreen}
        >
          <ArrowBackSvg />
        </TouchableOpacity>

        <View style={styles.content}>
          <View style={styles.title}>
            <Text style={styles.text_heading}>What's your name?</Text>
            <Text style={styles.text_subheading}>
              let us know what to call you by
            </Text>
          </View>

          <Text style={styles.input_title}>First name</Text>
          <FormInput
            label=""
            type="first-name"
            style={{
              marginBottom: 25,
              width: "90%",
              maxWidth: 400,
            }}
            textInputOptions={{
              placeholder: "Enter first name",
              keyboardType: "default",
              autoCapitalize: "none",
              autoCorrect: false,
            }}
            onValidChange={handleFirstNameValidChange}
            getValue={(value: string) => setEnteredFirstName(value)}
          />
          <Text style={styles.input_title}>Last name</Text>
          <FormInput
            label=""
            type="last-name"
            style={{
              marginBottom: 25,
              width: "90%",
              maxWidth: 400,
            }}
            textInputOptions={{
              placeholder: "Enter first name",
              keyboardType: "default",
              autoCapitalize: "none",
              autoCorrect: false,
            }}
            onValidChange={handleLastNameValidChange}
            getValue={(value: string) => setEnteredLastName(value)}
          />
        </View>

        <Text style={[styles.error_message]}>{errorMessage}</Text>

        <View style={styles.button_container}>
          <LoadingButton
            onPress={saveUsersName}
            button_style={styles.continue_button}
            disabled={!(firstNameIsValid && lastNameIsValid)}
            isLoading={isLoading}
          >
            <Text style={[styles.text, { color: theme.colors.white }]}>
              Continue
            </Text>
          </LoadingButton>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignUpFullNameScreen;
