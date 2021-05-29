import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles =  StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 10,
  },

  container: {
    marginTop: 40,
    marginVertical: (height + 70) - height,
    height: height,
  },

  text: {
    marginTop: 10,
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },

  styleImageButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5
  },

  button: {
    backgroundColor: '#4169E1',
    width: 100,
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginLeft: 30
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  camera:{
    opacity: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 10,
  },
   action: {
     flexDirection: 'row',
     marginTop: 10,
     marginLeft: 20,
     marginBottom: 10,
     borderBottomWidth: 1,
     borderBottomColor: '#F2F2F2',
     paddingBottom: 5,
  },
  //modal

  modal: {
    backgroundColor: '#FFF',
    marginTop: height - 200,
    height: 1000,
    width: '100%',
    borderRadius: 20,
    elevation: 10,
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#4169E1'

  },

  title: {
    marginTop: 20,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },

  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20
  },

  buttonModal: {
    backgroundColor: '#4169E1',
    marginTop: 10,
    width: 100,
    height: 40,
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonPicker: {
    backgroundColor: '#37b7dc',
    marginTop: 10,
    width: 300,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },

  buttonTextPicker: {
    padding: 8,
    alignItems: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default styles;