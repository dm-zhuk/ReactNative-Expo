import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../styles/global";
import Input from "./Input";

const PasswordInput = ({ placeholder, value, onTextChange }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const togglePasswordVisibility = () => setIsPasswordVisible((prev) => !prev);

  return (
    <Input
      placeholder={placeholder}
      value={value}
      onTextChange={onTextChange}
      rightButton={
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Text style={styles.passwordButtonText}>
            {isPasswordVisible ? "Показати" : "Приховати"}
          </Text>
        </TouchableOpacity>
      }
      secureTextEntry={isPasswordVisible}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      isFocused={isFocused}
    />
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  passwordButtonText: {
    color: colors.blue,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
  },
});
