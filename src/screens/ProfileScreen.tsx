import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Avatar, Button, Text, Card, Title, Paragraph } from "react-native-paper";
import type { User } from "../types";

// Mock logged-in user data
const mockUser: User = {
  id: "u1",
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://i.pravatar.cc/150?img=3"
};

export default function ProfileScreen({ onLogout }: { onLogout: () => void }) {

  const handleEditProfile = () => {
    Alert.alert("Edit Profile", "Profile editing screen will be implemented here.");
  };

  const handleSettings = () => {
    Alert.alert("Settings", "Settings screen will be implemented here.");
  };

  return (
    <View style={styles.container}>
      <Avatar.Image size={120} source={{ uri: mockUser.avatar }} style={styles.avatar} />
      <Title style={styles.name}>{mockUser.name}</Title>
      <Paragraph style={styles.email}>{mockUser.email}</Paragraph>

      <Card style={styles.card}>
        <Card.Content>
          <Button
            mode="contained"
            onPress={handleEditProfile}
            style={styles.button}
            contentStyle={{ paddingVertical: 8 }}
            buttonColor="#4CAF50"
          >
            Edit Profile
          </Button>

          <Button
            mode="contained"
            onPress={handleSettings}
            style={styles.button}
            contentStyle={{ paddingVertical: 8 }}
            buttonColor="#4CAF50"
          >
            Settings
          </Button>

          <Button
            mode="contained"
            onPress={onLogout}
            style={[styles.button, { backgroundColor: "#F44336" }]}
            contentStyle={{ paddingVertical: 8 }}
          >
            Log Out
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F9FAFB",
    alignItems: "center"
  },
  avatar: {
    marginBottom: 16,
  },
  name: {
    marginBottom: 4,
    fontWeight: "bold",
  },
  email: {
    marginBottom: 20,
    color: "#666",
  },
  card: {
    width: "100%",
    padding: 10,
    borderRadius: 12,
    elevation: 3,
  },
  button: {
    marginBottom: 12,
  }
});
