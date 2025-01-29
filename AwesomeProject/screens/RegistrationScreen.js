import React, { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "../styles/local";
import Input from "../components/Input";
import Button from "../components/Button";
import CirclePlusIcon from "../icons/CirclePlusIcon";
import PasswordInput from "../components/PasswordInput";

const RegistrationScreen = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const handleLoginChange = (value) => {
    setLogin(value);
    setKeyboardVisible(true);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setKeyboardVisible(true);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setKeyboardVisible(true);
  };

  const onRegister = () => {
    navigation.navigate("Home");
  };

  const onLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground
      source={require("../assets/images/background-img.png")}
      resizeMode="cover"
      style={styles.image}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <View
            style={{
              ...styles.formContainer,
              height: keyboardVisible ? "60%" : "77%",
            }}>
            <View style={styles.avatarContainer}>
              <CirclePlusIcon width="25" height="25" style={styles.plusIcon} />
            </View>
            <Text style={styles.title}>Реєстрація</Text>

            <View style={[styles.innerContainer, styles.inputContainer]}>
              <Input
                autoFocus
                value={login}
                placeholder="Логін"
                onTextChange={handleLoginChange}
              />

              <Input
                value={email}
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
              <Button onPress={onRegister}>
                <Text style={[styles.baseText, styles.buttonText]}>
                  Зареєстуватися
                </Text>
              </Button>

              <View style={styles.loginContainer}>
                <Text style={[styles.baseText, styles.passwordButtonText]}>
                  Вже є акаунт?&ensp;
                  <TouchableWithoutFeedback onPress={onLogin}>
                    <Text style={styles.linkText}>Увійти</Text>
                  </TouchableWithoutFeedback>
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default RegistrationScreen;
