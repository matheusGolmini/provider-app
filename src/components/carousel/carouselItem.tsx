import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { IServicesImages } from '../../interfaces/servicesImges';

const { width, height } = Dimensions.get('window');

interface CarouselItem {
    service: IServicesImages;
    color: string;
}

const CarouselItem = (data: {item: CarouselItem }) => {
    const  { service, color } = data.item
    return (
        <View style={styles.cardView}>
            <Image style={{...styles.image, borderColor: color}} source={{ uri: service.url }} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width - 20,
        height: height / 3,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    image: {
        width: width - 20,
        height: height / 3,
        borderRadius: 10,
        borderWidth: 7
    }
})

export default CarouselItem