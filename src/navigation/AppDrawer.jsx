import React, { useState } from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { COLORS } from "../constants/index";

import AppTabs from "./AppTabs";
import SettingsStack from "./SettingsStack";

import OnboadingOne from "../screens/Intro/OnboadingOne";
import OnboadingTwo from "../screens/Intro/OnboadingTwo";
import OnboadingThree from "../screens/Intro/OnboadingThree";
import Auth from "../screens/Auth/Auth";
import Login from "../screens/Auth/Login/Login";
import Register from "../screens/Auth/Register/Register";

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
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            animation: "slide_from_right",
            headerTitle: "",
            headerStyle: {
              backgroundColor: COLORS.backgroud,
            },
          }}
        >
          <Stack.Screen name="OnboadingOne" component={OnboadingOne} />
          <Stack.Screen name="OnboadingTwo" component={OnboadingTwo} />
          <Stack.Screen name="OnboadingThree" component={OnboadingThree} />
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      )}
    </>
  );
};

export default AppDrawer;
