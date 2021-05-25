import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Modal } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import ModalPicker from '../../components/ModalPicker';

const NewJob = () => {
    const[name, setName] = useState<string>('');
    // const[typeServices, setTypeServices] = useState<string[]>(['Eletricista', 'Pedreiro', 'Encanador']);
    const[typeSelected, setTypeSelected] = useState<string>('');
    const[isModalVisible, setIsModalVisible] = useState<boolean>(false);

    return(
        <>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.container}>
                    <Image
                        style={{...styles.logo}} 
                        source={{uri: 'https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg'}}
                    />
                    <Text style={{...styles.text, marginTop: 10}}>Adicione um serviço</Text>
                    <View style={styles.input}>
                        <TextInput 
                            style={styles.inputText} 
                            onChangeText={(val) => setName(val)}
                            placeholder='Nome' 
                            placeholderTextColor='#37b7dc'
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput 
                            style={styles.inputText} 
                            onChangeText={(val) => setName(val)}
                            placeholder='Id do cliente' 
                            placeholderTextColor='#37b7dc'
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput 
                            style={styles.inputText} 
                            onChangeText={(val) => setName(val)}
                            placeholder='Descrição curta' 
                            placeholderTextColor='#37b7dc'
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput 
                            style={styles.inputText} 
                            onChangeText={(val) => setName(val)}
                            placeholder='Descrição completa' 
                            placeholderTextColor='#37b7dc'
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput 
                            style={styles.inputText} 
                            onChangeText={(val) => setName(val)}
                            placeholder='Valor' 
                            placeholderTextColor='#37b7dc'
                        />
                    </View>
                    <TouchableOpacity 
                        style={{...styles.buttonPicker, margin: 25}}
                        onPress={ () => setIsModalVisible(!isModalVisible) }
                    >
                        <Text style={styles.buttonTextPicker}>{typeSelected === '' ? 'Selecione o tipo de serviço...' : typeSelected}</Text>
                        <Feather 
                            name='arrow-down' 
                            size={20} 
                            style={{
                                color: 'white',
                                paddingHorizontal: 15
                            }}
                        />
                    </TouchableOpacity>

                    <Modal
                        transparent={true}
                        animationType={'fade'}
                        visible={isModalVisible}
                    >
                        <ModalPicker 
                            setIsModalVisible={setIsModalVisible}
                            setTypeSelected={setTypeSelected}
                        />

                    </Modal>
                    <TouchableOpacity 
                        style={{...styles.button, margin: 25}}
                        onPress={ () => {} }
                    >
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>

               
                </View>
            </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 5,
        marginTop: 20,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#37b7dc'
    },
    inputText: {
        width: '100%',
        backgroundColor: '#FFF',
        height: 50,
        padding: 8,
        fontSize: 16,
        color: '#37b7dc',
        fontWeight: 'bold',
        borderColor: '#37b7dc',
        borderWidth: 5,
        borderRadius: 10,
    },
    input: {
        marginTop: 10,
        width: 300,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#37b7dc',
        borderRadius: 10,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#37b7dc',
        marginTop: 10,
        width: 300,
        height: 60,
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
    }
})

export default NewJob;