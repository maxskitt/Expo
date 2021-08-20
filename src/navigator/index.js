import React from 'react';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import HomeStackScreen from "./home";
import UsersStackScreen from "../components/users";

const Tab = createMaterialBottomTabNavigator();

function MyStack() {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Article" component={HomeStackScreen}/>
      <Tab.Screen name="Users" component={UsersStackScreen}/>
    </Tab.Navigator>
  );
}

export default MyStack;
