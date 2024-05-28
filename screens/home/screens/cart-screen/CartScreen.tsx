import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../../components/header/Header";
import { SvgComponent as EmptyCartSvg } from "../../../../assets/svgs/EmptyCart";
import { useRouter } from "expo-router";
import { toaster } from "../../../../components/toaster-notification/toaster";

const CartScreen = () => {
  const router = useRouter();

  function handleNext() {
    // router.push("/home");

    toaster.notify({
      type: "success",
      title: "Test Notification",
      message: "Testing this toaster notification on iOS and Android.",
    });
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Your Cart" />
      <View style={styles.content}>
        <EmptyCartSvg
          width={156}
          height={156}
          style={{ alignSelf: "center" }}
        />
        <Text style={styles.title}>
          Looking a bit empty don{"'"}t you think?
        </Text>
        <Text style={styles.subtitle}>
          Lets start shopping and saving from your fav stores😉
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Start Shopping</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#204B38",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "PoppinsSemiBold",
  },
  title: {
    alignSelf: "center",
    color: "#333",
    fontFamily: "PoppinsSemiBold",
    letterSpacing: 0.2,
    marginBottom: 10,
  },
  subtitle: {
    alignSelf: "center",
    fontFamily: "PoppinsRegular",
    textAlign: "center",
    marginBottom: "10%",
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
});
export default CartScreen;
