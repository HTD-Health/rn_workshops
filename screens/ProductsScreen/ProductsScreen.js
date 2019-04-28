import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

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
      <View style={productsStyles.container}>
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductItem item={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

const productsStyles = StyleSheet.create({
  container: {
    backgroundColor: "#D7E8FF",
    flex: 1
  }
});

const ProductItem = ({ item }) => (
  <View style={productStyles.container}>
    <View style={productStyles.textContainer}>
      <Text style={productStyles.name}>{item.name}</Text>
      <Text numberOfLines={3}>{item.description}</Text>
    </View>
    <Image style={productStyles.picture} source={{ uri: item.photo }} />
  </View>
);

const productStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderColor: "gray",
    flexDirection: "row",
    padding: 10,
    borderWidth: 0.2,
    height: 90
  },
  textContainer: {
    flex: 2
  },
  name: {
    fontWeight: "bold"
  },
  picture: {
    flex: 1
  }
});
