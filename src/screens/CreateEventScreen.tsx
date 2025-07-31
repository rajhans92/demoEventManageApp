// CreateEventScreen.tsx
import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function CreateEventScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const handleSave = () => {
    console.log("New Event:", { name, date, location });
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text variant="headlineMedium" style={styles.title}>
          Create New Event
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

        {/* Buttons */}
        <Button
          mode="contained"
          onPress={handleSave}
          style={styles.saveButton}
        >
          Save Event
        </Button>

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
  saveButton: {
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
