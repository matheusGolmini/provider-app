import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';



const { height, width } =  Dimensions.get('window');

interface ModalAddress {
    setIsModalAddressVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalAddress = ({setIsModalAddressVisible}: ModalAddress) => {
    const navigation = useNavigation();

    function goTo(screenName: string) {
        setIsModalAddressVisible(false)
        navigation.navigate(screenName);
    }

    return(
        <View style={styles.container}>
            <View
                style={{...styles.modal, width: width- 10, height: height/ 5}}
            >   
                <Text style={styles.title}> Adicione seu endereço</Text>

                <TouchableOpacity 
                    style={{...styles.button}}
                    onPress={() => goTo('ProfileEditAddress')}
                >
                    <Text style={styles.buttonText}> Cadastrar endereço </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default ModalAddress;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    modal : {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#37b7dc',
        alignItems: 'center'
    },

    option: {
        alignItems: 'center'
    },

    title: {
        margin: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#37b7dc',
    },

    text: {
        margin: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#37b7dc',
    },

    contrat: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#37b7dc',
    },

    contratText: {
        margin: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },

    button: {
        backgroundColor: '#37b7dc',
        borderRadius: 8,
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#37b7dc',
        marginVertical: 5
    },

    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})