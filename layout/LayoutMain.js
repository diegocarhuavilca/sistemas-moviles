import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

function Layout({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
        <Icon name="star" size={30} color="#2f5378" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Icon name="eye" size={30} color="#2f5378" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} >
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