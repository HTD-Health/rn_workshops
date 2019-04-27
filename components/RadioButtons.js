import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const RadioButtons = (props) => {
  const maleColor = props.currentValue === "male" ? "#0080FF" : "#D7E8FF"
  const femaleColor = props.currentValue === "female" ? "#0080FF" : "#D7E8FF"
  return (
    <View style={styles.buttonsWrapper}>

      <TouchableOpacity onPress={props.onPress("male")} style={styles.singleButtonWrapper}>
        <View style={{ ...styles.icon, backgroundColor: maleColor }} />
        <Text style={styles.text}>Male</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={props.onPress("female")} style={styles.singleButtonWrapper}>
        <View style={{ ...styles.icon, backgroundColor: femaleColor }} />
        <Text style={styles.text}>Female</Text>
      </TouchableOpacity>

    </View>
  )
};

export default RadioButtons;

const styles = StyleSheet.create({
  buttonsWrapper: {
    alignSelf: "flex-start",
    marginVertical: 20,
  },
  singleButtonWrapper: {
    height: 40,
    flexDirection: 'row',
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#0080FF",
    marginRight: 30,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
