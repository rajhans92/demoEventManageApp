import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from "react-native";
import type { User } from "../types";

interface ProfileScreenProps {
  onLogout?: () => void;
}

// Mock logged-in user data
const mockUser: User = {
  id: "u1",
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://i.pravatar.cc/150?img=3"
};

export default function ProfileScreen({ onLogout }: ProfileScreenProps) {
  const handleEditProfile = () => {
    Alert.alert("Edit Profile", "Profile editing screen will be implemented here.");
  };

  const handleSettings = () => {
    Alert.alert("Settings", "Settings screen will be implemented here.");
  };

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to log out?", [
      { text: "Cancel", style: "cancel" },
      { text: "Log Out", style: "destructive", onPress: () => onLogout?.() }
    ]);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: mockUser.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{mockUser.name}</Text>
      <Text style={styles.email}>{mockUser.email}</Text>

      <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSettings}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#F9FAFB"
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#ddd"
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20
  },
  button: {
    width: "100%",
    backgroundColor: "#4CAF50",
    padding: 14,
    borderRadius: 8,
    marginBottom: 10
  },
  logoutButton: {
    backgroundColor: "#F44336"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  }
});
