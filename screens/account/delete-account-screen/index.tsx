import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/header/Header";
import RadioButtons from "../../../components/radio-button-group/RadioButtonGroup";
import { useRouter } from "expo-router";
import { deleteAccountStyles as styles } from "./styles";

const DeleteAccountScreen = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string>("");

  function handleNext() {
    router.push(
      `/account/settings/deleteAccount/helpusimprove?deleteReason=${selectedOption}`
    );
  }

  function handleSeletedOption(option: string) {
    setSelectedOption(option);
  }

  const options = [
    "Something went wrong",
    "I'm not finding any stores",
    "I have a privacy concern",
    "Other",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <Header title="Delete Account" hasButton />
          <View style={{ marginLeft: "5%", marginTop: "10%" }}>
            <RadioButtons
              options={options}
              onSelectOption={handleSeletedOption}
            />
          </View>
        </View>

        {selectedOption && (
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default DeleteAccountScreen;
