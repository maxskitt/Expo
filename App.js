import React from 'react';
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import store from "./src/redux/store";
import {persistStore} from "redux-persist";
import MyStack from "./src/components/stack";
import {NavigationContainer} from "@react-navigation/native";
import {Text} from "react-native";

let persistor = persistStore(store);

const linking = {
  prefixes: [
    'https://mychat.com', 'mychat://'
  ],
  config: {
    /* configuration for matching screens with paths */
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
          <MyStack/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}


