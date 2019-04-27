import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';

import Input from '../../components/Input'
import Button from '../../components/Button'
import WeightRow from '../../components/WeightRow'

export default class WeightScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weight: '90',
      date: '01.04.2019'
    };
  }

  onChangeWeight = (value) => {
    this.setState({
      weight: value,
    })
  };

  onChangeDate = (value) => {
    this.setState({
      date: value,
    })
  };

  onPressButton = () => {
    console.log(this.state.weight);
    console.log(this.state.date);
  };

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.container}>
          <Input
            onChangeText={this.onChangeWeight}
            label="Weight"
            keyboardType="numeric"
            value={this.state.weight}
            placeholder="Weight"
          />
          <Input
            onChangeText={this.onChangeDate}
            label="Date"
            keyboardType="numeric"
            value={this.state.date}
            placeholder="Date"
          />
          <Button
            onPress={this.onPressButton}
            text="SAVE"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 40
  },
  listContainer: {
    flex: 1,
    width: '100%',
    marginTop: 20,
  },
  mainView: {
    flex: 1,
    backgroundColor: '#D7E8FF',
  }
});
