import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Colors } from "../../constants";

const ProfileScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://www.bootdey.com/image/900x400/FF7F50/000000",
          }}
          style={styles.coverImage}
        />
        <View style={styles.avatarContainer}>
          <Image
            source={require("../../assets/images/m1.jpg")}
            style={styles.avatar}
          />
          <Text style={[styles.name, styles.textWithShadow]}>
            Ouedraogo Adama
          </Text>
        </View>
        <View style={styles.content}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}> Nom Prénom:</Text>
            <Text style={styles.infoValue}>Ouedraogo Adama</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Sexe:</Text>
            <Text style={styles.infoValue}>Masculin</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Telephone:</Text>
            <Text style={styles.infoValue}>76564534</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Date de naissance:</Text>
            <Text style={styles.infoValue}>19 fevrier 1980</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Age:</Text>
            <Text style={styles.infoValue}>67</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Village:</Text>
            <Text style={styles.infoValue}>Koboraga</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Situation Matrimoniale:</Text>
            <Text style={styles.infoValue}>Marier</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Nombre d'enfant:</Text>
            <Text style={styles.infoValue}>7</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Groupement:</Text>
            <Text style={styles.infoValue}>Agri-Cordaid 1</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Localisation :</Text>
            <Text style={styles.infoValue}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </Text>
          </View>
          <View style={styles.carRow}>
            <TouchableOpacity style={styles.carBtn}>
              <Text style={styles.carTitle}>Commencer une collecte</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  coverImage: {
    height: 200,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "white",
  },
  content: {
    marginTop: 20,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoLabel: {
    fontWeight: "bold",
  },
  infoValue: {
    marginTop: 5,
  },
  carRow: {
    paddingTop: 15,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: -44,
  },
  carBtn: {
    width: 200,
    backgroundColor: Colors.orange_1,
    padding: 12,
    borderRadius: 16,
  },
  carTitle: {
    color: Colors.white,
  },
});

export default ProfileScreen;
