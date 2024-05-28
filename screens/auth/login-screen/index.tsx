import React, { useState } from 'react';
import { View, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles/LoginStyles';
import { theme } from '../../../constants/theme';
import LogInWithEmail from './components/LogInWithEmail';
import LogInWithPhone from './components/LogInWithPhone';
import ThirdPartyAuth from '../components/ThirdPartyAuth';
import { useRouter } from "expo-router";

const LoginScreen = () => {
  const router = useRouter();

  const [isPhoneSelected, setIsPhoneSelected] = useState(true);

  const selectEmail = () => {
      setIsPhoneSelected(false);
  };

  const selectPhone = () => {
      setIsPhoneSelected(true);
  };

  const LoginOptionSelector = () => {
      return (
          <View style={styles.selection_container}>
              <View style={[styles.selection, isPhoneSelected && styles.selected]}>
                  <Text
                  style={
                      isPhoneSelected
                      ? [{ color: "#1D1D35" }, styles.selection_text]
                      : [{ color: "#B2B2B2" }, { fontFamily: theme.fontFamily.regular }]
                  }
                  onPress={() => selectPhone()}
                  >
                  Phone Number
                  </Text>
              </View>
              <View style={[styles.selection, !isPhoneSelected && styles.selected]}>
                  <Text
                  style={
                      !isPhoneSelected
                      ? [{ color: "#1D1D35" }, styles.selection_text]
                      : [{ color: "#B2B2B2" }, { fontFamily: theme.fontFamily.regular }]
                  }
                    onPress={() => selectEmail()}
                  >
                  Email
                  </Text>
              </View>
          </View>
      );
  }

  return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <SafeAreaView style={styles.container}>
        
              <Text style={styles.text_heading}>Log in</Text>

              <Text style={styles.text_subheading}>Welcome back!</Text>

              <LoginOptionSelector />

              {isPhoneSelected ? (
                  <LogInWithPhone />
              ) : (
                  <LogInWithEmail />
              )}

              <View style={styles.line}>
                  <View style={styles.greyline} />
                  <Text style={styles.linetext}>or</Text>
                  <View style={styles.greyline} />
              </View>

              <ThirdPartyAuth />

              <Text style={[styles.other_info, { marginTop: 16 }]}>
                  {" "}
                  Don't have an account?{" "}
                  <Text
                      style={styles.hyperlink}
                      onPress={() => router.push("/(auth)/signup")}
                  >
                      Sign Up
                  </Text>
              </Text>
              
          </SafeAreaView>
      </TouchableWithoutFeedback>
  );
}

export default LoginScreen;
