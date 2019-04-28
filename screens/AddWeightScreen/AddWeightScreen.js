import { Platform } from "expo-core";

import React from "react";
import {
  StyleSheet,
  View,
  DatePickerIOS,
  DatePickerAndroid,
  AsyncStorage,
} from "react-native";

import Button from "../../components/Button";

import Input from "../../components/Input";

export default class AddWeightScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getDate(props);
  }

  saveNewWeights =  async (weight, date) => {
    const weights = this.props.navigation.getParam('weights', [])
    weights.push({
      id: new Date().valueOf(),
      value: weight,
      date,
    })
    const stringifiedWeights = JSON.stringify(weights)
    try {
      await AsyncStorage.setItem('root', stringifiedWeights)
      const updateWeightScreenFunction = this.props.navigation.getParam('update', () => {})
      updateWeightScreenFunction()
    } catch(err) {
      console.error('err', err)
    }
  }

  getDate = props => {
    const { state } = props.navigation;
    if (state && state.params) {
      return {
        weight: state.params.value || '90',
        date: state.params.date || new Date(),
      };
    }
    return {
      weight: "90",
      date: new Date(),
    };
  };

  handleOpenDatePicker = () => {
    DatePickerAndroid.open({
      date: this.state.date,
    }).then(({ action, year, month, day }) => {
      if (DatePickerAndroid.dismissedAction !== action) {
        const date = new Date(year, month, day);
        this.onChangeDate(date);
      }
    });
  };

  onChangeWeight = value => {
    this.setState({
      weight: value,
    });
  };

  onChangeDate = value => {
    this.setState({
      date: value,
    });
  };

  onPressButton = () => {
    const { weight, date } = this.state
    this.saveNewWeights(weight, date)
    this.props.navigation.goBack()
  };

  render() {
    console.log("params", this.props.navigation.state.params);
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
            value={this.state.date.toLocaleDateString()}
            placeholder="Date"
            editable={false}
          />
          {Platform.OS === "android" && (
            <Button onPress={this.handleOpenDatePicker} text="SET DATE" />
          )}
          {Platform.OS === "ios" && (
            <DatePickerIOS
              mode="date"
              style={styles.datePickerIos}
              date={this.state.date}
              onDateChange={this.onChangeDate}
            />
          )}
          <Button onPress={this.onPressButton} text="SAVE" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 40,
  },
  datePickerIos: {
    width: "100%",
  },
  listContainer: {
    flex: 1,
    width: "100%",
    marginTop: 20,
  },
  mainView: {
    flex: 1,
    backgroundColor: "#D7E8FF",
  },
});
