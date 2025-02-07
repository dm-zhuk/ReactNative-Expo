import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";

const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
