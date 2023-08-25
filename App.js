import React, { useCallback } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Splash, Onboarding, Login } from "./screens";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
