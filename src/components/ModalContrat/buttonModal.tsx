import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { Feather } from '@expo/vector-icons';
import ModalContrat from '.';

const ButtonContrat = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [signedContract, setSignedContract] = useState<boolean>(false);

  return(
    <>
      <TouchableOpacity
        style={{
          ...styles.button,
          padding: 5,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        onPress={() => setIsModalVisible(!isModalVisible)}
        disabled={signedContract}
      >
        <Text style={{ ...styles.buttonText, color: "white" }}>
          {" "}
          {signedContract ? "Contrato assindo" : "Assinar contrato"}{" "}
        </Text>
        <Feather
          name="check"
          color="white"
          size={30}
          style={{
            marginHorizontal: 20,
            opacity: signedContract ? 1 : 0.5,
          }}
        />
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType={"fade"}
        visible={isModalVisible}
      >
        <ModalContrat
          setIsModalVisible={setIsModalVisible}
          setSignedContract={setSignedContract}
        />
      </Modal>
        
    </>
  )
}

export default ButtonContrat;


const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#605C99',
    height: 30
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})