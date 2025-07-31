// CreateEventScreen.tsx
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function CreateEventScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const handleSave = () => {
    console.log("New Event:", { name, date, location });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput label="Event Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput label="Date" value={date} onChangeText={setDate} style={styles.input} />
      <TextInput label="Location" value={location} onChangeText={setLocation} style={styles.input} />
      <Button mode="contained" onPress={handleSave} style={styles.button}>
        Save Event
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { marginBottom: 12 },
  button: { backgroundColor: "#4CAF50" }
});
