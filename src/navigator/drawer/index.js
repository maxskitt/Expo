import * as React from 'react';
import {Text, View} from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import ArticlesScreen from "../../components/article";

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={ArticlesScreen} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
