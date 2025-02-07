import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { colors } from "../styles/global";

const Button = ({ children, onPress, buttonStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    backgroundColor: colors.orange,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  buttonText: {
    color: colors.white,
    textAlign: "center",
  },
});
