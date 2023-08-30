import React from "react";
import { StatusBar, Text, View } from "react-native";
import { Colors } from "../../constants";

const ProductionsHome = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.primary} />
      <Text>Productions Home</Text>
    </View>
  );
};

export default ProductionsHome;
