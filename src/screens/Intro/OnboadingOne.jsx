import React from "react";
import { SafeAreaView, StyleSheet, View, Image, Text } from "react-native";

import { COLORS, images, FONT } from "../../constants/index";
import Threedots from "../../reuseable/threedots";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import PrimaryButton from "../../reuseable/PrimaryButton";
import AlterButton from "../../reuseable/AlterButton";
import { useNavigation } from "@react-navigation/native";

import { BackHandler } from "react-native";

const OnboadingOne = () => {
  const navigation = useNavigation();

  const onNextPress = () => {
    navigation.navigate("OnboadingTwo");
  };
  const onBackPress = () => {
    BackHandler.exitApp();
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={{}}>
        <Image
          source={images?.OnbordingOne}
          style={{ resizeMode: "contain", width: wp("100%"), height: 278 }}
        />
      </View>
      <View>
        <Threedots colorActive={COLORS.white} colorDeactive={COLORS.gray} />
      </View>
      <View style={{ marginVertical: 50 }}>
        <Text style={styles.heading}>Manage your tasks</Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.description}>
          You can easily manage all of your daily tasks in DoMe for free
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: wp("90%"),
          marginTop: wp(30),
        }}
      >
        <AlterButton Title="Back" onPress={onBackPress} />
        <PrimaryButton Title="Next" onPress={onNextPress} width={wp(20)} />
      </View>
    </SafeAreaView>
  );
};

export default OnboadingOne;

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
    color: COLORS.white,
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    width: wp("80%"),
  },
});
