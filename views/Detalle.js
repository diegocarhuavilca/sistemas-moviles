import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Swiper from "react-native-swiper";
import Layout from "../layout/LayoutMain";

function DetailsScreen({ navigation, route }) {
  const { item } = route.params;

  const handleButtonPress = () => {
    // Handle button press action
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Icon name="star" size={30} color="gold" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <Layout>
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: item.photo_url }} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.heading}>Ingredients:</Text>
          {item.ingredients.map((ingredient, index) => (
            <Text
              key={index}
              style={styles.listItem}
            >{`\u2022 ${ingredient}`}</Text>
          ))}
          <View style={styles.containerCarousel}>
            <Text style={styles.heading}>Recetas Acabadas:</Text>
            <Swiper showsPagination={true} loop={true}>
              {item.photosArray.map((photo) => (
                <View key={photo} style={styles.slide}>
                  <Image source={{ uri: photo }} style={styles.imageCarousel} />
                </View>
              ))}
            </Swiper>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 4,
  },
  slide: {
    height: "100%",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  imageCarousel: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 8,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
  },
  containerCarousel: {
    height: 400,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginEnd: 10,
  },
});

export default DetailsScreen;
