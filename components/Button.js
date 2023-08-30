import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Colors } from "../constants";

const Button = ({ on_press, btn_text }) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        width: "95%",
        backgroundColor: Colors.orange_1,
        height: 50,
        marginBottom: 30,
        borderRadius: 10,
      }}
      onPress={on_press}
    >
      <Text
        style={{
          fontSize: 15,
          letterSpacing: 1.5,
          textAlign: "center",
          position: "relative",
          color: Colors.white,
        }}
      >
        {btn_text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
