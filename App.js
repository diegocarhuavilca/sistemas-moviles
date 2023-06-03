import React, { useState } from "react";
import { FlatList, Text, View, Image } from "react-native";
import styles from "./styles";
import { recipes } from "./data/recipes";
import { SearchBar } from "@rneui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Catalogo from "./views/Catalogo";
import Detalle from "./views/Detalle";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Catalogo" component={Catalogo} />
        <Stack.Screen name="Detalle" component={Detalle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
