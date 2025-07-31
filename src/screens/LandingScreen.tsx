import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../types";

type LandingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Landing">;

export default function LandingScreen() {
  const navigation = useNavigation<LandingScreenNavigationProp>();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      
      <Text variant="headlineMedium" style={styles.title}>
        Event Management
      </Text>
      
      <Text variant="bodyMedium" style={styles.subtitle}>
        Manage, Join & Create events easily
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Login")}
          style={styles.loginButton}
          contentStyle={{ paddingVertical: 8 }}
        >
          Login
        </Button>

        <Button
          mode="outlined"
          onPress={() => navigation.navigate("Signup")}
          style={styles.signupButton}
          contentStyle={{ paddingVertical: 8 }}
        >
          Sign Up
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "white", 
    padding: 20 
  },
  logo: { 
    width: 250, 
    height: 250, 
    marginBottom: 20, 
    resizeMode: "contain" 
  },
  title: { 
    fontWeight: "bold", 
    textAlign: "center", 
    marginBottom: 8 
  },
  subtitle: { 
    textAlign: "center", 
    color: "#555", 
    marginBottom: 40 
  },
  buttonContainer: { 
    width: "100%", 
    gap: 16 
  },
  loginButton: {
    borderRadius: 8,
    backgroundColor: "#4CAF50"
  },
  signupButton: {
    borderRadius: 8,
    borderColor: "#4CAF50"
  }
});
