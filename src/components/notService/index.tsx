import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import image from '../../assets/notService.jpeg'


export default function ReturnImageNotService(props: {text: string}) {
    return (
      <View style={styles.headerNotService}>
        <Text style={styles.textNotService}>{props.text}</Text>
        <Image style={ styles.imageNotService } source={image} />
      </View>
    )
}