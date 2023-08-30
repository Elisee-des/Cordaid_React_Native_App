import React from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Colors } from "../../constants";

const SuiteProductions = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={{ paddingTop: 10 }}>
            Faite une faite de prodution pour le producteur Ouedraogo Dramane
          </Text>
          <Text style={styles.label}>Bio quantité de semences</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici la quantité"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Cout semis en ligne</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Cout demarage</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Cout repiquage</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Cout premier sarclage</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Cout second sarclage</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Cout troisieme sarclage</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez le cout "
            secureTextEntry={true}
          />

          <Text style={styles.label}>Cout epandage engais</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Cout traitement phyto</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Nombre de parcelles</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez le cout"
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSubmit()}
          >
            <Text style={styles.buttonText}>Terminer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SuiteProductions;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
    paddingBottom: 30,
  },
  select: {
    width: "100%",
  },
  form: {
    width: "90%",
  },
  label: {
    marginTop: 20,
    marginBottom: 5,
  },
  input: {
    borderColor: "#ccc",
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    backgroundColor: Colors.orange_1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  avatarContainer: {
    marginTop: 10,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
