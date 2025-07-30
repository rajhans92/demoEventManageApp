import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import type { Event } from "../types";

interface EventCardProps {
  event: Event;
  onEdit?: (event: Event) => void;
  onDelete?: (event: Event) => void;
}

export default function EventCard({ event, onEdit, onDelete }: EventCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.date}>{new Date(event.date).toLocaleDateString()}</Text>
      <Text style={styles.location}>{event.location}</Text>
      {event.description ? (
        <Text style={styles.description}>{event.description}</Text>
      ) : null}

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={() => onEdit?.(event)}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={() => onDelete?.(event)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4
  },
  date: {
    fontSize: 14,
    color: "#666"
  },
  location: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 2
  },
  description: {
    fontSize: 14,
    color: "#444",
    marginTop: 6
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "flex-end"
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginLeft: 8
  },
  editButton: {
    backgroundColor: "#4CAF50"
  },
  deleteButton: {
    backgroundColor: "#F44336"
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold"
  }
});
