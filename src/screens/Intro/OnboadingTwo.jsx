import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import { COLORS, images, FONT } from "../../constants/index";
import Threedots from "../../reuseable/threedots";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import PrimaryButton from "../../reuseable/PrimaryButton";
import AlterButton from "../../reuseable/AlterButton";
import { useNavigation } from "@react-navigation/native";

const OnboadingTwo = () => {
  const navigation = useNavigation();

  const onNextPress = () => {
    navigation.navigate("OnboadingThree");
  };
  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={{}}>
        <Image
          source={images?.OnbordingTwo}
          style={{ resizeMode: "contain", width: wp("100%"), height: 278 }}
        />
      </View>
      <View>
        <Threedots colorActive={COLORS.white} colorDeactive={COLORS.gray} />
      </View>
      <View style={{ marginVertical: 50 }}>
        <Text style={styles.heading}>Create daily routine</Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.description}>
          In Uptodo you can create your personalized routine to stay productive
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

export default OnboadingTwo;

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
