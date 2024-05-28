import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="helpusimprove" options={{ headerShown: false }} />
      <Stack.Screen name="finalconfirmation" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
