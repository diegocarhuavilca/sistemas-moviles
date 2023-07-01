import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import styles from "../styles";
import { SearchBar } from "@rneui/themed";
import Layout from "../layout/LayoutMain";
import { useSelector, useDispatch } from "react-redux";

function FavoritesView({ navigation }) {
  const [search, setSearch] = useState("");

  const favorites = useSelector((state) => state.favorites);
  const user = useSelector((state) => state.user);

  const [listaRecetas, setListaRecetas] = useState(favorites);

  const updateSearch = (search) => {
    setSearch(search);
    if (search === "") {
      setListaRecetas(favorites);
    } else {
      let recetasAux = listaRecetas.filter(({ title }) => {
        return title.toLowerCase().includes(search.toLowerCase());
      });
      setListaRecetas(recetasAux);
    }
  };

  const renderRecipes = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detalle", { item: item })}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <Layout>
      {user ? (
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
            keyExtractor={(item, index) => `${item.recipeId}-${index}`}
          />
        </View>
      ) : (
        <View style={styles.containerFavoritos}>
          <View style={styles.loginContainerFavoritos}>
            <Text style={styles.messageFavoritos}>
              Logeate para poder acceder a tus  favoritos
            </Text>
            <TouchableOpacity
              style={styles.buttonFavoritos}
              onPress={handleLogin}
            >
              <Text style={styles.buttonTextFavoritos}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Layout>
  );
}

export default FavoritesView;
