import React from "react";
import { Stack, Tabs } from "expo-router";

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="guest" options={{ headerShown: false }} />

      <Stack.Screen
        name="address"
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen
        name="editAddress"
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen name="marketplace" options={{ headerShown: false }} />
      <Stack.Screen
        name="storeprofile"
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen name="livemap" options={{ headerShown: false }} />
      <Stack.Screen
        name="notifications"
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen
        name="search"
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen name="searchresults" options={{ headerShown: false }} />
      <Stack.Screen
        name="first-question"
        options={{
          headerShown: false,
          animationTypeForReplace: "pop",
          // animation: "fade_from_bottom",
        }}
      />
      <Stack.Screen name="second-question" options={{ headerShown: false }} />
      <Stack.Screen name="third-question" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
