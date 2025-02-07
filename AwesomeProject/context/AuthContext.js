import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tabBarVisible, setTabBarVisible] = useState(true);

  const login = () => setIsLoggedIn(true);
  const logout = (navigation) => {
    setIsLoggedIn(false);
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, setTabBar: setTabBarVisible }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
