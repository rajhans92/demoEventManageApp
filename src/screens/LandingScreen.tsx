import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../types";

type LandingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Landing">;

export default function LandingScreen() {
  const navigation = useNavigation<LandingScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Event Management</Text>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
        <Button title="Sign Up" onPress={() => navigation.navigate("Signup")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  logo: { width: 120, height: 120, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 40 },
  buttonContainer: { flexDirection: "row", gap: 20 }
});
