import React from "react";
import { StatusBar, Text, View } from "react-native";
import { Colors } from "../../constants";

const Dashboard = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.primary} />
      <Text>Tableau de bord</Text>
    </View>
  );
};

export default Dashboard;
