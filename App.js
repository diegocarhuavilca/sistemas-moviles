import React, { useState } from "react";
import { FlatList, Text, View, Image } from "react-native";
import styles from "./styles";
import { recipes } from "./data/recipes";
import { SearchBar } from "@rneui/themed";

export default function App() {
  const recipesArray = recipes;
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  const renderRecipes = ({ item }) => (
    <View style={styles.container}>
      <Image style={styles.photo} source={{ uri: item.photo_url }} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.viewContainer}>
      <SearchBar
        placeholder="Buscar receta"
        onChangeText={updateSearch}
        value={search}
        lightTheme={true}
      />
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        data={recipesArray}
        renderItem={renderRecipes}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </View>
  );
}
