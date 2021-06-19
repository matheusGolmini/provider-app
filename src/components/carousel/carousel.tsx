import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, FlatList, Animated, Pressable, Modal, Text, TouchableOpacity } from 'react-native';
import { IServicesImages } from '../../interfaces/servicesImges';
import CarouselItem from './carouselItem';


const { width, height } = Dimensions.get('window');

interface Carousel {
    services: IServicesImages[];
    color?: string
}

const Carousel = (data: {values: Carousel }) => {
    const [visible, setVisible ] = useState<boolean>(false);
    const [item, setItem ] = useState<IServicesImages>();

    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)

    const {services, color} = data.values;

    function removeImage() {
        setVisible(!visible);
       if(item) {
        const index = services.indexOf(item);
        services.splice(index, 1);
       }
    }

    if (data && services.length) {
        return (
            <View>
                
                <FlatList data={services}
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
                                <CarouselItem item={{service: item, color: color ? color : 'black'}} />
                            </Pressable>
                        )
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        {useNativeDriver: false}
                    )}
                />

                <View style={styles.dotView}>
                    {services.map((_: IServicesImages, i: number) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={i}
                                style={{ opacity, height: 10, width: 10, backgroundColor: color, margin: 8, borderRadius: 5 }}
                            />
                        )
                    })}
                </View>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={visible}
                >
                    <View style={{...styles.modal, borderColor: color}}>
                        <Text style={{...styles.title , color: color}}>Quer realmente remover essa imagem?</Text>
                        <View style={styles.buttonArea}>
                            <TouchableOpacity 
                                style={{...styles.buttonModal, marginHorizontal: 10, backgroundColor: color}}
                                onPress={removeImage}
                            >
                                <Text style={styles.buttonText}>Sim</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={{...styles.buttonModal,  backgroundColor: color}}
                                onPress={() => setVisible(!visible) }
                            >
                                <Text style={styles.buttonText}>Não</Text>
                            </TouchableOpacity>
                        </View>
        
                    </View>
                </Modal>
            </View>
        )
    }
    return null
}

const styles = StyleSheet.create({
    dotView: { flexDirection: 'row', justifyContent: 'center' },

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