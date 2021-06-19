import React, { useState } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CreateTicket from '../../components/createTicket';
import Reating from '../../components/Rating';


const Info = () => {
    const [controlPicker, setControlPicker] = useState<boolean>(false);
    return(
        <>
            <View style={styles.container}>
                <Image
                    style={{...styles.logo}} 
                    source={require('../../assets/duvida.jpg')}
                />
                
                <Text style={styles.title}>Informações</Text>

            
            </View>

            <ScrollView
                style={{marginTop: 15}}
                showsVerticalScrollIndicator={false}
            >

           

                <View style={styles.info}>

                
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={styles.subTitle}>Score</Text>
                        <Reating 
                            sizeHeight={40}
                            sizeWidth={40}
                            ratingNumber={5}
                            value={false}
                        />
                    </View>
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                        
                        <Text style={styles.textQuestion}> 1 - Qual a importância de ter um score alto?</Text>
                        <Text style={styles.textReponseQuestion}>Seu perfil será exibido para os clientes com maior frequência!</Text>
                        <Text style={styles.textReponseQuestion}>A cada serviço prestado é cobrado uma taxa, quanto maior o seu score menor a comissão nos serviços.</Text>
                        
                        <Text style={styles.textQuestion}>Porcentagem de cada score:</Text>
                        <ScoreInfo />
                        
                        
                    </View>
                </View>
            </ScrollView>
            <View style={{alignItems: 'center', justifyContent: 'center', marginVertical: 20}}>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => {
                        setControlPicker(!controlPicker);
                    }}
                >
                    <Text style={styles.buttonText}>Ajuda</Text>
                </TouchableOpacity>
                {
                    controlPicker ? 
                    <CreateTicket/>
                    : <></>
                }
            </View>
        </>
    )
}

function ScoreInfo () {
    return (
        <>
            <View style={styles.infoStar}>
                <Reating 
                    sizeHeight={25}
                    sizeWidth={25}
                    ratingNumber={0}
                    value={false}
                />
                <Text style={{fontSize: 18}}> Cobrado 10% por serviço</Text>
            </View>
            <View style={styles.infoStar}>
                <Reating 
                    sizeHeight={25}
                    sizeWidth={25}
                    ratingNumber={1}
                    value={false}
                />
                <Text style={{fontSize: 18}}> Cobrado 9% por serviço</Text>
            </View>
            <View style={styles.infoStar}>
                <Reating 
                    sizeHeight={25}
                    sizeWidth={25}
                    ratingNumber={2}
                    value={false}
                />
                <Text style={{fontSize: 18}}> Cobrado 8% por serviço</Text>
            </View>
            <View style={styles.infoStar}>
                <Reating 
                    sizeHeight={25}
                    sizeWidth={25}
                    ratingNumber={3}
                    value={false}
                />
                <Text style={{fontSize: 18}}> Cobrado 7.5% por serviço</Text>
            </View>
            <View style={styles.infoStar}>
                <Reating 
                    sizeHeight={25}
                    sizeWidth={25}
                    ratingNumber={4}
                    value={false}
                />
                <Text style={{fontSize: 18}}> Cobrado 7% por serviço</Text>
            </View>
            <View style={styles.infoStar}>
                <Reating 
                    sizeHeight={25}
                    sizeWidth={25}
                    ratingNumber={5}
                    value={false}
                />
                <Text style={{fontSize: 18}}> Cobrado 6.5% por serviço</Text>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 5,
        marginTop: 25,
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold'
    },

    info: {
        padding: 24,
        borderRadius: 8,
        marginBottom: 16,
    },

    subTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center'
    },

    textQuestion: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    textReponseQuestion: {
        fontSize: 20,
        padding: 10
    },

    infoStar: {
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexDirection: 'row', 
    },
    button: {
        backgroundColor: '#37b7dc',
        marginTop: 10,
        width: 150,
        height: 40,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default Info;