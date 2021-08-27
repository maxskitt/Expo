import * as React from 'react';
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import store from "./src/redux/store";
import {persistStore} from "redux-persist";
import MyStack from "./src/navigator";
import {NavigationContainer} from "@react-navigation/native";
import {Text} from "react-native";
import {useFonts} from "expo-font";
import {SafeAreaProvider} from "react-native-safe-area-view";

let persistor = persistStore(store);

export default function App() {

  const [loaded] = useFonts({
    SFProDisplayBold: require('./assets/fonts/SFProDisplay-Bold.ttf'),
    SFProDisplayRegular: require('./assets/fonts/SFProDisplay-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer fallback={<Text>Loading...</Text>}>
            <MyStack/>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}
