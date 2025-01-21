import { useLayoutEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  Keyboard,
  Platform,
  Pressable,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { colors } from "../../styles/global";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <>
        <Image
          source={require("../AwesomeProject/images/Bg.png")}
          resizeMode="cover"
          style={styles.image}
        />
      </>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  innerContainer: {
    gap: 16,
  },
  inputContainer: {
    marginTop: 32,
  },
  buttonContainer: {
    marginTop: 42,
  },
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
  },
});
