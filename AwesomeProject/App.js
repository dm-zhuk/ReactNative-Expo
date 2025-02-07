import "react-native-gesture-handler";
import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import Loader from "./components/Loader";
import StackNavigator from "./navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";
import { AuthProvider } from "./context/AuthContext";
import { AppContextProvider } from "./context/AppContext";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-SemiBold": require("./assets/fonts/Roboto-SemiBold.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Italic": require("./assets/fonts/Roboto-Italic.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <Loader />;
  }

  return (
    <Provider store={store.store}>
      <PersistGate loading={<Loader />} persistor={store.persistor}>
        <AuthProvider>
          <AppContextProvider>
            <NavigationContainer>
              <StackNavigator />
            </NavigationContainer>
          </AppContextProvider>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
}
