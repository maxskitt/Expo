import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../home";
import NotificationsScreen from "../notifications";
import ProfileScreen from "../profile";
import SettingsScreen from "../settings";
import SignInScreen from "../signIn";
import SignUpScreen from "../signUp";

const Stack = createNativeStackNavigator();

function MyStack() {

  let isSignedIn = false;

  return (
    isSignedIn ? (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Notifications" component={NotificationsScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="Settings" component={SettingsScreen}/>
      </Stack.Navigator>
    ) : (
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
      </Stack.Navigator>
    )
  );
}

export default MyStack;
