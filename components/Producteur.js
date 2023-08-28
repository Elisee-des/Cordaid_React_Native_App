import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles/producteur";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
const Producteur = ({ nom, prenom }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.box}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.boxContent}>
        <Text style={styles.title}>
          {nom} {prenom}
        </Text>
        <Text style={styles.description}>Téléphone : {telephone}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.button, styles.view]}
            onPress={showAlert}
          >
            <Image
              style={styles.icon}
              source={{
                uri: "https://img.icons8.com/color/70/000000/filled-like.png",
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.profile]}
            onPress={showAlert}
          >
            <Image
              style={styles.icon}
              source={{
                uri: "https://img.icons8.com/color/70/000000/cottage.png",
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.message]}
            onPress={showAlert}
          >
            <Image
              style={styles.icon}
              source={{
                uri: "https://img.icons8.com/color/70/000000/plus.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Producteur;
