import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';


const { height, width } =  Dimensions.get('window');

interface Modal {
    setIsModalVisible:  React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCreateNewService = ({setIsModalVisible}: Modal) => {
    const navigation = useNavigation();

    function contractSign()  {
        setIsModalVisible(false)
        navigation.navigate('Home')
    }

    return(
        <View style={styles.container}>
            <View
                style={{...styles.modal, width: width- 10, height: height/ 3, alignItems: 'center',}}
            >   
                <Text style={styles.title}> Serviço criado! </Text>
                <Text style={styles.text}> Será enviado para análise assim que for pago pelo cliente irá aparecer na sua tela de serviços! </Text>

                <TouchableOpacity 
                    style={{...styles.button}} 
                    onPress={() => contractSign()}
                >
                    <Text style={styles.buttonText}> OK </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default ModalCreateNewService;


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

    title: {
        marginTop: 20,
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

    button: {
        backgroundColor: '#37b7dc',
        borderRadius: 8,
        alignItems: 'center',
        height: 35,
        width: 60,
        justifyContent: 'center',
        marginTop: 15,
    },

    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})