import { useState } from "react";
import { Keyboard, View, Text, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import styles from "./styles/EmailScreenStyles";
import FormInput from "../../../components/forms/form-input/FormInput";
import Button from "../../../components/buttons/button/Button";
import ArrowBackSvg from "../../../assets/svgs/ArrowBackSvg";
import { addToCache, getItemFromCache } from "../../../store/cache/cache";
import { USER_EMAIL, USER_HAS_ONBOARDED } from "../../../store/cache/cacheKeys";
import { TouchableOpacity } from "react-native-gesture-handler";
import { registerEmail } from "../../../api/endpoints/authApi";
import { loadAllAssetsToCache } from "../../../store/functions/business";

const EmailScreen = () => {
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [isInputValid, setInputValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const router = useRouter();

  const goBack = () => {
    router.push("/(auth)/fullname");
  };

  const navigateToOnboardingQuestionsScreen = () => {
    router.replace("/home");
  };

  const saveEmail = async () => {
    if (isInputValid) {
      try {
        await registerEmail(enteredEmail);
        addToCache({ key: USER_EMAIL, value: enteredEmail });
        await addToCache({ key: USER_HAS_ONBOARDED, value: false });
        await loadAllAssetsToCache();
        navigateToOnboardingQuestionsScreen();
      } catch (error: any) {
        console.log("index: " + error);
        if (error.response && error.response.status == 409) {
          setErrorMessage("User already exists");
          return;
        }
        setErrorMessage("Error occured while signing up");
      }
    }
  };

  const handleValidChange = (isValid: boolean) => {
    setInputValid(isValid);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.back_button} onPress={goBack}>
          <ArrowBackSvg />
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.text_heading}>Email Address</Text>
          <FormInput
            label="Email Address"
            type="email"
            style={styles.form_input}
            textInputOptions={{
              placeholder: "Your Email Address",
              keyboardType: "default",
              autoCapitalize: "none",
              autoCorrect: false,
            }}
            onValidChange={handleValidChange}
            getValue={(value: string) => setEnteredEmail(value)}
          />
          <Text style={[styles.error_message]}>{errorMessage}</Text>
        </View>

        <View style={styles.button_container}>
          <Button
            onPress={saveEmail}
            button_style={styles.continue_button}
            text_style={styles.continue_button_text}
            disabled={false}
          >
            <Text>Continue</Text>
          </Button>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default EmailScreen;
