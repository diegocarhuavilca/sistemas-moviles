import React, { useState } from "react";
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "../styles";
import { SearchBar } from "@rneui/themed";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../layout/LayoutMain";
import { useEffect } from "react";

function Catalogo({ navigation }) {
  const [search, setSearch] = useState("");

  const recetas = useSelector((state) => state.recetas);

  const [listaRecetas, setListaRecetas] = useState(recetas);

  useEffect(()=>{
    setListaRecetas(recetas)
  },[recetas])

  const updateSearch = (search) => {
    setSearch(search);
    if (search === "") {
      setListaRecetas(recipes);
    } else {
      let recetasAux = listaRecetas.filter(({ title }) => {
        return title.toLowerCase().includes(search.toLowerCase());
      });
      setListaRecetas(recetasAux);
    }
  };

  const renderRecipes = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Detalle",{item: item})}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Layout>
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
    </Layout>
 
  );
}

export default Catalogo;
