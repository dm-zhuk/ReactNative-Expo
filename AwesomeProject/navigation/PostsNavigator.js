import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PostsScreen from "../screens/PostsScreen";
import MapScreen from "../screens/MapScreen";
import CommentsScreen from "../screens/CommentsScreen";
import { TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { colors } from "../styles/global";

const Stack = createStackNavigator();

const PostsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Posts"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Posts"
        component={PostsScreen}
        options={({ navigation }) => ({
          headerTitle: "Публікації",
          headerRight: () => (
            <TouchableOpacity
              style={{ paddingRight: 16 }}
              onPress={() => navigation.navigate("Login")}>
              <Feather name="log-out" size={24} color={colors.text_gray} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Comments" component={CommentsScreen} />
    </Stack.Navigator>
  );
};

export default PostsNavigator;
