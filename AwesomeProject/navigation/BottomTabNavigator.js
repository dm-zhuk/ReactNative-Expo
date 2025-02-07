import "react-native-gesture-handler";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsNavigator from "./PostsNavigator";
import { TouchableOpacity } from "react-native";
import MapScreen from "../screens/MapScreen";
import PostsScreen from "../screens/PostsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import Feather from "@expo/vector-icons/Feather";
import NewIconActive from "../icons/NewIconActive";
import NewIconDefault from "../icons/NewIconDefault";
import { colors } from "../styles/global";
import { styles } from "../styles/local";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="PostsNavigator"
      screenOptions={({ route }) => ({
        headerRightContainerStyle: { paddingRight: 16 },
        headerLeftContainerStyle: { paddingLeft: 16 },
        headerStyle: styles.tabHeader,
        headerTitleStyle: styles.tabHeaderTitle,
        headerTitleAlign: "center",
        tabBarShowLabel: false,
        tabBarStyle:
          route.name === "CreatePostsScreen"
            ? { display: "none" }
            : styles.tabBar,
      })}
      backBehavior="history">
      <Tab.Screen
        name="PostsNavigator"
        component={PostsNavigator}
        options={({ navigation }) => ({
          title: "Публікації",
          headerRight: () => (
            <TouchableOpacity style={styles.logoutBtn}>
              <Feather
                name="log-out"
                size={24}
                color={colors.text_gray}
                onPress={() => navigation.navigate("Login")}
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused }) => (
            <Feather
              name="grid"
              size={24}
              color={focused ? colors.orange : colors.black_80}
            />
          ),
        })}
      />

      <Tab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          title: "Створити публікацію",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={24} color={colors.text_gray} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused }) =>
            focused ? <NewIconActive /> : <NewIconDefault />,
        })}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({ navigation }) => ({
          title: "",
          headerRight: () => (
            <TouchableOpacity style={styles.logoutBtn}>
              <Feather
                name="log-out"
                size={24}
                color={colors.text_gray}
                onPress={() => navigation.navigate("Login")}
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? colors.orange : colors.black_80}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

{
  /* <Tab.Screen
        name="Map"
        component={MapScreen}
        options={({ navigation }) => ({
          title: "Map",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={24} color={colors.text_gray} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused }) => (
            <Feather
              name="map"
              size={24}
              color={focused ? colors.orange : colors.black_80}
            />
          ),
        })}
      /> */
}
