// ViewEventScreen.tsx
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, Button, Card, Divider } from "react-native-paper";
import { useRoute, useNavigation } from "@react-navigation/native";
import type { RouteProp } from "@react-navigation/native";
import type { EventStackParamList } from "../navigation/EventNavigator";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Create a typed navigation prop
type ViewEventNavProp = NativeStackNavigationProp<
  EventStackParamList,
  "ViewEvent"
>;

export default function ViewEventScreen() {
  const route = useRoute<RouteProp<EventStackParamList, "ViewEvent">>();
  const navigation = useNavigation<ViewEventNavProp>();

  // Sample event (in real app, fetch from API using route.params.eventId)
  const event = {
    id: route.params.eventId,
    name: "Sample Event",
    date: "Aug 15, 2025",
    location: "Mumbai",
    description:
      "This is a premium event that includes top speakers, live performances, and interactive sessions. Join us for an unforgettable experience."
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Card style={styles.card} mode="elevated">
        <Card.Title
          title={event.name}
          titleStyle={styles.title}
          left={(props) => <Icon name="calendar-star" size={28} color="#4CAF50" />}
        />
        <Divider />

        {/* Event Details */}
        <View style={styles.detailRow}>
          <Icon name="calendar" size={22} color="#4CAF50" />
          <Text style={styles.detailText}>{event.date}</Text>
        </View>
        <View style={styles.detailRow}>
          <Icon name="map-marker" size={22} color="#4CAF50" />
          <Text style={styles.detailText}>{event.location}</Text>
        </View>

        {/* Description */}
        <Text style={styles.sectionTitle}>About this Event</Text>
        <Text style={styles.description}>{event.description}</Text>

        {/* Edit Button */}
        <Button
          mode="contained"
          style={styles.editButton}
          onPress={() => navigation.navigate("EditEvent", { eventId: event.id })}
        >
          Edit Event
        </Button>

        {/* Back Button */}
        <Button
          mode="outlined"
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          Back
        </Button>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#F9FAFB",
    padding: 16
  },
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#fff",
    elevation: 2
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333"
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12
  },
  detailText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#444"
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
    marginBottom: 8,
    color: "#333"
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: "#555"
  },
  editButton: {
    backgroundColor: "#4CAF50",
    marginTop: 20,
    paddingVertical: 6
  },
  backButton: {
    borderColor: "#4CAF50",
    marginTop: 10,
    paddingVertical: 6
  }
});
