import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { FontAwesome } from "@expo/vector-icons";
import SendIcon from "../icons/SendIcon.js";
import { colors } from "../styles/global";
import { styles } from "../styles/local";

const CommentsScreen = ({ route }) => {
  const { postId, uri } = route.params || {};
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const createComment = async () => {
    if (comment.trim()) {
      try {
        await addDoc(collection(db, `posts/${postId}/comments`), {
          comment,
          displayName: "User",
          created: Timestamp.fromDate(new Date()),
        });
        Keyboard.dismiss();
        setComment("");
      } catch (error) {
        console.error("Error creating comment:", error.message);
      }
    }
  };

  const getComments = () => {
    const q = query(collection(db, `posts/${postId}/comments`));
    onSnapshot(q, (querySnapshot) => {
      const commentsData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        commentId: doc.id,
      }));
      setComments(commentsData);
    });
  };

  useEffect(() => {
    getComments();
  }, []);

  const renderComment = ({ item }) => (
    <View style={{ flexDirection: "row", marginBottom: 24 }}>
      <View style={styles.avatarWrapper}>
        {item.profilePhoto ? (
          <Image
            style={styles.avatarContainer}
            source={{ uri: item.profilePhoto }}
          />
        ) : (
          <FontAwesome name="user-secret" size={28} color={colors.orange} />
        )}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.postTitle}>{item.displayName || "Anonymous"}</Text>
        <Text style={styles.baseText}>{item.comment}</Text>
        <Text style={styles.baseText}>
          {item.created.toDate().toLocaleString()}
        </Text>
      </View>
    </View>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.section}>
        <Image style={styles.postPhotoInCommentScreen} source={{ uri }} />

        {comments.length > 0 && (
          <FlatList
            data={comments}
            keyExtractor={(item) => item.commentId}
            renderItem={renderComment}
          />
        )}

        <View>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={100}>
            <TextInput
              value={comment}
              onChangeText={setComment}
              placeholder="Коментувати..."
              placeholderTextColor={colors.underline_gray}
            />
            <TouchableOpacity style={styles.section} onPress={createComment}>
              <SendIcon />
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CommentsScreen;
