import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack initialRouteName="signup">
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="fullname" options={{ headerShown: false }} />
      <Stack.Screen name="email" options={{ headerShown: false }} />
      <Stack.Screen name="password" options={{ headerShown: false }} />
      <Stack.Screen name="signupotp" options={{ headerShown: false }} />
      <Stack.Screen name="loginotp" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
