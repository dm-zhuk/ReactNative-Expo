import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
import RegistrationScreen from "./src/Screens/Registration/RegistrationScreen";
import LoginScreen from "./src/Screens/Login/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-SemiBold": require("./assets/fonts/Roboto-SemiBold.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Italic": require("./assets/fonts/Roboto-Italic.ttf"),
  });

  const [isLogin, setIsLogin] = useState(false);

  if (!fontsLoaded) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const goToLogin = () => setIsLogin(true);
  const goToRegistration = () => setIsLogin(false);

  return (
    <>
      {isLogin ? (
        <LoginScreen goToRegistration={goToRegistration} />
      ) : (
        <RegistrationScreen goToLogin={goToLogin} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
