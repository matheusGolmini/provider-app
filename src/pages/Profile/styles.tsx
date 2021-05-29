import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles =  StyleSheet.create({
  logo: {
    width: 130,
    height: 130,
    borderRadius: 100,
    borderWidth: 5,
    marginTop: 10,
  },

  container: {
    flex: 1
  },

  userInfoSection: {
    marginBottom: 25,
    paddingHorizontal: 30
  },

  row: {
    flexDirection: 'row',
    fontWeight: 'bold',
    marginTop: 10
  },

  infoBoxWrapper: {
    borderBottomColor: '#4169E1',
    borderBottomWidth: 3,
    borderTopColor: '#4169E1',
    borderTopWidth: 3,
    flexDirection: 'row',
    height: 100,
  },
  
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },

  menuItemText: {
    color: '#696969',
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 26,
  },

  text: {
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#696969'
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
});

export default styles;