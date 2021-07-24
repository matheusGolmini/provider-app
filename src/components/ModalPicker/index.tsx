import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';


const { height, width } =  Dimensions.get('window');



interface ModalPicker {
    setIsModalVisible:  React.Dispatch<React.SetStateAction<boolean>>;
    setTypeSelected:  React.Dispatch<React.SetStateAction<string | null>>;
    color?: string;
    data: string[]
}

const ModalPicker = ({setIsModalVisible, setTypeSelected, data, color}: ModalPicker) => {

    const onPressItem = (option: string) => {
        setIsModalVisible(false)
        setTypeSelected(option)
    }

    const options = data.map((item, index) => {
        return (
            <TouchableOpacity   
                style={styles.option}
                key={index}
                onPress={() => onPressItem(item)}
            >
                <Text style={{...styles.text, color: color ? color :'#37b7dc'}}>
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
                style={{...styles.modal, width: width- 20, height: height/ 2, borderColor: color ? color : '#37b7dc'}}
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