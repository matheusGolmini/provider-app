import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, FlatList, Animated, Pressable, Modal, Text, TouchableOpacity, NativeScrollEvent } from 'react-native';
import { IServicesImages } from '../../interfaces/servicesImges';
import CarouselItem from './carouselItem';


const { width, height } = Dimensions.get('window');

interface Carousel {
    services: IServicesImages[];
    setIndex: React.Dispatch<React.SetStateAction<number>>
}

const Carousel = (data: {values: Carousel }) => {
    const [visible, setVisible ] = useState<boolean>(false);
    const [item, setItem ] = useState<IServicesImages>();
    const [activeDot, setActiveDot ] = useState<number | null>(0);

    const {services, setIndex} = data.values;

    function changeDot(nativeEvent:  NativeScrollEvent) {
        const slider = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if(slider !== activeDot) {
            setActiveDot(slider)
            setIndex(slider)
        }
    }

    if (data && services.length) {
        return (
            <View style={{height: 300, backgroundColor: 'white' }}>
               
                <FlatList 
                    data={services}
                    ref = {(flatList) => {flatList = flatList}}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return  ( 
                        
                            <Pressable
                                onLongPress={() => { 
                                    setItem(item)
                                    setVisible(!visible)  
                                }}
                            >
                                <CarouselItem item={{service: item}} />
                                
                            </Pressable>
                           
                            
                        )
                    }}
                    onScroll={({nativeEvent}) => changeDot(nativeEvent)}
                />
                <View style={styles.dotView}>
                    {services.map((__value, k) => (
                        <Text key={k} style={k == activeDot? styles.pagingActiveText :styles.pagingText}>⬤</Text>
                    ))}
                </View>
            </View>
        )
    }
    return null
}

const styles = StyleSheet.create({
    dotView: { 
        flexDirection: 'row', 
        position: 'absolute', 
        bottom: 0, 
        alignSelf: 'center', 
        alignItems: 'center'
    },

    pagingText: {color: '#605C99', margin: 3, opacity: 0.5},

    pagingActiveText: {color: '#302E4D', margin: 3},

    modal: {
        backgroundColor: '#FFF',
        marginTop: height - 200,
        height: 1000,
        width: '100%',
        borderRadius: 20,
        elevation: 10,
        alignItems: 'center',
        borderWidth: 5,
    
    },

    shadow: {
        shadowColor: '#302E4D',
        shadowOffset: {
            width: 0, 
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },

    title: {
        marginTop: 20,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },

    buttonArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20
    },

    buttonModal: {
        backgroundColor: '#4169E1',
        marginTop: 10,
        width: 100,
        height: 40,
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
    },

    buttonPicker: {
        backgroundColor: '#37b7dc',
        marginTop: 10,
        width: 300,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
    },

    buttonTextPicker: {
        padding: 8,
        alignItems: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
})

export default Carousel