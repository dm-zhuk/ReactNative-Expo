import React, { useState, useRef, useEffect } from "react";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";
import { CameraView, useCameraPermissions } from "expo-camera";
import Feather from "@expo/vector-icons/Feather";
import { colors } from "../styles/global";
import { styles } from "../styles/local";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Image,
  Text,
  TextInput,
  Keyboard,
  Platform,
  Button,
} from "react-native";

const CreatePostsScreen = ({ navigation, posts, setPosts }) => {
  const [post, setPost] = useState({ photo: "", title: "", place: "" });
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
      }
    })();
  }, []);

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.msg}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const updatePost = (key, value) =>
    setPost((prev) => ({ ...prev, [key]: value }));

  const takePicture = async () => {
    if (!cameraRef.current) return;
    const { uri } = await cameraRef.current.takePictureAsync();
    await MediaLibrary.saveToLibraryAsync(uri);
    updatePost("photo", uri);
  };

  const pickImage = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("Permission to access media library is required!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      updatePost("photo", result.assets[0].uri);
    }
  };

  const onSubmit = async () => {
    const { coords } = await Location.getCurrentPositionAsync({});
    const newPost = { ...post, coords };
    setPosts((prevPosts) => [...prevPosts, newPost]);
    navigation.navigate("Posts");
    setPost({ photo: "", title: "", place: "" });
  };

  const isAllowed = post.photo && post.title && post.place;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.createPostsContainer}>
        <View style={styles.cameraContainer}>
          {post.photo ? (
            <Image style={styles.camera} source={{ uri: post.photo }} />
          ) : (
            <CameraView style={styles.camera} ref={cameraRef}>
              <TouchableOpacity
                style={[
                  styles.photoBtnContainer,
                  { backgroundColor: colors.white },
                ]}
                activeOpacity={0.8}
                onPress={takePicture}>
                <Feather name="camera" size={24} color={colors.text_gray} />
              </TouchableOpacity>
            </CameraView>
          )}
        </View>

        <TouchableOpacity onPress={pickImage}>
          <Text style={styles.textUpload}>
            {post.photo ? "Edit Photo" : "Upload Photo"}
          </Text>
        </TouchableOpacity>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <TextInput
            style={styles.createPostInput}
            placeholder="Title..."
            placeholderTextColor={colors.text_gray}
            value={post.title}
            onChangeText={(text) => updatePost("title", text)}
          />
          <View style={{ position: "relative" }}>
            <Feather
              name="map-pin"
              size={24}
              color={colors.text_gray}
              style={styles.pinIcon}
            />
            <TextInput
              style={[styles.createPostInput, { paddingLeft: 28 }]}
              placeholder="Location..."
              placeholderTextColor={colors.text_gray}
              value={post.place}
              onChangeText={(text) => updatePost("place", text)}
            />
          </View>
          <TouchableOpacity
            style={[
              styles.createBtn,
              {
                backgroundColor: isAllowed ? colors.orange : colors.light_gray,
              },
            ]}
            disabled={!isAllowed}
            onPress={onSubmit}>
            <Text
              style={[
                styles.createBtnText,
                { color: isAllowed ? colors.white : colors.text_gray },
              ]}>
              Publish
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        <View style={styles.resetBtn}>
          <TouchableOpacity
            onPress={() => setPost({ photo: "", title: "", place: "" })}>
            <Feather name="trash-2" size={24} color={colors.text_gray} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;
