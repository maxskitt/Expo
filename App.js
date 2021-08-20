import React from 'react';
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import store from "./src/redux/store";
import {persistStore} from "redux-persist";
import MyStack from "./src/navigator";
import {NavigationContainer} from "@react-navigation/native";
import {Text} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-view";

let persistor = persistStore(store);

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer fallback={<Text>Loading...</Text>}>
            <MyStack/>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  )
}
