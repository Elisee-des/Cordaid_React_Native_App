import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Colors } from "../../constants";

const Productions = () => {
  const [selectedValue, setSelectedValue] = useState("Saisonnière");

  const handleSubmit = () => {};

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.label}>Type de production</Text>
          <Picker
            style={{ borderColor: Colors.black, borderWidth: 1 }} // Utilisez borderWidth pour définir l'épaisseur de la bordure
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Saisonnière" value="saisonniere" />
            <Picker.Item label="Hors sol" value="hors_sol" />
            <Picker.Item label="Contre saison" value="contre_saison" />
          </Picker>

          <Text style={styles.label}>Bio quantité de semences</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici la quantité"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Bio cout des semences</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Bio quantité de fo</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici la quantité"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Bio cout de fo</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Bio quantité de fertinova</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici la quantité"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Bio cout de fertinova</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Bio quantité d'autres fertilisants</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici la quantité"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Bio cout autres fertilisants</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Bio quantité de pesticide bio</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici la quantité"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Bio cout de pesticide bio</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Bio quantité de farine nem</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici la quantité"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Bio cout de farine nem</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Bio quantité d'huile nem</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici la quantité"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Bio cout d'huile nem</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Bio quantité de fongicide</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici la quantité"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Bio cout de fongicide</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Bio quantité autres produits phyto</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici la quantité"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Bio cout autres produits phyto</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>conv quantité d'uree</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici la quantité"
            secureTextEntry={true}
          />

          <Text style={styles.label}>conv cout d'uree</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>conv quantité npk</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici la quantité"
            secureTextEntry={true}
          />

          <Text style={styles.label}>conv cout npk</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>conv quantité autres fertilisants</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici la quantité"
            secureTextEntry={true}
          />

          <Text style={styles.label}>conv cout autres fertilisants</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>conv cout herbicide</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>conv cout planage sols</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici le cout"
            secureTextEntry={true}
          />

          <Text style={styles.label}>conv cout labour sols</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez ici le cout"
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

export default Productions;
