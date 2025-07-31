// EventsScreen.tsx
import * as React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Text, FAB, IconButton, Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { EventStackParamList } from "../navigation/EventNavigator";

type NavProp = NativeStackNavigationProp<EventStackParamList, "Events">;

export default function EventsScreen() {
  const navigation = useNavigation<NavProp>();

  const events = [
    { id: "1", name: "Music Concert", date: "Aug 15, 2025", location: "Mumbai" },
    { id: "2", name: "Tech Conference", date: "Sep 2, 2025", location: "Bengaluru" },
    { id: "3", name: "Art Exhibition", date: "Sep 10, 2025", location: "Delhi" },
    { id: "4", name: "Startup Meetup", date: "Sep 15, 2025", location: "Pune" }
  ];

  const renderEvent = ({ item }: { item: typeof events[0] }) => (
    <TouchableOpacity onPress={() => navigation.navigate("ViewEvent", { eventId: item.id })}>
      <Card style={styles.card} mode="elevated">
        <Card.Title
          title={item.name}
          titleStyle={styles.cardTitle}
          subtitle={`${item.date} • ${item.location}`}
          subtitleStyle={styles.subtitle}
          right={(props) => (
            <IconButton
              {...props}
              icon="pencil"
              iconColor="#4CAF50"
              onPress={() => navigation.navigate("EditEvent", { eventId: item.id })}
            />
          )}
        />
        <Divider />
        <Card.Actions style={styles.cardActions}>
          <IconButton icon="calendar" iconColor="#4CAF50" />
          <Text style={styles.eventInfo}>{item.date}</Text>
          <IconButton icon="map-marker" iconColor="#4CAF50" />
          <Text style={styles.eventInfo}>{item.location}</Text>
        </Card.Actions>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={renderEvent}
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      <FAB
        icon="plus"
        style={styles.fab}
        color="white"
        label="Create Event"
        onPress={() => navigation.navigate("CreateEvent")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB", padding: 10 },
  card: { marginBottom: 12, borderRadius: 12, backgroundColor: "white", elevation: 3 },
  cardTitle: { fontSize: 18, fontWeight: "bold" },
  subtitle: { color: "#666" },
  cardActions: { flexDirection: "row", alignItems: "center", paddingHorizontal: 8 },
  eventInfo: { color: "#333", fontSize: 14, marginRight: 12 },
  fab: { position: "absolute", right: 16, bottom: 16, backgroundColor: "#4CAF50" }
});
