import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default Producteurs = () => {
  const data = [
    { id: 1, image: "https://bootdey.com/img/Content/avatar/avatar1.png" },
    { id: 2, image: "https://bootdey.com/img/Content/avatar/avatar6.png" },
    { id: 3, image: "https://bootdey.com/img/Content/avatar/avatar2.png" },
    { id: 4, image: "https://bootdey.com/img/Content/avatar/avatar3.png" },
    { id: 5, image: "https://bootdey.com/img/Content/avatar/avatar4.png" },
    { id: 6, image: "https://bootdey.com/img/Content/avatar/avatar5.png" },
    { id: 7, image: "https://bootdey.com/img/Content/avatar/avatar7.png" },
  ];

  const [users, setUsers] = useState(data);

  showAlert = () => Alert.alert("Alert", "Button pressed ");

  return (
    <FlatList
      enableEmptySections={true}
      data={users}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <View style={styles.box}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.boxContent}>
              <Text style={styles.title}>Ouedraogo Alidou</Text>
              <Text style={styles.description}>
                Village: Boromo, Telephone: 56723973
              </Text>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={[styles.button, styles.view]}
                  onPress={showAlert}
                >
                  <Text>Détail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  box: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "white",
    flexDirection: "row",
  },
  boxContent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    color: "#151515",
  },
  description: {
    fontSize: 15,
    color: "#646464",
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    height: 35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 100,
    marginRight: 5,
    marginTop: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  view: {
    backgroundColor: "#eee",
  },
  profile: {
    backgroundColor: "#1E90FF",
  },
  message: {
    backgroundColor: "#228B22",
  },
});
