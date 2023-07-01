import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Button
} from "react-native";
import Layout from "../layout/LayoutMain";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch } from "react-redux";

const ProfileView = ({ navigation }) => {
  const dispatch = useDispatch()
  const handleButtonPress = () => {
    dispatch({ type: 'LOGOUT' });
    navigation.navigate("Catalogo")
  };

  const goCrearReceta = () => {
    navigation.navigate("CrearReceta")
  }


  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Icon name="sign-out" size={30} />
        </TouchableOpacity>
      ),
      headerLeft:()=>{
        
      }
    });
  }, [navigation]);

  return (
    <Layout>
      <ScrollView>
        <View style={styles.container}>
        <Button title="Crear receta" onPress={goCrearReceta} />
          <Image
            source={{
              uri: "https://proyecto-topicos-auxjx35m5q-rj.a.run.app/cats",
            }}
            style={styles.profilePicture}
          />
          <Text style={styles.name}>Usuario Prueba</Text>
          <Text style={styles.bio}>Cocinero de casa</Text>
          <View style={styles.infoContainer}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Ciudad</Text>
              <Text style={styles.cardContent}>Lima</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Email</Text>
              <Text style={styles.cardContent}>test@gmail.com</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Cocina Preferida</Text>
              <Text style={styles.cardContent}>Peruana</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Plato Principal</Text>
              <Text style={styles.cardContent}>Lasagna</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Experiencia Cocinando</Text>
              <Text style={styles.cardContent}>5+ years</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 16,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  bio: {
    fontSize: 16,
    marginBottom: 24,
    color: "#666",
  },
  infoContainer: {
    width: "100%",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  cardContent: {
    fontSize: 14,
    color: "#666",
  },
  textoEditar: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
    color: "#333",
  },
  button: {
    marginRight: 10,
  },
});

export default ProfileView;
