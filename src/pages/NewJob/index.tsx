import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Modal } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import ModalPicker from '../../components/ModalPicker';
import ComponentDateTimePicker from '../../components/DateTimePicker';
import { types } from '../../mocks/index';
import ModalCreateNewService from '../../components/ModalCreateNewService';

const NewJob = () => {
    const[emailClient, setEmailClient] = useState<string>('');
    const[sortDescription, setSortDescription] = useState<string>('');
    const[description, setDescription] = useState<string>('');
    const[serviceDaysNumber, setServiceDaysNumber] = useState<string>('');
    const[serviceValue, setServiceValue] = useState<string>('');
    // const[typeServices, setTypeServices] = useState<string[]>(['Eletricista', 'Pedreiro', 'Encanador']);
    const[typeSelected, setTypeSelected] = useState<string>('');
    const[isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const[isModalFinishiVisible, setIsModalFinishiVisible] = useState<boolean>(false);

    //calendar
    const [initDate, setInitDate] = useState<string | null>(null);
    const [endDate, setEndDate] = useState<string | null>(null);
 
    //buttonControl
    const [disableButton, setDisableButton] = useState<boolean>(true);
    const [opacityButton, setOpacityButton] = useState<number>(); 

    useEffect(() => {
        if(
            !!emailClient && 
            !!sortDescription && 
            !!description &&
            !!serviceDaysNumber && 
            !!serviceValue && 
            !!initDate &&
            !!endDate
        ) {
            setDisableButton(false)
            setOpacityButton(1)
        } else {
            setDisableButton(true)
            setOpacityButton(0.5)
        }
    }, [emailClient, sortDescription, description, serviceDaysNumber, serviceValue, initDate, endDate])

    function saveNewService() {
        console.log(
            {
                "emailClient": emailClient ,
                "sortDescription": sortDescription,
                "description": description,
                "serviceDaysNumber": serviceDaysNumber,
                "serviceValue": serviceValue,
                "initDate": initDate,
                "endDate": endDate,
                "typeSelected": typeSelected
            }
            
        );
        setIsModalFinishiVisible(!isModalFinishiVisible)
        clearState()

    }

    function clearState() {
        setEmailClient('');
        setSortDescription('');
        setDescription('');
        setTypeSelected('');
        setServiceDaysNumber('');
        setServiceValue('');
        setInitDate(null);
        setEndDate(null);
    }

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
                            value={emailClient}
                            keyboardType={'email-address'}
                            onChangeText={(val) => setEmailClient(val)}
                            placeholder='E-mail do cliente' 
                            placeholderTextColor='#37b7dc'
                        />
                    </View>


                    <View style={styles.input}>
                        <TextInput 
                            style={styles.inputText} 
                            onChangeText={(val) => setSortDescription(val)}
                            placeholder='Descrição curta' 
                            value={sortDescription}
                            placeholderTextColor='#37b7dc'
                        />
                    </View>

                    <View style={styles.input}>
                        <TextInput 
                            style={styles.inputText} 
                            onChangeText={(val) => setDescription(val)}
                            placeholder='Descrição completa' 
                            value={description}
                            placeholderTextColor='#37b7dc'
                        />
                    </View>
               
                    <View style={styles.input}>
                        <TextInput 
                            style={styles.inputText} 
                            keyboardType={'number-pad'}
                            onChangeText={(val) => setServiceDaysNumber(val)}
                            value={serviceDaysNumber}
                            placeholder='Quantidade estimada de dias' 
                            placeholderTextColor='#37b7dc'
                        />
                    </View>


                    <View style={styles.input}>
                        <TextInput 
                            style={styles.inputText} 
                            keyboardType={'number-pad'}
                            onChangeText={(val) => setServiceValue(val)}
                            value={serviceValue}
                            placeholder='Valor do serviço' 
                            placeholderTextColor='#37b7dc'
                        />
                    </View>

                    <ComponentDateTimePicker 
                        endDate={endDate}
                        initDate={initDate}
                        setEndDate={setEndDate}
                        setInitDate={setInitDate}
                    />
                 
                    {/* Pode ser usada em um feature futura*/}
                    {/* <TouchableOpacity 
                        style={{...styles.buttonPicker}}
                        onPress={ () => setIsModalVisible(!isModalVisible) }
                    >
                        <Text style={styles.buttonTextPicker}>{typeSelected === '' ? 'Selecione o tipo de serviço' : typeSelected}</Text>
                        <Feather 
                            name='arrow-down' 
                            size={20} 
                            style={{
                                color: 'white',
                                paddingHorizontal: 15
                            }}
                        />
                    </TouchableOpacity> */}

                    <Modal
                        transparent={true}
                        animationType={'fade'}
                        visible={isModalVisible}
                    >
                        <ModalPicker 
                            setIsModalVisible={setIsModalVisible}
                            setTypeSelected={setTypeSelected}
                            data={types}
                        />

                    </Modal>

                    <TouchableOpacity 
                        style={{...styles.button, marginBottom: 30, marginTop: 10}}
                        disabled={disableButton}
                        onPress={ saveNewService }
                    >
                        <Text style={{...styles.buttonText, opacity: opacityButton}}>Cadastrar</Text>
                    </TouchableOpacity>

                    <Modal
                        transparent={true}
                        animationType={'fade'}
                        visible={isModalFinishiVisible}
                    >
                        <ModalCreateNewService 
                            setIsModalVisible={setIsModalFinishiVisible}
                        />
                    </Modal>
                    
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
    textInfo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#37b7dc',
        marginHorizontal: 5
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