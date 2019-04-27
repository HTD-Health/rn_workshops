import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Input from './components/Input'

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

  onPressButton = () => {
    console.log(this.state.BMI);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>{this.state.BMI}</Text>

        <Input
          onChangeText={this.onChangeBMI}
          label="BMI"
          keyboardType="numeric"
          value={this.state.BMI}
          placeholder="Placeholder"
        />

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            onPress={this.onPressButton}
            style={styles.button}
          >
            <Text style={styles.buttonText}>ADD WEIGHT</Text>
          </TouchableOpacity>
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
  buttonWrapper: {
    width: '100%',
    marginTop: 20,
  },
  label: {
    color: '#0080FF',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#0080FF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});
