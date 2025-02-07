import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import Input from "../components/Input";
import Button from "../components/Button";
import { loginDB } from "../firebase/auth";
import PasswordInput from "../components/PasswordInput";
import { styles } from "../styles/local";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onLogin = async () => {
    console.log("Attempting to log in with:", { email, password });

    try {
      await loginDB({ email, password }, dispatch);
      console.log("Login successful! Navigating to Home...");
      navigation.navigate("Home");
    } catch (err) {
      Alert.alert("Login error", err.message || "An error occurred");
      console.error("Login error:", err);
    }
  };

  const onRegister = () => {
    navigation.navigate("Registration", { email, password });
  };

  return (
    <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
      <>
        <Image
          source={require("../assets/images/background-img.png")}
          resizeMode="cover"
          style={styles.image}
        />

        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <View style={styles.formContainerLogin}>
            <Text style={styles.title}>Увійти</Text>

            <View style={[styles.innerContainer, styles.inputContainer]}>
              <Input
                value={email}
                autofocus={true}
                placeholder="Адреса електронної пошти"
                onTextChange={setEmail} // Directly set email
              />

              <PasswordInput
                value={password}
                placeholder="Пароль"
                onTextChange={setPassword} // Directly set password
              />
            </View>

            <View style={[styles.innerContainer, styles.buttonContainer]}>
              <Button onPress={onLogin}>
                <Text style={[styles.baseText, styles.buttonText]}>Увійти</Text>
              </Button>

              <View style={styles.loginContainer}>
                <Text style={[styles.baseText, styles.passwordButtonText]}>
                  Немає акаунту?&ensp;
                  <TouchableWithoutFeedback onPress={onRegister}>
                    <Text style={styles.linkText}>Зареєструватися</Text>
                  </TouchableWithoutFeedback>
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </>
    </Pressable>
  );
};

export default LoginScreen;
