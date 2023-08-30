import React from "react";
import { Text, View } from "react-native";
import {
  Splash,
  Onboarding,
  Login,
  Backups,
  Producteurs,
  Productions,
  RecolteVentes,
  Dashboard,
  SuiteProductions,
  ProductionsHome,
  SuiteProductionsHome,
  DetailProducteur,
} from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "../constants";
import { Ionicons } from "@expo/vector-icons";

const Tap = createBottomTabNavigator();

// const screenOptions = {
//   tabBarShowLabel: false,
//   tabBarHideOnKeyBoard: true,
//   headerShown: false,
//   tabBarStyle: {
//     position: "absolute",
//     bottom: 0,
//     right: 0,
//     left: 0,
//     elevation: 0,
//     height: 50,
//   },
// };

const BottonTabNavigation = () => {
  return (
    <Tap.Navigator>
      <Tap.Screen
        name="Producteurs"
        component={Producteurs}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? Colors?.primary : Colors?.grey}
              />
            );
          },
        }}
      />
      <Tap.Screen
        name="Search"
        component={ProductionsHome}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={"search-sharp"}
                size={24}
                color={focused ? Colors?.primary : Colors?.grey}
              />
            );
          },
        }}
      />
      <Tap.Screen
        name="Profile"
        component={SuiteProductionsHome}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={focused ? Colors?.primary : Colors?.gray2}
              />
            );
          },
        }}
      />
    </Tap.Navigator>
  );
};

export default BottonTabNavigation;
