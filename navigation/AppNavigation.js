import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
} from "react-navigation";
import AddWeightScreen from "../screens/AddWeightScreen/AddWeightScreen";
import ProductScreen from "../screens/ProductsScreen/ProductsScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import WeightScreen from "../screens/WeightScreen/WeightScreen";
import { Ionicons } from "@expo/vector-icons";

const getPlatformIcon = Platform.OS === "ios" ? "ios-" : "md-";

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
      if (state && state.params && state.params.adding) {
        return {
          title: "Add Weight",
        };
      }

      return {
        title: "Edit Weight",
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
  tabBarIcon: ({ focused }) => (
    <Ionicons
      color={focused ? "lightblue" : "lightgrey"}
      size={25}
      name={getPlatformIcon + "person"}
    />
  ),
};

WeightStack.navigationOptions = {
  tabBarLabel: "Weight",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      color={focused ? "lightblue" : "lightgrey"}
      size={25}
      name={getPlatformIcon + "menu"}
    />
  ),
};

ProductsStack.navigationOptions = {
  tabBarLabel: "Products",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      color={focused ? "lightblue" : "lightgrey"}
      size={25}
      name={getPlatformIcon + "images"}
    />
  ),
};

export default createBottomTabNavigator({
  WeightStack,
  ProfileStack,
  ProductsStack,
});
