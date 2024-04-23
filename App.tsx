import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { ActivityIndicator, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import { Routes } from "@/Routes";
import theme from "@/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_700Bold, Inter_400Regular });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      {fontsLoaded ? <Routes /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
