import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Entypo } from '@expo/vector-icons';

export default function ButtonNew({size, color, focused}: {size: number, color: string, focused: boolean}) {
    return(
        <View style={[styles.container, {backgroundColor: focused ? '#37b7dc' :'#8BE5FF' }]}>
            <Entypo name="plus" color={'#FFF'} size={size}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 4,
        borderColor: '#37b7dc',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    }
})