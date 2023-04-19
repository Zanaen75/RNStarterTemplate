import React from "react";
import { SafeAreaView, StyleSheet, View, Image } from "react-native";

import { COLORS, images } from "../../constants/index";

const OnboadingOne = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={{}}>
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={{ width: "" }}
        />
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
});
