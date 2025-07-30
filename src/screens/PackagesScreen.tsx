import React, { useState } from "react";
import { View, FlatList, Button, StyleSheet, Alert } from "react-native";
import PackageCard from "../components/PackageCard";
import type { Package } from "../types";

export default function PackagesScreen() {
  // Sample data
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
    // TODO: Open edit form or navigate to package edit screen
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

  return (
    <View style={styles.container}>
      <Button title="Create Package" onPress={handleCreate} />
      <FlatList
        data={packages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PackageCard
            packageItem={item}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 }
});
