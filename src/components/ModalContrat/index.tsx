import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { text } from '../../mocks/index';


const { height, width } =  Dimensions.get('window');

interface ModalPicker {
    setIsModalVisible:  React.Dispatch<React.SetStateAction<boolean>>;
    setTypeSelected:  React.Dispatch<React.SetStateAction<string | null>>;
}

const ModalContrat = ({setIsModalVisible, setTypeSelected}: ModalPicker) => {
    const [disabled, setDisabled] = useState<boolean>(true);
    const [opacity, setOpacity] = useState<number>(0.5);

    function scroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
        if(event.nativeEvent.contentOffset.y >=  (height/ 2) - 25) {
            setOpacity(1)
            setDisabled(false)
        }else {
            setOpacity(0.5)
            setDisabled(true)
        }
    }

    function contractSign()  {
        console.log("Eu aceito o contrato");
        setIsModalVisible(false)
    }

    return(
        <View style={styles.container}>
            <View
                style={{...styles.modal, width: width- 10, height: height/ 1.5}}
            >   
            <Text style={styles.title}> Leia e Assine </Text>

                <View
                    style={{...styles.contrat, width: width- 30, height: height/ 2}}
                >  
                    <ScrollView
                        onScroll={scroll}
                        scrollEventThrottle={16}
                        showsVerticalScrollIndicator={false}
                    >
                        <Text style={styles.text}>{text}</Text>
                    </ScrollView>
                </View>

                <TouchableOpacity 
                    style={{...styles.button, opacity: opacity}} 
                    disabled={disabled}
                    onPress={() => contractSign()}
                >
                    <Text style={styles.buttonText}> Assinar contrato </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default ModalContrat;


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