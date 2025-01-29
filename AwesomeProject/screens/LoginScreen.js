import React, { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import PasswordInput from "../components/PasswordInput";
import { styles } from "../styles/local";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const handleEmailChange = (value) => {
    setEmail(value);
    setIsKeyboardVisible(true);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const onLogin = () => {
    navigation.navigate("Home");
  };

  const onRegister = () => {
    navigation.navigate("Registration", { userEmail: email });
  };

  return (
    <ImageBackground
      source={require("../assets/images/background-img.png")}
      resizeMode="cover"
      style={styles.image}>
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <View
            style={{
              ...styles.formContainerLogin,
              height: isKeyboardVisible ? "50%" : "55%",
            }}>
            <Text style={styles.title}>Увійти</Text>

            <View style={[styles.innerContainer, styles.inputContainer]}>
              <Input
                value={email}
                autoFocus
                placeholder="Адреса електронної пошти"
                onTextChange={handleEmailChange}
              />

              <PasswordInput
                value={password}
                placeholder="Пароль"
                onTextChange={handlePasswordChange}
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
      </Pressable>
    </ImageBackground>
  );
};

export default LoginScreen;
