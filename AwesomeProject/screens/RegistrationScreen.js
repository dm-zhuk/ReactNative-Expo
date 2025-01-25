import { useState } from "react";
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { colors, baseStyles } from "../styles/global";
import Input from "../components/Input";
import Button from "../components/Button";
import CirclePlusIcon from "../icons/CirclePlusIcon";
import PasswordInput from "../components/PasswordInput";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = () => {
    console.log(
      "Credentials",
      `login: ${login}, email: ${email}, password: ${password}`
    );
  };

  const onLogin = () => {
    console.log("Login");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={styles.formContainer}>
          <View style={styles.avatarContainer}>
            <CirclePlusIcon width="25" height="25" style={styles.plusIcon} />
          </View>
          <Text style={baseStyles.title}>Реєстрація</Text>

          <View style={[styles.innerContainer, styles.inputContainer]}>
            <Input
              value={login}
              autoFocus={true}
              placeholder="Логін"
              onTextChange={setLogin}
            />
            <Input
              value={email}
              autoFocus={true}
              placeholder="Адреса електронної пошти"
              onTextChange={setEmail}
            />
            <PasswordInput
              value={password}
              placeholder="Пароль"
              onTextChange={setPassword}
            />
          </View>

          <View style={[styles.innerContainer, styles.buttonContainer]}>
            <Button onPress={onRegister}>
              <Text style={[baseStyles.baseText, styles.buttonText]}>
                Зареєстуватися
              </Text>
            </Button>
            <View style={styles.loginContainer}>
              <Text style={[baseStyles.baseText, baseStyles.linkText]}>
                Вже є акаунт?&ensp;
                <TouchableWithoutFeedback onPress={onLogin}>
                  <Text style={baseStyles.underline}>Увійти</Text>
                </TouchableWithoutFeedback>
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

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
  formContainer: {
    width: SCREEN_WIDTH,
    minHeight: "65%",
    backgroundColor: colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 92,
  },
  avatarContainer: {
    position: "relative",
    marginTop: -152,
    marginBottom: 32,
    alignSelf: "center",
    width: 120,
    height: 120,
    backgroundColor: colors.light_gray,
    borderRadius: 16,
  },
  plusIcon: {
    position: "absolute",
    bottom: 14,
    right: -12,
  },
  buttonText: {
    color: colors.white,
    textAlign: "center",
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RegistrationScreen;
