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
  }
});

export default styles;
