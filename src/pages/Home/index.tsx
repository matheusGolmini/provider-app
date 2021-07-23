import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Image, Text, Modal, TouchableOpacity, Dimensions } from 'react-native';
import ServicesPieChart from '../../components/Graphics/servicesPieChart';
import MonthlyBarChart from '../../components/Graphics/monthlyBarChart';
import Reating from '../../components/Rating';
import { getUserMock, UserService } from '../../mocks';
import { isSaveAddress } from '../../mocks/index'
import ModalAddress from '../../components/ModalAddress';



const Home = () => {
    const [visibleModalTwo, setVisibleModalTwo ] = useState<boolean>(false);
    const [userService, setUserService ] = useState<UserService | undefined>(undefined);
    const [isModalAddressVisible, setIsModalAddressVisible] = useState<boolean>(false);

    useEffect(() => {
        setUserService(getUserMock())
        setIsModalAddressVisible(isSaveAddress ? false : true)
    }, [])

    return(
        !!userService 
        ?
        <>

            <View style={{...styles.container, marginVertical: 20}}>
                <Image
                    style={{...styles.logo}} 
                    source={{uri: userService?.image}}
                />
                <Text style={{...styles.text, marginTop: 15}}>{userService?.name}</Text>
                <Reating value={false} sizeHeight={40} sizeWidth={40} ratingNumber={userService?.ratingNumber}/>
                {
                    userService.services.length === 0 
                    ?   
                        <TouchableOpacity 
                            onPress={ () => setVisibleModalTwo(true) }
                        >
                            <Image
                                style={{...styles.logo, width: 250, height: 250}} 
                                source={require('../../assets/int.jpg')}
                            />
                        </TouchableOpacity>

                    : 
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                        >
                            <MonthlyBarChart isText={true} dataValues={userService.monthValue}/>
                            <View style={{marginTop: 50}}/>
                            <ServicesPieChart isText={true} dataValue={userService.services}/> 
                        </ScrollView>
                }    
                <Modal
                    visible={isModalAddressVisible}
                >
                    <ModalAddress
                        setIsModalAddressVisible={setIsModalAddressVisible}
                    />
                </Modal>   
            </View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={visibleModalTwo}
            >
                
                <View style={styles.modal}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{...styles.TextModal, marginTop: 15}}>{'Matheus '}</Text>
                            <Text style={styles.TextModal}>{'Ao concluir seu primeiro serviço'}</Text>
                            <Text style={styles.TextModal}>{'será exibidos gráficos'}</Text>
                            <Text style={styles.TextModal}>{'como esses'}</Text>
                        </View>
                            
                        <View style={{marginTop: 50}}/>
                            <ServicesPieChart defaultSize={300} isText={false}/> 
                            <MonthlyBarChart defaultSize={300} isText={false}/>

                            <View style={styles.buttonArea}>
                            
                        </View>

                        <View style={{alignItems: 'center', justifyContent: 'center', marginVertical: 20}}>
                            <TouchableOpacity 
                                style={styles.buttonModal}
                                onPress={() => setVisibleModalTwo(false) }
                            >
                                <Text style={styles.buttonText}>Entendi</Text>
                            </TouchableOpacity>
                        
                        </View>
                    </ScrollView>
        
                </View>
                
            </Modal>
        </>
        : <Text> </ Text>
    )
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#37b7dc'
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 5,
        marginTop: 20,
    },

    button: {
        backgroundColor: '#8BE5FF',
        marginTop: 10,
        width: 300,
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
    },

    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        marginTop: height - 500,
        width: '100%',
        borderRadius: 5,
        elevation: 10,
        borderWidth: 5,
        borderColor: '#37b7dc'
    
    },
    
    title: {
        marginTop: 20,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    TextModal: {
        fontSize: 20,
        color: '#37b7dc',
        fontWeight: 'bold'
    },
    
    buttonArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20
    },
    
    buttonModal: {
        backgroundColor: '#37b7dc',
        width: 100,
        height: 40,
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
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

export default Home;