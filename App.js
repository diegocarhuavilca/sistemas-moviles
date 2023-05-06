import React, { useState } from "react";
import { FlatList, Text, View, Image } from "react-native";
import styles from "./styles";
import { recipes } from "./data/recipes";
import { SearchBar } from "@rneui/themed";

export default function App() {
  const recipesArray = recipes;
  const [search, setSearch] = useState("");

  const [listaRecetas, setListaRecetas] = useState(recipes);

  const updateSearch = (search) => {
    setSearch(search);
    if(search === ''){
      setListaRecetas(recipes);
    }else{
      let recetasAux = listaRecetas.filter(({ title }) => {
        return title.toLowerCase().includes(search.toLowerCase());
      });
      setListaRecetas(recetasAux);
    }
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
        data={listaRecetas}
        renderItem={renderRecipes}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </View>
  );
}
