import * as React from 'react';
import {Text, TextInput, View} from "react-native";
import styles from "./style";
import globalStyles from "../../../styles/global";

function Home() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
      <View style={globalStyles.container}>
        <Text>Home</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
      </View>
  );
}

export default Home;
