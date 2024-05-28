import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import Header from "../../../components/header/Header";
import { helpUsImproveStyles as styles } from "./styles";
import { useRouter, useLocalSearchParams } from "expo-router";
import DismissKeyboardView from "../../../components/dismiss-keyboard";
import { deleteAccount } from "../../../api/endpoints/authApi";

const HelpUsImproveScreen = () => {
  const [explanation, setExplanation] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const router = useRouter();

  const { deleteReason } = useLocalSearchParams<{ deleteReason?: string }>();

  const handleCancel = () => {
    router.back();
  };

  const handleDeleteAccount = () => {
    setModalVisible(true);
  };

  const confirmDeleteAccount = async () => {
    setModalVisible(false);
    console.log("Delete account");
    await deleteAccount(deleteReason || "", explanation);
    router.replace("/account");
  };

  return (
    <DismissKeyboardView>
      <>
        <View
          style={{ marginBottom: 20, marginTop: "5%", paddingHorizontal: 20 }}
        >
          <Header title="Delete Account" hasButton />
        </View>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Help us improve</Text>
          <Text style={styles.description}>
            Tell us why you're closing your account. We are working to fix bugs
            as soon as we spot them, if something slipped through our fingers,
            we'd be so grateful to be aware of it and fix it.
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={setExplanation}
            value={explanation}
            placeholder="Your explanation is optional..."
            multiline
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={handleCancel}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.deleteButton]}
              onPress={handleDeleteAccount}
            >
              <Text style={styles.buttonText}>Delete Account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Confirm Deletion</Text>
              <Text style={styles.modalText}>
                Are you sure you want to delete your account? This action cannot
                be undone.
              </Text>
              <View style={styles.modalButtonContainer}>
                <TouchableOpacity
                  style={[styles.popButton, styles.popCancelButton]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.popButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.popButton, styles.popDeleteButton]}
                  onPress={confirmDeleteAccount}
                >
                  <Text style={styles.popButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </>
    </DismissKeyboardView>
  );
};

export default HelpUsImproveScreen;
