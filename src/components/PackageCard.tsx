import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import type { Package } from "../types";

interface PackageCardProps {
  packageItem: Package;
  onEdit?: (pkg: Package) => void;
  onDelete?: (pkg: Package) => void;
}

export default function PackageCard({ packageItem, onEdit, onDelete }: PackageCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{packageItem.name}</Text>
      <Text style={styles.price}>₹{packageItem.price.toFixed(2)}</Text>
      {packageItem.description ? (
        <Text style={styles.description}>{packageItem.description}</Text>
      ) : null}

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={() => onEdit?.(packageItem)}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={() => onDelete?.(packageItem)}
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
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4CAF50"
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
    backgroundColor: "#2196F3"
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
