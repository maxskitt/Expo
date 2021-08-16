import React from 'react';
import {Button} from "react-native";
import signIn from "../../firebase";

function SignInScreen() {
  return (<Button title="Sign in" onPress={() => signIn()}/>);
}

export default SignInScreen;
