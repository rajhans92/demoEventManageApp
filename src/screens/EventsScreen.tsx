import React from "react";
import { View, Text, Button, FlatList } from "react-native";

export default function EventsScreen() {
  const events = [
    { id: "1", name: "Music Concert" },
    { id: "2", name: "Tech Conference" }
  ];

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button title="Create Event" onPress={() => {}} />
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text>{item.name}</Text>
            <Button title="Edit" onPress={() => {}} />
          </View>
        )}
      />
    </View>
  );
}
