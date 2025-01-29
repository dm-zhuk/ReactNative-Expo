import "react-native-gesture-handler";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native";
import PostsScreen from "../screens/PostsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import Feather from "@expo/vector-icons/Feather";
import NewIcon from "../icons/NewIcon";
import { colors } from "../styles/global";
import { styles } from "../styles/local";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="PostsScreen"
      screenOptions={{
        headerRightContainerStyle: { paddingRight: 16 },
        headerLeftContainerStyle: { paddingLeft: 16 },
        headerStyle: styles.tabHeader,
        headerTitleStyle: styles.tabHeaderTitle,
        headerTitleAlign: "center",
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabIcon,
        tabBarActiveBackgroundColor: colors.orange,
      }}
      backBehavior="history">
      <Tab.Screen
        name="PostsScreen"
        component={PostsScreen}
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
              color={focused ? colors.white : colors.black_80}
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
          tabBarIcon: ({ focused }) => (
            // <Feather
            //   name="plus"
            //   size={24}
            //   color={focused ? colors.white : colors.black_80}
            //   />
            <NewIcon />
          ),
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
              color={focused ? colors.white : colors.black_80}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
