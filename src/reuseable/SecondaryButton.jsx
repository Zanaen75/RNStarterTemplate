import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, FONT } from "../constants/index";

const SecondaryButton = (props) => {
  const { Title, onPress, width } = props;
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 12,
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: COLORS.primary,
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

export default SecondaryButton;

const styles = StyleSheet.create({});
