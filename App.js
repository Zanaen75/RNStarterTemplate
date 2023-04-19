import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Navigation from "./src/navigation";

import "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    LatoRegular: require("./assets/fonts/Lato-Regular.ttf"),
    LatoBold: require("./assets/fonts/Lato-Bold.ttf"),
    LatoLight: require("./assets/fonts/Lato-Light.ttf"),
    LatoThin: require("./assets/fonts/Lato-Thin.ttf"),
    LatoBlack: require("./assets/fonts/Lato-Black.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <Navigation onLayout={onLayoutRootView} />
    </>
  );
};

export default App;
