import React from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MoviesScreen,
  SearchScreen,
  SeriesScreen,
  SettingScreen
} from "../screens";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: route.name,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Movies") {
            iconName = focused ? "film" : "film-outline";
            tabBarBadge: 3;
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Series") {
            iconName = focused ? "tv" : "tv-outline";
          } else if (route.name === "Setting") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#6B6F6E",
        tabBarStyle: {
          backgroundColor: "#000",
          height: 60,
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 10,
          paddingRight: 10
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 13
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true
      })}
    >
      <Tab.Screen name="Movies" component={MoviesScreen} />
      <Tab.Screen name="Series" component={SeriesScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
