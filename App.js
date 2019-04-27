import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // https://expo.github.io/vector-icons/

import Input from './components/Input'
import Button from './components/Button'

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      BMI: '90',
      weights: [
        {
          id: 1,
          value: '90',
          date: '12.08.2017'
        },
        {
          id: 2,
          value: '86',
          date: '12.08.2016'
        }
      ],
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

  keyExtractor = (item) => {
    return `${item.id}`;
  };

  renderItem = ({item}) => {
    return (
      <View style={styles.weightRow}>
        <Text style={styles.weightValue}>{item.value}</Text>
        <Text style={styles.weightDate}>{item.date}</Text>

        <View style={styles.iconWrapper}>
          <Ionicons name="md-create" size={16} color="gray" />
        </View>
        <View style={[styles.iconWrapper, styles.closeIcon]}>
          <Ionicons name="md-close" size={16} color="gray" />
        </View>
      </View>
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Input
          onChangeText={this.onChangeBMI}
          label="BMI"
          keyboardType="numeric"
          value={this.state.BMI}
          placeholder="Placeholder"
        />

        <View style={styles.listContainer}>
          <FlatList
            data={this.state.weights}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          />

        </View>

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
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 40
  },
  listContainer: {
    flex: 1,
    width: '100%'
  },
  weightRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
  },
  weightValue: {
    fontWeight: 'bold',
  },
  weightDate: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center'
  },
  iconWrapper: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    marginLeft: 15,
  }
});
