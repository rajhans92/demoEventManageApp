import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EventsScreen from "../screens/EventsScreen";
import PackagesScreen from "../screens/PackagesScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Events" component={EventsScreen} />
      <Tab.Screen name="Packages" component={PackagesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
