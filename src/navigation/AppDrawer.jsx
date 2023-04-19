import React, { useState } from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppTabs from "./AppTabs";
import SettingsStack from "./SettingsStack";

import OnboadingOne from "../screens/Intro/OnboadingOne";
import OnboadingTwo from "../screens/Intro/OnboadingTwo";
import OnboadingThree from "../screens/Intro/OnboadingThree";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      {isSignedIn ? (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={AppTabs} />
          <Drawer.Screen name="Settings" component={SettingsStack} />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnboadingOne" component={OnboadingOne} />
          <Stack.Screen name="OnboadingTwo" component={OnboadingTwo} />
          <Stack.Screen name="OnboadingThree" component={OnboadingThree} />
        </Stack.Navigator>
      )}
    </>
  );
};

export default AppDrawer;
