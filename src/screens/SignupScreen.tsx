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

type Props = NativeStackScreenProps<RootStackParamList, "Signup"> & {
  onSignup: () => void;
};

interface SignupForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "At least 6 characters").required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required")
});

export default function SignupScreen({ navigation, onSignup }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<SignupForm>({
    resolver: yupResolver(schema)
  });

  const handleRegister = (data: SignupForm) => {
    console.log("Signup with:", data);
    // TODO: API call for signup
    Alert.alert("Account Created", `Welcome ${data.name}`);
    onSignup();
  };

  const handleGoogleSignup = async () => {
    // const result = await loginWithGoogle();
    // if (result) {
    //   Alert.alert(
    //     "Google Signup Success",
    //     `Welcome ${result?.tokenAdditionalParameters?.given_name || "User"}`
    //   );
    //   onSignup();
    // }
    onSignup();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      {/* Name */}
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Full Name"
            style={styles.input}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

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

      {/* Confirm Password */}
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Confirm Password"
            style={styles.input}
            secureTextEntry
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword.message}</Text>}

      {/* Signup Button */}
      <TouchableOpacity style={styles.signupBtn} onPress={handleSubmit(handleRegister)}>
        <Text style={styles.signupText}>Create Account</Text>
      </TouchableOpacity>

      {/* Google Signup */}
      <TouchableOpacity style={styles.googleBtn} onPress={handleGoogleSignup}>
        <Text style={styles.googleText}>Sign Up with Google</Text>
      </TouchableOpacity>

      {/* Back to Login */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginLink}>
          Already have an account? <Text style={styles.loginLinkHighlight}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#F9FAFB" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#fff"
  },
  error: { color: "red", marginBottom: 8 },
  signupBtn: { backgroundColor: "#4CAF50", padding: 14, borderRadius: 8, marginTop: 10 },
  signupText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  googleBtn: { backgroundColor: "#DB4437", padding: 14, borderRadius: 8, marginTop: 10 },
  googleText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  loginLink: { marginTop: 20, textAlign: "center", color: "#555" },
  loginLinkHighlight: { color: "#4CAF50", fontWeight: "bold" }
});
