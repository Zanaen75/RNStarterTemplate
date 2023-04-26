import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { COLORS, FONT } from "../../constants/index";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import PrimaryButton from "../../reuseable/PrimaryButton";
import SecondaryButton from "../../reuseable/SecondaryButton";
import { useNavigation } from "@react-navigation/native";

const Auth = () => {
  const navigation = useNavigation();

  const onSignInPress = () => {
    navigation.navigate("Login");
  };
  const onSignUpPress = () => {
    navigation.navigate("Register");
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View
        style={{
          position: "absolute",
          top: 20,
        }}
      >
        <View style={{}}>
          <Text style={styles.heading}>Welcome to UpTodo</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.description}>
            Please login to your account or create new account to continue
          </Text>
        </View>
      </View>
      <View style={{ position: "absolute", bottom: 20 }}>
        <View style={{ marginBottom: 20 }}>
          <PrimaryButton Title="LOGIN" onPress={onSignInPress} width={wp(80)} />
        </View>
        <View>
          <SecondaryButton
            Title="Create account"
            onPress={onSignUpPress}
            width={wp(80)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Auth;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.backgroud,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontFamily: FONT.Lato,
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 32,
  },
  description: {
    fontFamily: FONT.Lato,
    color: COLORS.gray,
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    width: wp("80%"),
  },
});
