import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector } from 'react-redux';

function Layout({ children }) {
  const navigation = useNavigation();
  const user = useSelector(state => state.user)
  const validateRoute = () => {
    if(!user){
      navigation.navigate("Login")
    }else{
      navigation.navigate("Profile")
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate("Favorites")}>
        <Icon name="star" size={30} color="#2f5378" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Catalogo")}>
        <Icon name="home" size={30} color="#2f5378" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={validateRoute}>
          <Icon name="user" size={30} color="#2f5378" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  footer: {
    height: 90,
    backgroundColor: '#C7D5DC',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Layout;