import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Button from "../../components/Button";
import Input from "../../components/Input";
import WeightRow from "../../components/WeightRow";

export default class WeightScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      BMI: "90",
      weights: [
        {
          id: 1,
          value: "90",
          date: "12.08.2017",
        },
        {
          id: 2,
          value: "86",
          date: "12.08.2016",
        },
      ],
    };
  }

  onChangeBMI = value => {
    this.setState({
      BMI: value,
    });
  };

  onPressButton = () => {
    this.props.navigation.navigate("AddWeightScreen");
  };

  keyExtractor = item => {
    return `${item.id}`;
  };

  onEditItem = id => {
    console.log(`Edit ${id}`);
  };

  onRemoveItem = id => {
    console.log(`Remove ${id}`);
  };

  renderItem = ({ item }) => {
    return (
      <WeightRow
        value={item.value}
        date={item.date}
        onEdit={() => this.props.navigation.navigate("AddWeightScreen", item)}
        onRemove={() => this.onRemoveItem(item.id)}
      />
    );
  };

  render() {
    return (
      <View style={styles.mainView}>
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

          <Button onPress={this.onPressButton} text="ADD WEIGHT" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 40,
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
