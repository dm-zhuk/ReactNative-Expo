import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { View, FlatList } from "react-native";
import { Post } from "../components/Post";
import { fetchAllPosts } from "../firebase/firestore";
import { styles } from "../styles/local";

const PostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await fetchAllPosts();
      setPosts(fetchedPosts);
    };

    if (isFocused) {
      fetchPosts();
    }
  }, [isFocused]);

  return (
    <View style={styles.postsContainer}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Post data={item} />}
      />
    </View>
  );
};

export default PostsScreen;
/* 
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View, FlatList } from "react-native";
import { Post } from "../components/Post";
import { useAuth } from "../context/AuthContext";
import { fetchAllPosts } from "../firebase/firestore";
import Feather from "@expo/vector-icons/Feather";
import { colors } from "../styles/global";
import { styles } from "../styles/local";

const PostsScreen = ({ navigation, posts }) => {
  return (
    <View style={styles.postsContainer}>
      <View style={styles.userContainer}>
        <Image
          style={styles.avatarPhoto}
          source={require("../assets/images/avatar.png")}
          resizeMode="cover"
        />
        <View style={styles.userData}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Image style={styles.postPhoto} source={{ uri: item.photo }} />
            <Text style={styles.postTitle}>{item.title}</Text>
            <View style={styles.interactionContainer}>
              <TouchableOpacity
                style={styles.commentButton}
                onPress={() => navigation.navigate("Comments")}>
                <Feather
                  name="message-circle"
                  size={24}
                  color={colors.text_gray}
                />
                <Text>{item.comments.length.toString()}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Map", {
                    latitude: item.coords?.latitude,
                    longitude: item.coords?.longitude,
                  })
                }
                style={styles.mapButton}>
                <Feather name="map-pin" size={24} color={colors.text_gray} />
                <Text>{item.place}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default PostsScreen;
 */
