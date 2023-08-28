import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 42,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "space-between",
  },

  name: {
    flex: 1,
    fontsize: 16,
    marginLeft: 16,
    color: "#fff",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    flexDirection: "column",
    backgroundColor: "#31cf67",
    // backgroundColor: "#e23c44",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
