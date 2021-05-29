import React, { useState } from 'react';
import { Modal, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles'; 
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { IDetailService } from '../../interfaces/detailService ';

function submit(message: string, type: string, service?: IDetailService) {
    if (message) {
        console.log(service);
        console.log('OK!');
        return true
        //navegar para serviços
    }
    else { 
        console.log('Inválido!');
    }
};

interface PropsComponent {
    service?: IDetailService
}

export default function CreateTicket({service}: PropsComponent) {
    const [type, setType] = useState('question');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const navigation = useNavigation();
    return (
        <>
        {
            !service ?
            <Modal
            animationType='slide'
            transparent={false}
            >
                <View style={{margin: 20}}>
                    {
                        !submitted ?
                        <>
                            <Text style={styles.subheader}>Como podemos te ajudar?</Text>
                            <Picker
                                style={styles.picker}
                                selectedValue={type}
                                onValueChange={currentType => setType(currentType)}>
                                <Picker.Item label="Dúvida" value="question" />
                                <Picker.Item label="Problemas com um serviço" value="problem" />
                                <Picker.Item label="Feedback e sugestões" value="feedback" />
                                <Picker.Item label="Outro" value="other" />
                            </Picker>
                            <TextInput style={styles.textInput}
                            value={message}
                            onChangeText={currentMessage => setMessage(currentMessage)}
                            multiline
                            numberOfLines={15}
                            placeholder="Escreva sua mensagem de forma detalhada aqui." />
                            <TouchableOpacity 
                                style={{...styles.tasksButton2, backgroundColor: 'black', borderColor: 'black', opacity: message === '' ? 0.5 : 1}}
                                disabled={message === ''}
                                onPress={() => {
                                    if (submit(message, type)) {
                                        setSubmitted(true);
                                        setMessage('');
                                    }
                                }}
                            >
                                <Text style={{...styles.buttonText, color: 'white'}}>Enviar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                    style={{...styles.tasksButton2, backgroundColor: 'black', borderColor: 'black'}}
                                    onPress={() => {
                                        navigation.navigate('Home');;
                                    }}
                                >
                                <Text style={{...styles.buttonText, color: 'white'}}>Voltar</Text>
                            </TouchableOpacity>
                        </>
                        :
                        <>
                            <Text style={styles.subheader}>Seu ticket foi criado! Você será contatado em breve.</Text>
                            <TouchableOpacity 
                                    style={{...styles.tasksButton2, backgroundColor: 'black', borderColor: 'black'}}
                                    onPress={() => {
                                        navigation.navigate('Home');;
                                    }}
                                >
                                <Text style={{...styles.buttonText, color: 'white'}}>Voltar</Text>
                            </TouchableOpacity>
                        </>
                    }
                </View>
            </Modal>
            :
            <>
            {
                !submitted ?
                <>
                    <Text style={styles.subheader}>Como podemos te ajudar?</Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={type}
                        onValueChange={currentType => setType(currentType)}>
                        <Picker.Item label="Dúvida" value="question" />
                        <Picker.Item label="Problemas com um serviço" value="problem" />
                        <Picker.Item label="Feedback e sugestões" value="feedback" />
                        <Picker.Item label="Outro" value="other" />
                    </Picker>
                    <TextInput style={{...styles.textInput, borderColor: service ? service.color : 'black'}}
                    value={message}
                    onChangeText={currentMessage => setMessage(currentMessage)}
                    multiline
                    numberOfLines={15}
                    placeholder="Escreva sua mensagem de forma detalhada aqui." />
                    {
                        service ? 
                        <Text style={styles.subheader}>Esse ticket está relacionado ao serviço de código {service.id}</Text>
                        : <></>
                    }
                    <TouchableOpacity 
                        style={{...styles.tasksButton2, backgroundColor: service ? service.color : 'black', borderColor: service ? service.color : 'black', opacity: message === '' ? 0.5 : 1}}
                        disabled={message === ''}
                        onPress={() => {
                            if (submit(message, type, service)) {
                                setSubmitted(true);
                                setMessage('');
                            }
                        }}
                    >
                        <Text style={{...styles.buttonText, color: 'white'}}>Enviar</Text>
                    </TouchableOpacity>
                </>
                :
                <Text style={styles.subheader}>Seu ticket foi criado! Você será contatado em breve.</Text>
            }
        </>    
        }
        </>
    );
}