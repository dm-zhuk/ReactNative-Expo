import React from "react";
import { AuthProvider } from "./AuthContext";
import { AppContextProvider } from "./AppContext";

const ContextCombiner = ({ children }) => {
  return (
    <AuthProvider>
      <AppContextProvider>{children}</AppContextProvider>
    </AuthProvider>
  );
};

export default ContextCombiner;
