import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ArticlesScreen from "../home";
import NewScreen from "../articles/new";
import EditScreen from "../articles/edit";

const Stack = createNativeStackNavigator();

function MyStack() {

  let isSignedIn = true;

  return (
    isSignedIn ? (
      <Stack.Navigator>
        <Stack.Screen name="Articles" component={ArticlesScreen}/>
        <Stack.Screen name="New" component={NewScreen}/>
        <Stack.Screen name="Edit" component={EditScreen}/>
      </Stack.Navigator>
    ) : (
      <Stack.Navigator>
        {/*<Stack.Screen name="SignIn" component={SignInScreen}/>*/}
        {/*<Stack.Screen name="SignUp" component={SignUpScreen}/>*/}
      </Stack.Navigator>
    )
  );
}

export default MyStack;
