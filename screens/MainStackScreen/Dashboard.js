import React from "react";
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import { Colors } from "../../constants";
import { useState } from "react";

const Dashboard = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.orange_1} />
      <View style={styles.container}>
        <Card style={{ backgroundColor: "#fff" }}>
          <TouchableOpacity>
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
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 25,
    backgroundColor: "#ecf0f1",
    marginHorizontal: 10,
  },
  paragraph: {
    fontSize: 15,
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
  },
});
