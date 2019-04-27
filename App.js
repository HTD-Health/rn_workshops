import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      BMI: '90',
    };
  }

  onChangeBMI = (value) => {
    this.setState({
      BMI: value,
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>{this.state.BMI}</Text>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>BMI</Text>
          <TextInput
            style={styles.input}
            onChangeText={this.onChangeBMI}
            value={this.state.BMI}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
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
  }
});
