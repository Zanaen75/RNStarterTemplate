import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { COLORS, FONT } from "../../../constants/index";
import PrimaryButton from "../../../reuseable/PrimaryButton";
import SecondaryButton from "../../../reuseable/SecondaryButton";
import { useNavigation } from "@react-navigation/native";
import Goolge from "../../../../assets/google.png";
import Apple from "../../../../assets/Apple.png";

const Login = () => {
  const navigation = useNavigation();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    navigation.navigate("Login");
  };
  const onLoginGoogle = () => {
    navigation.navigate("Login");
  };
  const onLoginApple = () => {
    navigation.navigate("Login");
  };
  const onRegisterPress = () => {
    navigation.navigate("Register");
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={{ marginBottom: 30 }}>
        <Text style={styles.heading}>Login</Text>
      </View>
      <View>
        <View>
          <Text style={styles.Text}>Username</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your Username"
            placeholderTextColor={COLORS.gray}
            value={userName}
            onChangeText={setUserName}
          />
        </View>
        <View>
          <Text style={styles.Text}>Password</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your Password"
            placeholderTextColor={COLORS.gray}
            value={password}
            onChangeText={setPassword}
          />
          {password.length === 0 ? null : (
            <Text style={{ color: COLORS.white }}>
              Password strength: {passwordStrength}
            </Text>
          )}
        </View>
        <View style={{ marginVertical: 50 }}>
          <PrimaryButton Title="LOGIN" onPress={onLogin} width={wp("92%")} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: COLORS.gray }} />
          <Text
            style={{ marginHorizontal: 5, color: COLORS.gray, fontSize: 16 }}
          >
            or
          </Text>
          <View style={{ flex: 1, height: 1, backgroundColor: COLORS.gray }} />
        </View>
      </View>

      <View style={{ marginTop: wp(15) }}>
        <View style={{ marginBottom: 15 }}>
          <SecondaryButton
            // Title="Login with Google"
            Title={
              <>
                <Image
                  source={Goolge}
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 10,
                    resizeMode: "contain",
                  }}
                />{" "}
                Login with Google
              </>
            }
            onPress={onLoginGoogle}
            width={wp("92%")}
          />
        </View>
        <View>
          <SecondaryButton
            // Title="Login with Apple"
            Title={
              <>
                <Image
                  source={Apple}
                  style={{
                    width: 25,
                    height: 25,
                    marginRight: 10,
                    resizeMode: "contain",
                  }}
                />{" "}
                Login with Apple
              </>
            }
            onPress={onLoginApple}
            width={wp("92%")}
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={onRegisterPress}
        style={{
          marginTop: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: FONT.Lato,
            color: COLORS.gray,
            fontWeight: "400",
            fontSize: 12,
          }}
        >
          Don’t have an account?{" "}
          <Text
            style={{
              fontFamily: FONT.Lato,
              color: COLORS.white,
            }}
          >
            Register
          </Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.backgroud,
    paddingHorizontal: wp(4),
  },
  heading: {
    fontFamily: FONT.Lato,
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 32,
  },
  Text: {
    fontFamily: FONT.Lato,
    color: COLORS.white,
    fontWeight: "400",
    fontSize: 18,
  },
  inputField: {
    borderWidth: 0.8,
    borderColor: COLORS.gray,
    marginVertical: wp(6),
    height: wp(15),
    borderRadius: 5,
    color: COLORS.white,
    paddingHorizontal: 10,
  },
});
