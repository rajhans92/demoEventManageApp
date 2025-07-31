import React, { useState } from "react";
import { View, FlatList, StyleSheet, Alert } from "react-native";
import { Card, Text, FAB, IconButton } from "react-native-paper";
import type { Package } from "../types";

export default function PackagesScreen() {
  const [packages, setPackages] = useState<Package[]>([
    {
      id: "1",
      name: "Gold Package",
      price: 15000,
      description: "Premium services with VIP seating and catering."
    },
    {
      id: "2",
      name: "Silver Package",
      price: 8000,
      description: "Standard services with general seating."
    }
  ]);

  // Create new package
  const handleCreate = () => {
    const newPackage: Package = {
      id: (packages.length + 1).toString(),
      name: `New Package ${packages.length + 1}`,
      price: 5000,
      description: "Newly added package description."
    };
    setPackages((prev) => [...prev, newPackage]);
    Alert.alert("Package Created", `Package "${newPackage.name}" has been added.`);
  };

  // Edit package
  const handleEdit = (pkg: Package) => {
    Alert.alert("Edit Package", `Edit functionality for "${pkg.name}" will go here.`);
  };

  // Delete package
  const handleDelete = (pkg: Package) => {
    Alert.alert(
      "Delete Package",
      `Are you sure you want to delete "${pkg.name}"?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setPackages((prev) => prev.filter((p) => p.id !== pkg.id));
            Alert.alert("Deleted", `"${pkg.name}" has been removed.`);
          }
        }
      ]
    );
  };

  const renderPackage = ({ item }: { item: Package }) => (
    <Card style={styles.card} mode="elevated">
      <Card.Title
        title={item.name}
        titleStyle={styles.cardTitle}
        subtitle={`₹${item.price.toLocaleString()}`}
        right={(props) => (
          <View style={{ flexDirection: "row" }}>
            <IconButton
              {...props}
              icon="pencil"
              iconColor="#4CAF50"
              onPress={() => handleEdit(item)}
            />
            <IconButton
              {...props}
              icon="delete"
              iconColor="#F44336"
              onPress={() => handleDelete(item)}
            />
          </View>
        )}
      />
      <Card.Content>
        <Text style={styles.description}>{item.description}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={packages}
        keyExtractor={(item) => item.id}
        renderItem={renderPackage}
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      <FAB
        icon="plus"
        style={styles.fab}
        color="white"
        label="Create Package"
        onPress={handleCreate}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#F9FAFB", 
    padding: 10 
  },
  card: {
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: "white",
    elevation: 3
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold"
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginTop: 4
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
    backgroundColor: "#4CAF50"
  }
});
