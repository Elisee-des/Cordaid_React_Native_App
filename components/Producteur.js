import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles/producteur";

const Producteur = ({ nom, prenom }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {nom} {prenom}
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Producteur;
