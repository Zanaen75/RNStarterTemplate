import React from "react";
import { View, Text } from "react-native";

import { useRoute } from "@react-navigation/native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Threedots = (props) => {
  const { colorActive, colorDeactive } = props;

  const route = useRoute();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: wp("30%"),
        // backgroundColor: "white",
      }}
    >
      <View style={{}}>
        <Text
          style={{
            borderBottomColor:
              route.name === "OnboadingOne" ? colorActive : colorDeactive,
            borderBottomWidth: 2,
            width: 30,
          }}
        >
          {"\n"}
        </Text>
      </View>
      <View style={{}}>
        <Text
          style={{
            borderBottomColor:
              route.name === "OnboadingTwo" ? colorActive : colorDeactive,
            borderBottomWidth: 2,
            width: 30,
          }}
        >
          {"\n"}
        </Text>
      </View>
      <View style={{}}>
        <Text
          style={{
            borderBottomColor:
              route.name === "OnboadingThree" ? colorActive : colorDeactive,
            borderBottomWidth: 2,
            width: 30,
          }}
        >
          {"\n"}
        </Text>
      </View>
    </View>
  );
};

export default Threedots;
