import React from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import styles from "../styles/producteurs";
import Producteur from "../../components/Producteur";
const Producteurs = () => {
  const producteurs = [
    { nom: "Sawadogo ", prenom: "Alassane" },
    { nom: "Ouedraogo ", prenom: "Aziz" },
    { nom: "Kabore ", prenom: "Bernard" },
    { nom: "Trare ", prenom: "Daniela" },
    { nom: "Kafando ", prenom: "Alexandra" },
    { nom: "Zongo ", prenom: "Elena" },
    { nom: "Bicaba ", prenom: "Marcel" },
    { nom: "Trare ", prenom: "Daniela" },
    { nom: "Kafando ", prenom: "Alexandra" },
    { nom: "Zongo ", prenom: "Elena" },
    { nom: "Bicaba ", prenom: "Marcel" },
    { nom: "Trare ", prenom: "Daniela" },
    { nom: "Kafando ", prenom: "Alexandra" },
    { nom: "Zongo ", prenom: "Elena" },
    { nom: "Bicaba ", prenom: "Marcel" },
    { nom: "Trare ", prenom: "Daniela" },
    { nom: "Kafando ", prenom: "Alexandra" },
    { nom: "Zongo ", prenom: "Elena" },
  ];

  return (
    <View style={style.container}>
      {/* <Text style={styles.eventName}>Check List Evento</Text> */}

      <Text style={styles.eventDate}>Liste des Producteurs</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Entre le nom ou prenom a rechercher"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={producteurs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Producteur nom={item.nom} prenom={item.prenom} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Aucun producteur pour le moment.
          </Text>
        )}
      />
    </View>
  );
};

export default Producteurs;

import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 3,
    backgroundColor: "#fff",
    padding: 10,
    paddingTop: 10,
    // alignItems: "center",
    justifyContent: "center",
  },
});
