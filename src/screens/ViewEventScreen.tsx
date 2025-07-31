// ViewEventScreen.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";
import { useRoute, useNavigation } from "@react-navigation/native";
import type { RouteProp } from "@react-navigation/native";
import type { EventStackParamList } from "../navigation/EventNavigator";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Create a typed navigation prop
type ViewEventNavProp = NativeStackNavigationProp<
  EventStackParamList,
  "ViewEvent"
>;

export default function ViewEventScreen() {
  const route = useRoute<RouteProp<EventStackParamList, "ViewEvent">>();
  const navigation = useNavigation<ViewEventNavProp>();

  // Here you would fetch event details from API using route.params.eventId
  const event = { id: route.params.eventId, name: "Sample Event", date: "Aug 15, 2025", location: "Mumbai" };

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge">{event.name}</Text>
      <Text>Date: {event.date}</Text>
      <Text>Location: {event.location}</Text>
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate("EditEvent", { eventId: event.id })}
      >
        Edit Event
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  button: { marginTop: 20, backgroundColor: "#4CAF50" }
});
