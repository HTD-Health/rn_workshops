import { createStackNavigator } from "react-navigation";
import AddWeightScreen from "../screens/AddWeightScreen/AddWeightScreen";
import ProductScreen from "../screens/ProductsScreen/ProductsScreen";
import WeightScreen from "../screens/WeightScreen/WeightScreen";

const WeightStack = createStackNavigator({
  WeightScreen: {
    screen: WeightScreen,
    navigationOptions: {
      title: "Weights",
    },
  },
  AddWeightScreen: {
    screen: AddWeightScreen,
    navigationOptions: {
      title: "Add Weight",
    },
  },
});

const ProductsStack = createStackNavigator({
  WeightScreen: {
    screen: ProductScreen,
    navigationOptions: {
      title: "Products",
    },
  },
});

export default WeightStack;
