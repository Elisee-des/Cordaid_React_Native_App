import React from "react";
import { StatusBar } from "react-native";
import { View, Text } from "react-native";
import { Colors } from "../constants";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", flexDirection: "column" }}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.primary} />
      <View
        style={{
          flex: 2,
          backgroundColor: "#fff",
          flexDirection: "column",
          paddingTop: 30,
          paddingHorizontal: "3%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "OpenSans_SemiBold",
              fontSize: 30,
              color: Colors.black,
            }}
          >
            Bienvenu
          </Text>
          {/* <Image
            source={require("../assets/images/waving_hand.png")}
            style={{ width: 30, height: 30 }}
          /> */}
        </View>
        <Text
          style={{
            fontSize: 17,
            paddingTop: 15,
            color: "#777",
          }}
        >
          Sur l'application de collecte de données. Pour continuer, veuillez
          entré vos cordonnées
        </Text>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 80,
          }}
        ></View>

        <View style={{ flexDirection: "column", paddingTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ededed",
              width: "100%",
              borderRadius: 10,
              height: 60,
              paddingLeft: 20,
            }}
          >
            <Icon name="envelope-o" size={22} color="#818181" />
            <TextInput
              style={styles.input}
              placeholder="Entrez votre email"
              placeholderTextColor="#818181"
            />
          </View>
        </View>

        <View style={{ flexDirection: "column", paddingTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ededed",
              width: "100%",
              borderRadius: 10,
              height: 60,
              paddingLeft: 20,
              marginTop: 20,
            }}
          >
            <Icon name="lock" size={22} color="#818181" />
            <TextInput
              style={styles.input}
              placeholder="Entrez votre mot de passe"
              secureTextEntry={true}
              placeholderTextColor="#818181"
            />
          </View>

          <View style={{ width: "100%", marginBottom: 10 }}>
            <Text
              style={{
                fontSize: 17,
                fontFamily: "OpenSans_SemiBold",
                color: "#818181",
                alignSelf: "flex-end",
                paddingTop: 10,
              }}
            >
              Mot de passe oublié?
            </Text>
          </View>
          <View style={{ marginTop: 50, justifyContent: "center" }}>
            <Button
              btn_text={"Connexion"}
              on_press={() => navigation.navigate("Dashboard")}
            />
          </View>
        </View>
      </View>
      {/* 
      <View
        style={{ flex: 2, backgroundColor: "#ddd", flexDirection: "column" }}
      >

      </View> */}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    position: "relative",
    height: "100%",
    width: "90%",
    fontFamily: "OpenSans-Medium",
    paddingLeft: 20,
  },
});
