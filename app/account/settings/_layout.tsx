import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="profile"
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen
        name="privacy"
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen
        name="payments"
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen
        name="accessibility"
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen
        name="language"
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen
        name="deleteAccount"
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen
        name="terms"
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack>
  );
};

export default Layout;
