import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, TextInput, useTheme, HelperText, Divider } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "Login"> & {
  onLogin: () => void;
};

interface LoginForm {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "At least 6 characters").required("Password is required")
});

export default function LoginScreen({ navigation, onLogin }: Props) {
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginForm>({
    resolver: yupResolver(schema)
  });

  const handleLogin = (data: LoginForm) => {
    console.log("Login with:", data);
    onLogin();
  };

  const handleGoogleLogin = () => {
    onLogin();
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Login
      </Text>

      {/* Email */}
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              label="Email"
              mode="outlined"
              value={value}
              onChangeText={onChange}
              keyboardType="email-address"
              autoCapitalize="none"
              error={!!errors.email}
              style={styles.input}
              outlineColor="#4CAF50"
              activeOutlineColor="#4CAF50"
            />
            {errors.email && <HelperText type="error">{errors.email.message}</HelperText>}
          </>
        )}
      />

      {/* Password */}
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              label="Password"
              mode="outlined"
              secureTextEntry
              value={value}
              onChangeText={onChange}
              error={!!errors.password}
              style={styles.input}
              outlineColor="#4CAF50"
              activeOutlineColor="#4CAF50"
            />
            {errors.password && <HelperText type="error">{errors.password.message}</HelperText>}
          </>
        )}
      />

      {/* Login Button */}
      <Button
        mode="contained"
        onPress={handleSubmit(handleLogin)}
        style={[styles.loginButton, { backgroundColor: "#4CAF50" }]}
        contentStyle={{ paddingVertical: 8 }}
      >
        Login
      </Button>

      {/* Divider */}
      <Divider style={{ marginVertical: 16 }} />

      {/* Google Login */}
      <Button
        mode="contained"
        icon="google"
        buttonColor="#DB4437"
        onPress={handleGoogleLogin}
        contentStyle={{ paddingVertical: 8 }}
        style={{ borderRadius: 8 }}
      >
        Login with Google
      </Button>

      {/* Signup Link */}
      <Text style={styles.signupText}>
        Don't have an account?{" "}
        <Text style={{ color: "#4CAF50" }} onPress={() => navigation.navigate("Signup")}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "white"
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold"
  },
  input: {
    marginBottom: 10,
    backgroundColor: "#fff"
  },
  loginButton: {
    marginTop: 10,
    borderRadius: 8
  },
  signupText: {
    marginTop: 20,
    textAlign: "center",
    color: "#555"
  }
});
