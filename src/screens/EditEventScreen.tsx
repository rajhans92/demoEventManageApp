// EditEventScreen.tsx
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useRoute, useNavigation } from "@react-navigation/native";
import type { RouteProp } from "@react-navigation/native";
import type { EventStackParamList } from "../navigation/EventNavigator";

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

  return (
    <View style={styles.container}>
      <TextInput label="Event Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput label="Date" value={date} onChangeText={setDate} style={styles.input} />
      <TextInput label="Location" value={location} onChangeText={setLocation} style={styles.input} />
      <Button mode="contained" onPress={handleUpdate} style={styles.button}>
        Update Event
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { marginBottom: 12 },
  button: { backgroundColor: "#4CAF50" }
});
