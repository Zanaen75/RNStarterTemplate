import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, FONT } from "../constants/index";

const PrimaryButton = (props) => {
  const { Title, onPress, width } = props;
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 12,
        backgroundColor: COLORS.primary,
        borderRadius: 4,
        width: width,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <Text
        style={{
          fontFamily: FONT.Lato,
          color: COLORS.white,
          fontWeight: "400",
          fontSize: 16,
          textTransform: "uppercase",
        }}
      >
        {Title}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({});
