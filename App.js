import React, { useCallback } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import {
  Splash,
  Onboarding,
  Login,
  Backups,
  Producteurs,
  Productions,
  SuiteProductions,
  RecolteVentes,
  Dashboard,
} from "./screens";
import { useFonts } from "expo-font";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { Image } from "react-native";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    OpenSans_Bold: require("./assets/fonts/OpenSans-Bold.ttf"),
    OpenSans_BoldItalic: require("./assets/fonts/OpenSans-BoldItalic.ttf"),
    OpenSans_ExtraBold: require("./assets/fonts/OpenSans-ExtraBold.ttf"),
    OpenSans_ExtraBoldItalic: require("./assets/fonts/OpenSans-ExtraBoldItalic.ttf"),
    OpenSans_Italic: require("./assets/fonts/OpenSans-Italic.ttf"),
    OpenSans_Light: require("./assets/fonts/OpenSans-Light.ttf"),
    OpenSans_LightItalic: require("./assets/fonts/OpenSans-LightItalic.ttf"),
    OpenSans_Medium: require("./assets/fonts/OpenSans-Medium.ttf"),
    OpenSans_MediumItalic: require("./assets/fonts/OpenSans-MediumItalic.ttf"),
    OpenSans_Regular: require("./assets/fonts/OpenSans-Regular.ttf"),
    OpenSans_SemiBoldItalic: require("./assets/fonts/OpenSans-SemiBoldItalic.ttf"),
    OpenSans_SemiBold: require("./assets/fonts/OpenSans-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={MainStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function MainStackScreen() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 200,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderBottomColor: "#f4f4f4",
                borderBottomWidth: 1,
              }}
            >
              <Image
                source={require("./assets/images/m1.jpg")}
                style={{ height: 130, width: 130, borderRadius: 65 }}
              />
              <Text
                style={{
                  fontSize: 22,
                  marginVertical: 6,
                  fontWeight: "bold",
                  color: "#111",
                }}
              >
                Ouedraogo Bernard
              </Text>
              <Text style={{ fontSize: 16, color: "#111" }}>
                Controleur Interne
              </Text>
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
    >
      <Drawer.Screen
        name="Tableau de bord"
        options={{
          drawerLabel: "Tableau de bord",
          title: "Tableau de bord",
          drawerIcon: () => <Ionicons name="home" size={20} color="#808080" />,
        }}
        component={Dashboard}
      />

      <Drawer.Screen
        name="Producteurs"
        options={{
          drawerLabel: "Producteurs",
          title: "Producteurs",
          drawerIcon: () => <Ionicons name="home" size={20} color="#808080" />,
        }}
        component={Producteurs}
      />

      <Drawer.Screen
        name="Productions"
        options={{
          drawerLabel: "Productions",
          title: "Productions",
          drawerIcon: () => <Ionicons name="home" size={20} color="#808080" />,
        }}
        component={Productions}
      />

      <Drawer.Screen
        name="Suite Productions"
        options={{
          drawerLabel: "Suite Productions",
          title: "Suite de Productions",
          drawerIcon: () => <Ionicons name="home" size={20} color="#808080" />,
        }}
        component={SuiteProductions}
      />

      <Drawer.Screen
        name="Recoltes et Ventes"
        options={{
          drawerLabel: "Recoltes et Ventes",
          title: "Recoltes et Ventes",
          drawerIcon: () => <Ionicons name="home" size={20} color="#808080" />,
        }}
        component={RecolteVentes}
      />

      <Drawer.Screen
        name="Deconnexion"
        options={{
          drawerLabel: "Deconnexion",
          title: "Deconnexion",
          drawerIcon: () => <Ionicons name="home" size={20} color="#808080" />,
        }}
        component={RecolteVentes}
      />
    </Drawer.Navigator>
  );
}

export default App;
