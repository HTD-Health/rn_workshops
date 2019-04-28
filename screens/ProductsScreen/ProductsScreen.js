import React from "react";
import { Text, View, FlatList } from "react-native";

export default class ProductsScreen extends React.Component {
  state = {
    loading: false,
    products: []
  };

  componentDidMount() {
    this.setState({
      loading: true
    });
    fetch("http://193.70.34.240/rnapi/api/v1/products")
      .then(response => response.json())
      .then(response =>
        this.setState({
          products: response,
          loading: false
        })
      );
  }

  render() {
    const { loading, products } = this.state;

    if (loading) {
      return <Text>Loading</Text>;
    }

    return (
      <View>
        <FlatList
          data={products}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}
