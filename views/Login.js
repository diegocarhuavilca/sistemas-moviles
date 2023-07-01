import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  Image,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const showAlert = (title,message) => {
    Alert.alert(
      title,
      message,
      [
        {
          text: "OK",
          style: "default",
        },
      ],
      {
        cancelable: false,
        alertContainerStyle: styles.alertContainer,
        titleStyle: styles.alertTitle,
        messageStyle: styles.alertMessage,
      }
    );
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      showAlert("Error","Formato de email invalido");
      return;
    }

    const loggedInUser = { id: 1, email: "test@gmail.com", password: "123" };

    if (email != loggedInUser.email) {
      showAlert("Error","No existe el correo");
      return;
    }

    if (password != loggedInUser.password) {
      showAlert("Error","Contrasena incorrecta");
      return;
    }

    navigation.goBack();
    dispatch({ type: "LOGIN", payload: loggedInUser });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3565/3565418.png",
        }}
        style={styles.profilePicture}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
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
  alertContainer: {
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  alertTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  alertMessage: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default LoginView;
