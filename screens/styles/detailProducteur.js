import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    marginHorizontal: 3,
    backgroundColor: "#d3d3d3",
    marginBottom: 30,
  },
  upperRow: {
    // marginHorizontal: 10,
    // flexDirection: "row",
    // justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    // position: "absolute",
    // top: 25,
    // height: 100,
    // width: 100,
    // zIndex: 999,
  },
  details: {
    flex: 3,
    marginTop: 0,
    marginHorizontal: 10,
    backgroundColor: Colors.white,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  titre: {
    // marginHorizontal: 5,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    top: 20,
    height: 52,
  },
  title_1: {
    marginHorizontal: 5,
    // fontFamily:"",
    color: Colors.black,
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default styles;
