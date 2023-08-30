import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Colors } from "../../constants";

const RecolteVentes = () => {
  const [selectedValue, setSelectedValue] = useState("option1");

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={{ paddingTop: 10 }}>
            Faite une faite collete d'information des recoltes et des ventes le
            producteur Ouedraogo Dramane
          </Text>

          <Text style={styles.label}>Quantite recoltée</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici la quantité"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Cout recolte</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Cout secouage</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Cout vannage</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Cout transport</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Quantite autoconsommée</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici la quantité"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Quantité vendue ailleurs</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici la quantité"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Prix vente ailleurs</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici le prix"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Quantité vente olvea</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici la quantité"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Prix vente olvea</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici le prix"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Quantité perdue</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici la quantité"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Main d'oeuvre familiale</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici la main d'oeuvre"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Chosir une tranche d'âge</Text>
          <Picker
            style={{ borderColor: Colors.black, borderWidth: 1 }}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Age de 5 17 ans" value="age_5_17_ans" />
            <Picker.Item label="Age de 18 30 ans" value="age_18_30_ans" />
            <Picker.Item label="Age de 31 43 ans" value="age_31_43_ans" />
            <Picker.Item label="Age de 44 56 ans" value="age_44_56_ans" />
            <Picker.Item label="Age de 57 et plus" value="age_57_et_plus" />
          </Picker>

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

export default RecolteVentes;

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
