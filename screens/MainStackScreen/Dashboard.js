import React, { useState } from "react";
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Card } from "react-native-paper";
import { Colors } from "../../constants";

const Dashboard = ({ navigation }) => {
  const [collectes, setCollectes] = useState([]);

  const options = [
    {
      nom: "Sawadogo",
      prenom: "Dramane",
      telephone: "56889966",
      Localistion: "Dedougou zone 102",
      date: "19/02/2023 9:58 am",
    },
    {
      nom: "Ouedraogo",
      prenom: "Adama",
      telephone: "56889966",
      Localistion: "Saponner zone 2",
      date: "20/02/2023 9:58 am",
    },
    {
      nom: "Ouedraogo",
      prenom: "Blandine",
      telephone: "56889966",
      Localistion: "Zignaré zone 10",
      date: "10/09/2023 9:58 am",
    },
    {
      nom: "Kafando",
      prenom: "Aristide",
      telephone: "56889966",
      Localistion: "Kokologo zone 2",
      date: "18/12/2023 9:58 am",
    },
    {
      nom: "Sawadogo",
      prenom: "Dramane",
      telephone: "56889966",
      Localistion: "Dedougou zone 102",
      date: "19/02/2023 9:58 am",
    },
    {
      nom: "Ouedraogo",
      prenom: "Adama",
      telephone: "56889966",
      Localistion: "Saponner zone 2",
      date: "20/02/2023 9:58 am",
    },
    {
      nom: "Ouedraogo",
      prenom: "Blandine",
      telephone: "56889966",
      Localistion: "Zignaré zone 10",
      date: "10/09/2023 9:58 am",
    },
    {
      nom: "Kafando",
      prenom: "Aristide",
      telephone: "56889966",
      Localistion: "Kokologo zone 2",
      date: "18/12/2023 9:58 am",
    },
    {
      nom: "Sawadogo",
      prenom: "Dramane",
      telephone: "56889966",
      Localistion: "Dedougou zone 102",
      date: "19/02/2023 9:58 am",
    },
    {
      nom: "Ouedraogo",
      prenom: "Adama",
      telephone: "56889966",
      Localistion: "Saponner zone 2",
      date: "20/02/2023 9:58 am",
    },
    {
      nom: "Ouedraogo",
      prenom: "Blandine",
      telephone: "56889966",
      Localistion: "Zignaré zone 10",
      date: "10/09/2023 9:58 am",
    },
    {
      nom: "Kafando",
      prenom: "Aristide",
      telephone: "56889966",
      Localistion: "Kokologo zone 2",
      date: "18/12/2023 9:58 am",
    },
  ];

  function pickOption(selectedCollecte) {
    // const index = collectes.findIndex(Collect => Collect === selectedCollecte)

    if (collectes.includes(selectedCollecte)) {
      setCollectes(collectes.filter((Collect) => Collect !== selectedCollecte));
      return;
    }

    setCollectes([...collectes, selectedCollecte]);
  }

  return (
    <ScrollView style={{ flex: 1, marginBottom: 15 }}>
      <StatusBar barStyle="white-content" backgroundColor={Colors.orange_1} />
      <View style={styles.container}>
        <Card style={{ backgroundColor: "#fff" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Producteurs")}>
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.smallCard}>40</Text>
              <Text style={styles.paragraph}>Producteurs</Text>
            </View>
          </TouchableOpacity>
        </Card>
        <Card style={{ backgroundColor: "#fff" }}>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.smallCard}>18</Text>
              <Text style={styles.paragraph}>Groupements</Text>
            </View>
          </TouchableOpacity>
        </Card>
      </View>

      <View style={styles.container_2}>
        <Text style={styles.titleCollect}>
          Liste des Collectes non synchronisées
        </Text>
        <View>
          {options.map((option, index) => (
            <Card key={index}>
              <View style={styles2.container}>
                <View style={{ alignContent: "center", alignItems: "center" }}>
                  <TouchableOpacity style={styles.checkbox} onPress={() => {}}>
                    <Text style={{ alignSelf: "center" }}>✔</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles2.content}>
                  <View style={styles2.contentHeader}>
                    <Text style={styles2.name}>
                      {option.nom} {option.prenom}
                    </Text>
                  </View>
                  <Text rkType="primary3 mediumLine">
                    <Text style={{ fontWeight: "600" }}>Localisation: </Text>:
                    {option.Localistion}
                  </Text>
                  <Text rkType="primary3 mediumLine">
                    <Text style={{ fontWeight: "600" }}>Telephone: </Text>:
                    {option.telephone}
                  </Text>
                  <Text style={styles2.time}>Date collecte: {option.date}</Text>
                </View>
              </View>
            </Card>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles2 = StyleSheet.create({
  root: {
    backgroundColor: "#ffffff",
    marginTop: 10,
  },
  container: {
    marginTop: 10,
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    justifyContent: "center",
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC",
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 22,
    marginLeft: 20,
  },
  time: {
    fontSize: 11,
    color: "#808080",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

const styles = StyleSheet.create({
  container_2: {
    paddingTop: 50,
    flex: 1,
    marginHorizontal: 10,
  },
  checkbox: {
    width: 25,
    height: 25,
    borderWidth: 3,
    marginRight: 5,
    backgroundColor: Colors.white,
  },
  language: {
    flexDirection: "row",
    marginVertical: 7,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 25,
    backgroundColor: "#ecf0f1",
    marginHorizontal: 10,
  },
  paragraph: {
    fontSize: 17,
    fontWeight: "400",
    textAlign: "center",
    padding: 15,
  },
  smallCard: {
    backgroundColor: Colors.orange_1,
    justifyContent: "center",
    alignItems: "center",
    padding: 23,
    color: Colors.white,
    fontSize: 22,
  },
  titleCollect: {
    paddingVertical: 20,
    fontWeight: "600",
    fontSize: 20,
    backgroundColor: Colors.white,
    alignContent: "flex-start",
    padding: 10,
  },
});
