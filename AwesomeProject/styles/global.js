import { StyleSheet } from "react-native";

export const colors = {
  white: "#FFFFFF",
  white_30: "rgba(255, 255, 255, 0.3)",
  black_primary: "#212121",
  black_80: "rgba(33, 33, 33, 0.8)",
  light_gray: "#F6F6F6",
  text_gray: "#BDBDBD",
  border_gray: "#E8E8E8",
  blue: "#1B4371",
  orange: "#FF6C00",
};

export const baseStyles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 36,
    textAlign: "center",
  },
  baseText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
  },
  linkText: {
    color: colors.blue,
  },
  underline: {
    textDecorationLine: "underline",
  },
});
