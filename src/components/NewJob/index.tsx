import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Entypo } from '@expo/vector-icons';

export default function ButtonNew({size, color, focused}: {size: number, color: string, focused: boolean}) {
    return(
        <View style={[styles.container, {backgroundColor: focused ? '#302E4D' :'#605C99' }]}>
            <Entypo name="plus" color={'#FFF'} size={size}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        shadowColor: '#302E4D',
        shadowOffset: {
            width: 0, 
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 10
    }
})