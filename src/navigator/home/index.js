import React from 'react';
import ArticlesScreen from "../../components/home";
import NewScreen from "../../components/articles/new";
import EditScreen from "../../components/articles/edit";
import SettingsScreen from "../../components/settings";

const {createNativeStackNavigator} = require("@react-navigation/native-stack");

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Articles" component={ArticlesScreen}/>
      <HomeStack.Screen name="New" component={NewScreen}/>
      <HomeStack.Screen name="Edit" component={EditScreen}/>
      <HomeStack.Screen name="Settings" component={SettingsScreen}/>
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;

// <Stack.Navigator>
//   <Stack.Screen name="Articles" component={ArticlesScreen}/>
//   <Stack.Screen name="New" component={NewScreen}/>
//   <Stack.Screen name="Edit" component={EditScreen}/>
//   <Stack.Screen name="Settings" component={SettingsScreen} />
// </Stack.Navigator>
