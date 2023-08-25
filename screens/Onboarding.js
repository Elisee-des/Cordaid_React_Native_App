import React from "react";
import { View, Text } from "react-native";
import { Colors } from "../constants";
import { StatusBar } from "react-native";
import { ImageBackground } from "react-native";
import Button from "../components/Button";

const Onboarding = ({ navigation }) => {
  return (
    <View style={{ flex: 3, backgroundColor: Colors.white }}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.primary} />
      <View
        style={{ flex: 3, flexDirection: "column", backgroundColor: "#ddd" }}
      >
        <ImageBackground
          source={require("../assets/images/handshake.png")}
          style={{
            flex: 1,
            width: "100%",
            backgroundColor: Colors.white,
            height: "100%",
          }}
        />
      </View>

      <View style={{ flex: 2, backgroundColor: Colors.white }}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: Colors.white,
          }}
        >
          <Text
            style={{
              color: Colors.black,
              fontSize: 30,
            }}
          >
            Cordaid
          </Text>
          <Text
            style={{
              maxWidth: "50%",
              color: "#999",
              fontSize: 14,
              textAlign: "center",
              paddingTop: 10,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button
            on_press={() => navigation.navigate("Login")}
            btn_text="Get Started"
          />
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
