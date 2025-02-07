import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "./config";
import { setUserInfo, clearUserInfo } from "../redux/reducers/userSlice";
import { addUser, getUser } from "./firestore";

export const registerDB = async ({ login, email, password, avatar }) => {
  try {
    console.log("Login value before registration:", login);

    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = credentials.user;

    await updateProfile(user, {
      displayName: login,
      photoURL: avatar,
    });

    const updatedUser = auth.currentUser;

    const userData = {
      uid: updatedUser.uid,
      email: updatedUser.email || "",
      displayName: updatedUser.displayName || login,
      profilePhoto: updatedUser.photoURL || avatar,
    };

    if (!userData.displayName) {
      throw new Error("Display name is required.");
    }

    await addUser(user.uid, userData);

    return userData;
  } catch (error) {
    console.log("Signup error:", error);
    throw error;
  }
};

// Redux
export const loginDB = async ({ email, password }, dispatch) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(credentials);
    const user = credentials.user;

    dispatch(
      setUserInfo({
        uid: user.uid,
        email: user?.email || "",
        displayName: user?.displayName || "",
        profilePhoto: user?.photoURL || "",
      })
    );
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const logoutDB = async (dispatch) => {
  try {
    await signOut(auth);
    // clean user data in Redux
    dispatch(clearUserInfo());
  } catch (error) {
    console.error("Logout error:", error);
  }
};

export const authStateChanged = (dispatch) => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userData = await getUser(user.uid);

      dispatch(
        setUserInfo({
          ...userData,
          uid: user.uid,
          email: user.email || "",
        })
      );
    } else {
      dispatch(clearUserInfo());
    }
  });
};

export const updateUserProfile = async (update) => {
  const user = auth.currentUser;
  if (user) {
    try {
      await updateProfile(user, update);
    } catch (error) {
      throw error;
    }
  }
};
