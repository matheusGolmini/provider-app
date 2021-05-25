import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';


const { height, width } =  Dimensions.get('window');

const types = ['Eletricista', 'Pedreiro', 'Encanador', 'Encanador1', 'Encanador3', 'Encanador4', 'Encanador5'];

interface ModalPicker {
    setIsModalVisible:  React.Dispatch<React.SetStateAction<boolean>>;
    setTypeSelected:  React.Dispatch<React.SetStateAction<string>>;
}

const ModalPicker = ({setIsModalVisible, setTypeSelected}: ModalPicker) => {

    const onPressItem = (option: string) => {
        setIsModalVisible(false)
        setTypeSelected(option)
    }

    const options = types.map((item, index) => {
        return (
            <TouchableOpacity   
                style={styles.option}
                key={index}
                onPress={() => onPressItem(item)}
            >
                <Text style={styles.text}>
                    {item}
                </Text>

            </TouchableOpacity>
        )
    })

    return(
        <TouchableOpacity
            onPress={() => setIsModalVisible(false)}
            style={styles.container}
        >
            <View
                style={{...styles.modal, width: width- 20, height: height/ 2}}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {options}
                </ScrollView>
            </View>

        </TouchableOpacity>
    )
}

export default ModalPicker;


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
        borderColor: '#37b7dc'
    },

    option: {
        alignItems: 'flex-start'
    },

    text: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#37b7dc'
    }
})