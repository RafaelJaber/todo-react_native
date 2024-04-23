import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { HomeScreen } from "@/screens/HomeScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={"home"} component={HomeScreen} />
    </Navigator>
  );
}
