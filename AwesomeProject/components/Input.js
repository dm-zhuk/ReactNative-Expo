import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../styles/global";

const Input = ({
  value,
  onTextChange,
  placeholder,
  outerStyles,
  rightButton,
  autofocus = false,
  secureTextEntry = false,
  onBlur: onBlurCustom,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);

    if (onBlurCustom) {
      onBlurCustom();
    }
  };

  return (
    <View
      style={[styles.inputContainer, isFocused && styles.focused, outerStyles]}>
      <TextInput
        value={value}
        autoFocus={autofocus}
        onChangeText={onTextChange}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.baseText}
        autoCapitalize="none"
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {rightButton && (
        <View style={styles.rightButtonContainer}>{rightButton}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border_gray,
    borderRadius: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.light_gray,
  },
  baseText: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: colors.black_primary,
  },
  rightButtonContainer: {
    marginLeft: 16,
  },
  focused: {
    backgroundColor: colors.white,
    borderColor: colors.orange,
  },
});

export default Input;
