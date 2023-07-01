import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

const CrearRecetaView = ({navigation}) => {
  const [nombreReceta, setNombreReceta] = useState("");
  const [ingredientes, setIngredientes] = useState([]);
  const [nombreIngrediente, setNombreIngrediente] = useState("");
  const [cantidadIngrediente, setCantidadIngrediente] = useState("");
  const [pasos, setPasos] = useState([]);
  const [paso, setPaso] = useState("");
  const recetas = useSelector((state) => state.recetas);

  const dispatch = useDispatch();

  const agregarIngrediente = () => {
    if (nombreIngrediente.trim() === "" || cantidadIngrediente.trim() === "") {
      return;
    }

    const nuevoIngrediente = {
      nombre: nombreIngrediente,
      cantidad: cantidadIngrediente,
    };

    setIngredientes((prevIngredientes) => [
      ...prevIngredientes,
      nuevoIngrediente,
    ]);
    setNombreIngrediente("");
    setCantidadIngrediente("");
  };

  const agregarPaso = () => {
    if (paso.trim() === "") {
      return;
    }

    setPasos((prevPasos) => [...prevPasos, paso]);
    setPaso("");
  };

  const guardarReceta = () => {
    let ingredientesAux = ingredientes.map(
      (data) => data.nombre + " - " + data.cantidad
    );
    if(!nombreReceta){
      alert("Ingresa el nombre de la receta")
      return
    }
    if(ingredientesAux.length == 0){
      alert("Ingresa algun ingrediente")
      return
    }
    if(pasos.length == 0){
      alert("Ingresa algun paso")
      return
    }

    dispatch({
      type: "AGREGAR_RECETA",
      payload: {
        recipeId: Math.random() * 10000,
        title: nombreReceta,
        ingredients: ingredientesAux,
        description: pasos,
        photosArray: [],
      },
    });
    alert("Receta creada")
    navigation.navigate("Catalogo")
  };

  const renderIngrediente = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>
        {item.nombre} - {item.cantidad}
      </Text>
    </View>
  );

  const renderPaso = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre de la receta"
        value={nombreReceta}
        onChangeText={(text) => setNombreReceta(text)}
      />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Ingredientes</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nombre del ingrediente"
            value={nombreIngrediente}
            onChangeText={(text) => setNombreIngrediente(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Cantidad"
            value={cantidadIngrediente}
            onChangeText={(text) => setCantidadIngrediente(text)}
          />
          <Button title="Agregar ingrediente" onPress={agregarIngrediente} />
        </View>
        <FlatList
          data={ingredientes}
          renderItem={renderIngrediente}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Pasos</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ingrese un paso"
            value={paso}
            onChangeText={(text) => setPaso(text)}
          />
          <Button title="Agregar paso" onPress={agregarPaso} />
        </View>
        <FlatList
          data={pasos}
          renderItem={renderPaso}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <Button title="Guardar receta" onPress={guardarReceta} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  foto: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 5,
    marginBottom: 10,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
  },
});

export default CrearRecetaView;
