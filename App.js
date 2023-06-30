import React, { useState } from "react";
import { FlatList, Text, View, Image } from "react-native";
import styles from "./styles";
import { recipes } from "./data/recipes";
import { SearchBar } from "@rneui/themed";
import store from "./store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from 'react-redux';
import Catalogo from "./views/Catalogo";
import Detalle from "./views/Detalle";
import LoginView from "./views/Login";
import ProfileView from "./views/Profile";
import FavoritesView from "./views/Favoritos"
import CrearRecetaView from "./views/CrearReceta";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Catalogo" component={Catalogo} />
          <Stack.Screen name="Detalle" component={Detalle} />
          <Stack.Screen name="Login" component={LoginView} />
          <Stack.Screen name="Profile" component={ProfileView} />
          <Stack.Screen name="Favorites" component={FavoritesView} />
          <Stack.Screen name="CrearReceta" component={CrearRecetaView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
