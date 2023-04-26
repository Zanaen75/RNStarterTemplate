import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, FONT } from "../constants/index";

const AlterButton = (props) => {
  const { Title, onPress } = props;
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 24,
        paddingVertical: 12,
        // backgroundColor: COLORS.primary,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          fontFamily: FONT.Lato,
          color: COLORS.gray,
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

export default AlterButton;

const styles = StyleSheet.create({});
