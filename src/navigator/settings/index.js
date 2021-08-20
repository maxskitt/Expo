import React from 'react';
import SettingsScreen from "../../components/settings";

const {createNativeStackNavigator} = require("@react-navigation/native-stack");

const HomeStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Settings" component={SettingsScreen}/>
    </HomeStack.Navigator>
  );
}

export default SettingsStackScreen;

{/*<HomeStack.Screen name="Use" component={ArticlesScreen}/>*/}
{/*<HomeStack.Screen name="New" component={NewScreen}/>*/}
{/*<HomeStack.Screen name="Edit" component={EditScreen}/>*/}
