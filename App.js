import React from "react";
import { StatusBar } from "expo-status-bar";

import Navigation from "./src/navigation";

import "react-native-gesture-handler";

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <Navigation />
    </>
  );
};

export default App;
