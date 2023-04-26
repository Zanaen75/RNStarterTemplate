import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { COLORS, FONT } from "../../../constants/index";

const Register = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Text>Register</Text>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.backgroud,
    alignItems: "center",
    justifyContent: "center",
  },
});
