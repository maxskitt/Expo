import React from "react";
import {TextInput} from "react-native";
import styles from "./style";

const renderInput = ({input: {name, onChange, ...restInput}}) => {
  return <TextInput style={styles.input} placeholder={name} onChangeText={onChange} {...restInput} />
}

export default renderInput;
