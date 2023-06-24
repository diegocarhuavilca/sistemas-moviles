import React from "react";
import { View, TextInput, Button, StyleSheet, Text, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const LoginView = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogin = () => {
    const loggedInUser = { id: 1, name: "John Doe" };
    navigation.navigate("Profile");
    dispatch({ type: "LOGIN", payload: loggedInUser });
  };

  return (
    <View style={styles.container}>
       <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3565/3565418.png",
            }}
            style={styles.profilePicture}
          />
      <TextInput style={styles.input} placeholder="Usuario" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  input: {
    width: "100%",
    height: 40,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  profilePicture: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
});

// Styles...

export default LoginView;
