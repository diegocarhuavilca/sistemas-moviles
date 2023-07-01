import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 20,
    width:width - 50,
    height: 200,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15,
    margin:10,
    marginLeft: 25,
  },
  photo: {
    width: width - 50,
    height: 150,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  viewContainer : {
  },
  containerFavoritos: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textFavoritos: {
    fontSize: 20,
    fontWeight: "bold",
  },
  loginContainerFavoritos: {
    alignItems: "center",
  },
  messageFavoritos: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: "center",
  },
  buttonFavoritos:{
    backgroundColor: '#FFA500',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  buttonTextFavoritos: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
