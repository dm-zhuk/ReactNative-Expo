import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "../styles/local";

const MapScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.innerScreenContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View>
          <Text style={styles.title}>Map Screen</Text>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default MapScreen;
