import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EventNavigator from "./EventNavigator";
import PackagesScreen from "../screens/PackagesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function AppNavigator({ onLogout }: { onLogout: () => void }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#4CAF50",   // green theme
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#ddd"
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = "";

          if (route.name === "Events") {
            iconName = focused ? "calendar-range" : "calendar-range-outline";
          } else if (route.name === "Packages") {
            iconName = focused ? "package-variant" : "package-variant-closed";
          } else if (route.name === "Profile") {
            iconName = focused ? "account-circle" : "account-circle-outline";
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Events" component={EventNavigator} />
      <Tab.Screen options={{ headerShown: true}} name="Packages" component={PackagesScreen} />
      <Tab.Screen options={{ headerShown: true}} name="Profile">
        {() => <ProfileScreen onLogout={onLogout} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
