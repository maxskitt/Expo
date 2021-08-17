import React from "react";
import {StyleSheet, TextInput} from "react-native";

const renderInput = ({input: {name, onChange, ...restInput}}) => {
  return <TextInput style={styles.input} placeholder={name} onChangeText={onChange} {...restInput} />
}

const styles = StyleSheet.create({
  input: {
    width: 250,
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#ffffff",
    color: "#20232a",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default renderInput;
