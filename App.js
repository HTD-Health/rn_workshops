import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Input from './components/Input'
import Button from './components/Button'

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

        <Button
          onPress={this.onPressButton}
          text="ADD WEIGHT"
        />

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
});
