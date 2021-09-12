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
                <Text style={{...styles.text}}>
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
                style={{...styles.modal, width: width- 60, height: height/ 3, borderColor: "#605C99"}}
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
        borderWidth: 2,
        
    },

    option: {
        alignItems: 'center'
    },

    text: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
})