import React from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native'
import Input from '../../components/Input'
import Button from '../../components/Button'
import WeightRow from '../../components/WeightRow'
import Avatar from '../../components/Avatar'
import RadioButtons from '../../components/RadioButtons'

export default class WeightScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      height: '',
      birthDate: '',
      gender: 'male',
    };
  }

  onChangeName = (value) => {
    this.setState({
      name: value,
    })
  };

  onChangeHeight = (value) => {
    this.setState({
      height: value,
    })
  };

  onChangeBirthDate = (value) => {
    this.setState({
      birthDate: value,
    })
  };

  onRadioButtonPress = (value) => () => {
    console.log("value", value)
    this.setState({ gender: value })
  }

  onPressButton = () => {
    console.log('name', this.state.name);
    console.log('height', this.state.height);
    console.log('birthDate', this.state.birthDate);
  };

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.container}>

          <Avatar />

          <Input
            onChangeText={this.onChangeName}
            label="Name"
            value={this.state.name}
            placeholder="Name"
          />
          <Input
            onChangeText={this.onChangeHeight}
            label="Height"
            keyboardType="numeric"
            value={this.state.height}
            placeholder="Height"
          />
          <Input
            onChangeText={this.onChangeBirthDate}
            label="Birth Date"
            keyboardType="numeric"
            value={this.state.birthDate}
            placeholder="Birth Date"
          />

          <RadioButtons currentValue={this.state.gender} onPress={this.onRadioButtonPress} />

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
