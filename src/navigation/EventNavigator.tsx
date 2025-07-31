// EventNavigator.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventsScreen from "../screens/EventsScreen";
import CreateEventScreen from "../screens/CreateEventScreen";
import ViewEventScreen from "../screens/ViewEventScreen";
import EditEventScreen from "../screens/EditEventScreen";

export type EventStackParamList = {
  Events: undefined;
  CreateEvent: undefined;
  ViewEvent: { eventId: string };
  EditEvent: { eventId: string };
};

const Stack = createNativeStackNavigator<EventStackParamList>();

export default function EventNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Events" component={EventsScreen} options={{ title: "Events" }} />
      <Stack.Screen name="CreateEvent" component={CreateEventScreen} options={{ title: "Create Event" }} />
      <Stack.Screen name="ViewEvent" component={ViewEventScreen} options={{ title: "Event Details" }} />
      <Stack.Screen name="EditEvent" component={EditEventScreen} options={{ title: "Edit Event" }} />
    </Stack.Navigator>
  );
}
