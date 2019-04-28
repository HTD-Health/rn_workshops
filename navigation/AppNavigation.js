import {
  createStackNavigator,
  createBottomTabNavigator,
} from "react-navigation";
import AddWeightScreen from "../screens/AddWeightScreen/AddWeightScreen";
import ProductScreen from "../screens/ProductsScreen/ProductsScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
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
    navigationOptions: props => {
      const { state } = props.navigation;
      if (state && state.params) {
        return {
          title: "Edit Weight",
        };
      }

      return {
        title: "Add Weight",
      };
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

const ProfileStack = createStackNavigator({
  WeightScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      title: "Profil",
      tabBarLabel: "Profile",
    },
  },
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
};

WeightStack.navigationOptions = {
  tabBarLabel: "Weight",
};

ProductsStack.navigationOptions = {
  tabBarLabel: "Products",
};

export default createBottomTabNavigator({
  WeightStack,
  ProfileStack,
  ProductsStack,
});
