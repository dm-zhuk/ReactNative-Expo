import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useAuth } from "../context/AuthContext";
import { fetchAllPosts } from "../firebase/firestore";
import Feather from "@expo/vector-icons/Feather";
import { colors } from "../styles/global";
import { styles } from "../styles/local";

const PostsScreen = ({ navigation }) => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchAllPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        Alert.alert("Error", "There was an error fetching the posts.");
      }
    };

    const loadData = async () => {
      setLoading(true);
      await loadPosts();
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  const userProfilePhoto =
    user?.profilePhoto || require("../assets/images/avatar.png");
  const userName = user?.login || "Natali Romanova";
  const userEmail = user?.email || "email@example.com";

  const renderItem = ({ item }) => (
    <View>
      <Image style={styles.postPhoto} source={{ uri: item.photo }} />
      <Text style={styles.postTitle}>{item.title}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <TouchableOpacity
          style={styles.commentButton}
          onPress={() => navigation.navigate("Comments")}>
          <Feather name="message-circle" size={24} color={colors.text_gray} />
          <Text style={styles.counter}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Map", {
              latitude: item.coords?.latitude,
              longitude: item.coords?.longitude,
            })
          }
          style={{ flexDirection: "row", alignItems: "center" }}>
          <Feather name="map-pin" size={24} color={colors.text_gray} />
          <Text style={styles.place}>{item.place}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.postsContainer}>
      <View style={styles.userContainer}>
        <Image
          style={styles.avatarPhoto}
          source={userProfilePhoto}
          resizeMode="cover"
        />
        <View style={styles.userData}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.userEmail}>{userEmail}</Text>
        </View>
      </View>

      <View>
        {posts.length === 0 ? (
          <View style={styles.placeholderContainer}>
            <Text style={styles.placeholderText}>
              Тут ще немає публікацій. Ви можете додати нову ✅
            </Text>
          </View>
        ) : (
          <FlatList
            data={posts}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => <View style={{ height: 34 }} />}
            renderItem={renderItem}
          />
        )}
      </View>
    </View>
  );
};

export default PostsScreen;
