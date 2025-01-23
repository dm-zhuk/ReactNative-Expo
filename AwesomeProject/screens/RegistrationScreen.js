import { useState } from "react";
import {
  Alert,
  Dimensions,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import CirclePlusIcon from "../icons/CirclePlusIcon";
import { colors } from "../styles/global";

const SCREEN_WIDTH = Dimensions.get("screen").width;

const RegistrationScreen = () => {
  const [formData, setFormData] = useState({
    login: "",
    email: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const onRegister = () => {
    Alert.alert(
      "Credentials",
      `login: ${formData.login}, email: ${formData.email}, password: ${formData.password}`
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ImageBackground
          source={require("../assets/images/background-img.png")}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.formContainer}>
            <View style={styles.avatarContainer}>
              <CirclePlusIcon style={styles.plusBtn} />
            </View>
            <Text style={styles.title}>Реєстрація</Text>

            <View style={[styles.innerContainer, styles.inputContainer]}>
              <Input
                value={formData.login}
                autoFocus
                placeholder="Логін"
                placeholderTextColor={colors.text_gray}
                onTextChange={(value) => handleChange("login", value)}
              />
              <Input
                value={formData.email}
                placeholder="Адреса електронної пошти"
                placeholderTextColor={colors.text_gray}
                onTextChange={(value) => handleChange("email", value)}
              />
              <Input
                value={formData.password}
                placeholder="Пароль"
                placeholderTextColor={colors.text_gray}
                rightButton={
                  <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Text style={[styles.baseText, styles.passwordButtonText]}>
                      {isPasswordVisible ? "Показати" : "Приховати"}
                    </Text>
                  </TouchableOpacity>
                }
                outerStyles={styles.passwordButton}
                secureTextEntry={isPasswordVisible}
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
                  <TouchableWithoutFeedback
                    onPress={() => console.log("Login")}>
                    <Text style={styles.loginText}>Увійти</Text>
                  </TouchableWithoutFeedback>
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
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
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  formContainer: {
    width: SCREEN_WIDTH,
    height: "65%",
    backgroundColor: colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  avatarContainer: {
    position: "relative",
    marginTop: -90,
    marginBottom: 32,
    alignSelf: "center",
    flexShrink: 0,
    width: 132,
    height: 120,
    borderRadius: 16,
    backgroundColor: colors.light_gray,
  },
  plusBtn: {
    position: "absolute",
    right: -12,
    bottom: 14,
    width: 25,
    height: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 36,
    textAlign: "center",
  },
  buttonText: {
    color: colors.white,
    textAlign: "center",
  },
  passwordButtonText: {
    lineHeight: 16,
    color: colors.blue,
  },
  passwordButton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    textDecorationLine: "underline",
  },
});

export default RegistrationScreen;
