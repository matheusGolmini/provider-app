import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';


const { height, width } =  Dimensions.get('window');

interface ModalPicker {
    setIsModalVisible:  React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalConfirmRegister = ({setIsModalVisible}: ModalPicker) => {
    const navigation = useNavigation();

    function confirmRegister()  {
        setIsModalVisible(false)
        navigation.navigate('Login');
    }

    return(
        <View style={styles.container}>
            <View
                style={{...styles.modal, width: width- 10, height: 200, alignItems: 'center',}}
            >   
                <Text style={{...styles.title, padding: 10}}> Seus dados foram salvos. Nossa equipe vai entrar em contato pelo e-mail. </Text>
                <TouchableOpacity 
                    style={{...styles.button,  marginTop: 20}} 
                    onPress={() => confirmRegister()}
                >
                    <Text style={{...styles.buttonText}}> Entendi </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default ModalConfirmRegister;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    
    modal : {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#4169E1',
        alignItems: 'center'
    },

    option: {
        alignItems: 'center'
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#4169E1',
    },

    text: {
        margin: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4169E1',
    },

    contrat: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#4169E1',
    },

    contratText: {
        margin: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },

    button: {
        backgroundColor: '#4169E1',
        borderRadius: 8,
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#4169E1',
        marginVertical: 5
    },

    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})