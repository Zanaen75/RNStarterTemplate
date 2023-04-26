import React, { useCallback } from "react";
import AppDrawer from "./AppDrawer";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { NavigationContainer } from "@react-navigation/native";

const Navigation = () => {
  const [fontsLoaded] = useFonts({
    Lato: require("../../assets/fonts/Lato-Regular.ttf"),
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
    <NavigationContainer onLayout={onLayoutRootView}>
      <AppDrawer />
    </NavigationContainer>
  );
};

export default Navigation;
