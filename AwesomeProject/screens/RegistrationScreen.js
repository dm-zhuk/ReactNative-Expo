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
import Input from "../components/Input";
import Button from "../components/Button";
import CircleCloseIcon from "../icons/CircleCloseIcon";
import PasswordInput from "../components/PasswordInput";
import { registerDB } from "../firebase/auth";
import { validateForm } from "../utils/validateForm";
import { styles } from "../styles/local";

const RegistrationScreen = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleAddAvatar = () => {
    console.log("AddAvatar");
  };

  const handleLoginChange = (value) => {
    setLogin(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const onRegister = async () => {
    const formData = { email, password, login, avatar };
    const error = validateForm(formData);

    if (error) {
      Alert.alert("Validation Error", error);
    } else {
      console.log("Form Data:", formData);
      try {
        const userData = await registerDB(formData);
        navigation.navigate("Home");
        console.log("Register success!", userData);
      } catch (err) {
        Alert.alert(
          "Registration Error",
          err.message || "An error occurred during registration."
        );
        console.error("Registration error:", err);
      }
    }
  };

  const onLogin = () => {
    navigation.navigate("Login");
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
          <View style={styles.formContainer}>
            <View style={styles.avatarContainer}>
              <Image
                source={require("../assets/images/avatar.png")}
                resizeMode="cover"
              />
              <Pressable onPress={handleAddAvatar} style={styles.closeIcon}>
                <CircleCloseIcon />
              </Pressable>
            </View>
            <Text style={styles.title}>Реєстрація</Text>

            <View style={[styles.innerContainer, styles.inputContainer]}>
              <Input
                autofocus={true}
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
      </>
    </Pressable>
  );
};

export default RegistrationScreen;
