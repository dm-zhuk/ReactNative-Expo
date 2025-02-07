import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication with AsyncStorage for persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Firestore and Storage initialization
export const db = getFirestore(app);
export const storage = getStorage(app);

// Usage of Google Maps API key
const useGoogleMaps = () => {
  console.log(
    "Using Google Maps API Key:",
    process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY
  );
  // Here is to initialize GoogleMaps with API key
};

export { useGoogleMaps };
