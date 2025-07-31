// EditEventScreen.tsx
import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { useRoute, useNavigation } from "@react-navigation/native";
import type { RouteProp } from "@react-navigation/native";
import type { EventStackParamList } from "../navigation/EventNavigator";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function EditEventScreen() {
  const route = useRoute<RouteProp<EventStackParamList, "EditEvent">>();
  const navigation = useNavigation();

  // Pretend we fetched event details
  const [name, setName] = useState("Music Concert");
  const [date, setDate] = useState("Aug 15, 2025");
  const [location, setLocation] = useState("Mumbai");

  const handleUpdate = () => {
    console.log("Updated Event:", { name, date, location });
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text variant="headlineMedium" style={styles.title}>
          Edit Event
        </Text>

        {/* Event Name */}
        <TextInput
          label="Event Name"
          value={name}
          onChangeText={setName}
          mode="outlined"
          left={<TextInput.Icon icon={() => <Icon name="calendar-text" size={20} />} />}
          style={styles.input}
        />

        {/* Date */}
        <TextInput
          label="Date"
          value={date}
          onChangeText={setDate}
          mode="outlined"
          placeholder="YYYY-MM-DD"
          left={<TextInput.Icon icon={() => <Icon name="calendar" size={20} />} />}
          style={styles.input}
        />

        {/* Location */}
        <TextInput
          label="Location"
          value={location}
          onChangeText={setLocation}
          mode="outlined"
          left={<TextInput.Icon icon={() => <Icon name="map-marker" size={20} />} />}
          style={styles.input}
        />

        {/* Update Button */}
        <Button
          mode="contained"
          onPress={handleUpdate}
          style={styles.updateButton}
        >
          Update Event
        </Button>

        {/* Cancel Button */}
        <Button
          mode="outlined"
          onPress={handleCancel}
          style={styles.cancelButton}
        >
          Cancel
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#F9FAFB",
    padding: 16,
  },
  container: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  updateButton: {
    backgroundColor: "#4CAF50",
    marginTop: 8,
    paddingVertical: 6,
  },
  cancelButton: {
    borderColor: "#4CAF50",
    marginTop: 8,
    paddingVertical: 6,
  },
});
