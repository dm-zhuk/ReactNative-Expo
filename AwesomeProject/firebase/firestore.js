import {
  arrayUnion,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "./config";

export const addUser = async (userId, userData) => {
  try {
    await setDoc(doc(db, "users", userId), userData, { merge: true });
    console.log("User added:", userId);
  } catch (error) {
    console.error("Error adding user to Firestore:", error);
    throw error;
  }
};

export const addPost = async (postId, post) => {
  try {
    await setDoc(doc(db, "posts", postId), post, { merge: true });
    console.log("Post added:", postId);
  } catch (error) {
    console.error("Error adding post:", error);
  }
};
export const getUser = async (userId) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("User data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
    return null;
  }
};

export const updateUserInFirestore = async (uid, data) => {
  try {
    await setDoc(doc(db, "users", uid), data, { merge: true });
    console.log("User data updated to Firestore:", uid);
  } catch (error) {
    console.error("Error saving user data to Firestore:", error);
  }
};

export const uploadImage = async (userId, file, fileName) => {
  try {
    const imageRef = ref(storage, `postPhotos/${userId}/${fileName}`);
    console.log("Uploading to:", imageRef.fullPath);

    const result = await uploadBytes(imageRef, file);
    console.log("Upload result:", result);
    return imageRef;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export const getImageUrl = async (imageRef) => {
  try {
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error("Error getting image URL:", error);
    throw error;
  }
};

export const getPost = async (id) => {
  const docRef = doc(db, "posts", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Post data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
    return null;
  }
};

export const getDocument = async (docId, collectionName) => {
  const docRef = doc(db, collectionName, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
    return null;
  }
};

export const fetchAllPosts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const posts = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    }));

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const addCommentToDB = async (postId, comment) => {
  try {
    await updateDoc(doc(db, "posts", postId), {
      comments: arrayUnion(comment),
    });

    console.log("Comment added!");
  } catch (error) {
    console.error("Error adding comment:", error);
  }
};
