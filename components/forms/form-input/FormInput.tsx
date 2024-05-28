import React, { useState, useEffect } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

// import userData from "../../store/cache/userData";
// import { addToCache } from "../../store/cache/cache";
// import {
//   USER_FIRST_NAME,
//   USER_LAST_NAME,
//   USER_EMAIL,
//   USER_PASSWORD,
// } from "../../store/cache/cacheKeys";

import { emailSchema, nameSchema, passwordSchema, verifyPasswordSchema } from "./components/FormValidation";

import { FormInputProps } from "./props/FormInputProps";
import styles from "./styles/FormInputStyles";

export default function FormInput({
  label,
  type,
  textInputOptions,
  SubmitEditing,
  Ref,
  ValidSubmit,
  style,
  wantIcon = true,
  onValidChange,
  boxStyle,
  getValue,
  getValid,
}: FormInputProps) {
  const [isValid, setIsValid] = useState(true);
  const [errorLabel, setErrorLabel] = useState("");
  const [inputText, setInputText] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);


  async function validateEmail(text: string) {
    await emailSchema
      .validate(text)
      .then(() => {
        setIsValid(true);
        onValidChange(true);
        getValue?.(text);
        // addToCache({ key: USER_EMAIL, value: text });
      })
      .catch((error) => {
        setErrorLabel(error.message);
        setIsValid(false);
        onValidChange(false);
      });
  }

  async function validateFirstName(text: string) {
    await nameSchema
      .validate(text)
      .then(() => {
        setIsValid(true);
        onValidChange(true);
        getValue?.(text);
        // addToCache({ key: USER_FIRST_NAME, value: text });
        // Disable space key if a space is already entered
        if (
          text.indexOf(" ") !== text.length - 1 &&
          text[text.length - 1] === " "
        ) {
          setInputText(text.trimStart().trimEnd());
          SubmitEditing?.();
          return;
        }
      })
      .catch((error) => {
        setErrorLabel(error.message);
        setIsValid(false);
        onValidChange(false);
      });
  }

  async function validateLastName(text: string) {
    await nameSchema
      .validate(text)
      .then(() => {
        setIsValid(true);
        onValidChange(true);
        getValue?.(text);
        // addToCache({ key: USER_LAST_NAME, value: text });
        if (
          text.indexOf(" ") !== text.length - 1 &&
          text[text.length - 1] === " "
        ) {
          setInputText(text.trimStart().trimEnd());
          SubmitEditing?.();
          return;
        }
      })
      .catch((error) => {
        setErrorLabel(error.message);
        setIsValid(false);
        onValidChange(false);
      });
  }

  async function validatePassword(text: string) {
    await passwordSchema
      .validate(text)
      .then(() => {
        setIsValid(true);
        onValidChange(true);
        getValue?.(text);
        // addToCache({ key: USER_PASSWORD, value: text });
      })
      .catch((error) => {
        setErrorLabel(error.message);
        setIsValid(false);
        onValidChange(false);
      });
  }

  async function validateConfirmPassword(text: string) {
    passwordSchema
      .validate(text)
      .then(() => {
        setIsValid(true);
        onValidChange(true);
        getValue?.(text);
      })
      .catch((error) => {
        setErrorLabel(error.message);
        setIsValid(false);
        onValidChange(false);
      });
  }

  async function validateVerifyPassword(text: string) {
    verifyPasswordSchema
      .validate(text)
      .then(() => {
        setIsValid(true);
        onValidChange(true);
        getValue?.(text);
      })
      .catch((error) => {
        setErrorLabel(error.message);
        setIsValid(false);
        onValidChange(false);
      });
  }

  async function handleInput(text: string) {
    const val = type.toLowerCase();
    if (text !== undefined && text !== null) {
      switch (val) {
        case "email":
          setInputText(text);
          await validateEmail(text);
          break;

        case "first-name":
          setInputText(text.trimStart().trimEnd());
          await validateFirstName(text);
          break;

        case "last-name":
          setInputText(text.trimStart().trimEnd());
          await validateLastName(text);
          break;

        case "password":
          setInputText(text);
          await validatePassword(text);
          break;

        case "confirm-password":
          setInputText(text);
          await validateConfirmPassword(text);
          break;

        case "validate-password":
          setInputText(text);
          await validateVerifyPassword(text);
          break;
      }
    }
  }

  useEffect(() => {
    getValid?.(isValid);
  }, [isValid]);

  const isSecureType = (type === "password" || type === "confirm-password" || type === "validate-password");

  const PasswordVisibility = (isSecureType && !isPasswordVisible);

  const PasswordVisibilityIcon = () => {
    return (
      <Ionicons
        name={isPasswordVisible ? "eye-off" : "eye"}
        size={18}
        color="#77777775"
        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        style={[
          styles.close_btn,
          isValid || ValidSubmit
            ? { backgroundColor: "#f5f5f5" }
            : { backgroundColor: "#fcc4e4" },
          inputText.length > 27 && { elevation: 1 },
        ]}
      />
    );
  };

  const CloseIcon = () => {
    return (
      <AntDesign
      name="closecircle"
      size={18}
      color="#77777775"
      onPress={() => setInputText("")}
      style={[
        styles.close_btn,
        isValid || ValidSubmit
          ? { backgroundColor: "#f5f5f5" }
          : { backgroundColor: "#fcc4e4" },
        inputText.length > 27 && { elevation: 1 },
      ]}
    />
    );
  };

  const TextInputIcon = () => {
    if (isSecureType){
      return <PasswordVisibilityIcon />;
    }
    return  <CloseIcon />;
  };

  const TextInputField = (
    <TextInput
      style={[
        styles.input,
        !(isValid || ValidSubmit) &&
          styles.invalidInput,
        { ...boxStyle },
      ]}
      onChangeText={handleInput}
      value={inputText}
      secureTextEntry={PasswordVisibility}
      {...textInputOptions}
      ref={Ref}
      onSubmitEditing={SubmitEditing}
    />
  );

  const ErrorLabel = !isValid && (
    <Text style={[styles.label, styles.invalidLabel]}>{errorLabel}</Text>
  );

  const ValidPasswordText = isValid &&
    inputText.length > 2 &&
    type.toLowerCase() === "password" && (
      <Text style={styles.label}>{`Now that’s a secure password`}</Text>
    );

  return (
    <View style={[styles.inputContainer, style]}>
      <View style={styles.fieldContainer}>
        {TextInputField}
        {TextInputIcon()}
      </View>
      {ErrorLabel}
      {ValidPasswordText}
    </View>
  );
}
