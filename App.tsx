import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./src/screens/LandingScreen";
import LoginScreen from "./src/screens/LoginScreen";
// import SignupScreen from "./src/screens/SignupScreen";
import AppNavigator from "./src/navigation/AppNavigator";

export type RootStackParamList = {
  Landing: undefined;
  Login: undefined;
  Signup: undefined;
  MainTabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <>
            <Stack.Screen name="Landing" component={LandingScreen} />
            <Stack.Screen name="Login">
              {(props) => <LoginScreen {...props} onLogin={() => setIsLoggedIn(true)} />}
            </Stack.Screen>
            {/* <Stack.Screen name="Signup">
              {(props) => <SignupScreen {...props} onSignup={() => setIsLoggedIn(true)} />}
            </Stack.Screen> */}
          </>
        ) : (
          <Stack.Screen name="MainTabs">
            {(props) => <AppNavigator {...props} onLogout={handleLogout} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
