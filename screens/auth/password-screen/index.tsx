import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/buttons/loading-button/LoadingButton";
import FormInput from "../../../components/forms/form-input/FormInput";
import ArrowBackSvg from "../../../assets/svgs/ArrowBackSvg";
import { useRouter } from "expo-router";
import { addToCache } from "../../../store/cache/cache";
import { USER_PASSWORD } from "../../../store/cache/cacheKeys";
import styles from "./styles/PasswordStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const SignUpPasswordScreen = () => {
  const router = useRouter();

  const [isInputValid, setInputValid] = useState(false);

  const [enteredPassword, setEnteredPassword] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  function navigateToSignUp() {
    router.push("/(auth)/signup");
  }

  function navigateToNameScreen() {
    if (!isInputValid) return;
    router.push("/(auth)/fullname");
  }

  const handleValidChange = (isValid: boolean) => {
    setInputValid(isValid);
  };

  const savePassword = async () => {
    setIsLoading(true);
    try {
      // await addToCache({key:USER_PASSWORD, value:enteredPassword});
      navigateToNameScreen();
    } catch (error) {
      setErrorMessage("Error occured while signing up");
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.back_button} onPress={navigateToSignUp}>
          <ArrowBackSvg />
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.text_heading}>Create your Password</Text>
          <FormInput
            label="Password"
            type="password"
            style={styles.form_input}
            textInputOptions={{
              placeholder: "Choose a Password",
              keyboardType: "default",
              autoCapitalize: "none",
              autoCorrect: false,
            }}
            onValidChange={handleValidChange}
            getValue={(value: string) => setEnteredPassword(value)}
          />
        </View>

        <Text style={[styles.error_message]}>{errorMessage}</Text>

        <View style={styles.button_container}>
          <Button
            onPress={savePassword}
            button_style={styles.continue_button}
            disabled={!isInputValid}
            isLoading={isLoading}
          >
            <Text style={[styles.text, { color: "#fff" }]}>Continue</Text>
          </Button>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignUpPasswordScreen;
