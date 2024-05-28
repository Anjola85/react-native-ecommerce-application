import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="settings" options={{ headerShown: false }} />
      <Stack.Screen
        name="saved"
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen name="marketplace" options={{ headerShown: false }} />
      <Stack.Screen name="addresses" options={{ headerShown: false }} />
      <Stack.Screen name="feedback" options={{ headerShown: false }} />
      <Stack.Screen name="works" options={{ headerShown: false }} />
      <Stack.Screen name="helpcenter" options={{ headerShown: false }} />
      <Stack.Screen name="notifications" options={{ headerShown: false }} />
      <Stack.Screen name="invite" options={{ headerShown: false }} />
      <Stack.Screen
        name="suggestastore"
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack>
  );
};

export default Layout;
