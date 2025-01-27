import "react-native-gesture-handler";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native";
import PostsScreen from "../screens/PostsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import {
  AntDesign,
  Ionicons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { colors } from "../styles/global";
import { styles } from "../styles/local";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const screenOptions = (navigation, iconName, tabTitle) => ({
    title: tabTitle,
    headerRight: () => (
      <TouchableOpacity style={styles.logoutBtn}>
        <MaterialIcons
          name="logout"
          size={24}
          color={colors.underline_grey}
          onPress={() => navigation.navigate("Login", { screen: "Login" })}
        />
      </TouchableOpacity>
    ),
    tabBarIcon: ({ focused }) => (
      <AntDesign
        name={iconName}
        size={24}
        color={focused ? colors.white : colors.underline_grey}
      />
    ),
  });

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
        tabBarActiveBackgroundColor: colors.orange,
      }}
      backBehavior="history">
      <Tab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={({ navigation }) =>
          screenOptions(navigation, "appstore-o", "Публікації")
        }
      />
      <Tab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          title: "Створити публікацію",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back"
                size={24}
                color={colors.underline_grey}
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="plus"
              size={24}
              color={focused ? colors.white : colors.underline_grey}
            />
          ),
        })}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({ navigation }) => screenOptions(navigation, "user", "")}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
