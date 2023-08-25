import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import styles from "./styles/sphash";

const Sphash = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("Onboarding");
  }, 6000);
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/cordaid.png")}
        style={{ width: 240, height: 80 }}
      />
    </View>
  );
};

export default Sphash;
