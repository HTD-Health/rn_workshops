import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Button = (props) => {
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: props.color}]}
        onPress={props.onPress}
      >
        <Text style={styles.buttonText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  )
};

Button.defaultProps = {
  color: '#0080FF'
};

export default Button;


const styles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});
