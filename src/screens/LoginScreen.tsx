import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { loginWithGoogle } from "../services/auth"; // Social login
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
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginForm>({
    resolver: yupResolver(schema)
  });

  const handleLogin = (data: LoginForm) => {
    console.log("Login with:", data);
    // TODO: API call for login
    Alert.alert("Login Successful", `Welcome ${data.email}`);
    onLogin();
  };

  const handleGoogleLogin = async () => {
    // const result = await loginWithGoogle();
    // if (result) {
    //   Alert.alert("Google Login Success", `Welcome ${result?.tokenAdditionalParameters?.given_name || "User"}`);
    //   onLogin();
    // }
    onLogin();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Email */}
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={value}
            onChangeText={onChange}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      {/* Password */}
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      {/* Login Button */}
      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit(handleLogin)}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* Google Login */}
      <TouchableOpacity style={styles.googleBtn} onPress={handleGoogleLogin}>
        <Text style={styles.googleText}>Login with Google</Text>
      </TouchableOpacity>

      {/* Signup Link */}
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signupLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#F9FAFB"
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#fff"
  },
  error: {
    color: "red",
    marginBottom: 8
  },
  loginBtn: {
    backgroundColor: "#4CAF50",
    padding: 14,
    borderRadius: 8,
    marginTop: 10
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold"
  },
  googleBtn: {
    backgroundColor: "#DB4437",
    padding: 14,
    borderRadius: 8,
    marginTop: 10
  },
  googleText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold"
  },
  signupText: {
    marginTop: 20,
    textAlign: "center",
    color: "#555"
  },
  signupLink: {
    color: "#4CAF50",
    fontWeight: "bold"
  }
});
