/**
 * Entry file
 * This file is the root layout for the app. It is the first component that is
 * rendered when the app is started. It is responsible for loading assets and
 */
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Asset } from "expo-asset";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import SplashLoadingScreen from "../components/loading/splash/SplashScreen";
import { loadBusinessesToCache } from "../store/functions/business";
import { GlobalStateProvider } from "../store/context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { LogBox } from "react-native";
import { ToasterProvider } from "../store/context/ToasterContext";

LogBox.ignoreAllLogs(); // Ignore all log notifications

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(onboarding)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [fontsLoaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    PoppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    NunitoLight: require("../assets/fonts/Nunito-Light.ttf"),
    NunitoRegular: require("../assets/fonts/Nunito-Regular.ttf"),
    NunitoMedium: require("../assets/fonts/Nunito-Medium.ttf"),
    NunitoSemiBold: require("../assets/fonts/Nunito-SemiBold.ttf"),
    NunitoBold: require("../assets/fonts/Nunito-Bold.ttf"),
    ...FontAwesome.font,
  });

  const loadAssets = async () => {
    const audioAssets = Asset.loadAsync([
      require("../assets/sounds/login-chime1.mp3"),
    ]);

    await Promise.all([audioAssets /* other assets go here */]);
  };

  useEffect(() => {
    if (pageLoaded) return;
    loadAssets().then(() => setPageLoaded(true));
  }, [pageLoaded]);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || !pageLoaded) {
    return <SplashLoadingScreen />;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GlobalStateProvider>
        <ToasterProvider>
          <Stack initialRouteName="(onboarding)">
            <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="verticalscreen"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="browse" options={{ headerShown: false }} />
            <Stack.Screen name="account" options={{ headerShown: false }} />
          </Stack>
        </ToasterProvider>
      </GlobalStateProvider>
    </GestureHandlerRootView>
  );
}
