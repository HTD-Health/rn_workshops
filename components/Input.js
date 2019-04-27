import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Input = (props) => {
  return (
    <View style={styles.inputWrapper}>
      {props.label ? <Text style={styles.label}>{props.label}</Text> : null}
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        value={props.value}
        keyboardType={props.keyboardType}
        {...props}
      />
    </View>
  )
};

export default Input;


const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderBottomWidth: 3,
    borderColor: '#0080FF',
    height: 40,
    borderRadius: 3,
    fontWeight: 'bold',
  },
  inputWrapper: {
    width: '100%',
  },
  label: {
    color: '#0080FF',
    fontWeight: 'bold',
  },
});
