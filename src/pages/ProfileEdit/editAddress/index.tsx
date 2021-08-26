import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Modal} from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

import styles from '../styles';
import stylesGlobal from '../../styles-global';
import ModalPicker from '../../../components/ModalPicker';
import { states } from '../../../mocks/index'
import { useFormik } from 'formik';
import axios from 'axios';


const ProfileEditAddress = () => {
    const [disableButton, setDisableButton] = useState<boolean>(true);
    const [opacityButton, setOpacityButton] = useState<number>(0.5);
    const[cep, setCep] = useState<string>('');
    const[rua, setRua] = useState<string>('');
    const[complemento, setComplemento] = useState<string>('');
    const[numero, setNumero] = useState<number | null>(null);

    const[isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const[stateSelected, setStateSelected] = useState<string| null>('');

    const formik = useFormik({
        initialValues: {
            logradouro: '',
            bairro: '',
            cidade: '',
            uf: '',
            cep: ''
        },
        validationSchema: {},
        onSubmit: values => {
            console.log(values)
            alterData()
        },
    });

    useEffect( () => {
        onBlurCep()
    }, [formik.values.cep]);

    async function onBlurCep() {
        if(formik.values.cep?.length === 8) {
            const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            console.log(data)
    
            formik.
                setFieldValue('uf', data.uf)
                
            console.log('aqui 1')
            await formik.setFieldValue('logradouro', data.logradouro);
            console.log('aqui 2')
            await formik.setFieldValue('bairro', data.bairro);
            console.log('aqui 3')
            await formik.setFieldValue('bairro', data.bairro);
            await formik.setFieldValue('cidade', data.localidade);
        }
       
    }

    const navigation = useNavigation();

    function alterData(){
        //enviar dados para serem alterados
        console.log('alterar: ', {
            cep,
            rua,
            complemento,
            stateSelected,
            numero
        });
        navigation.navigate('Home')

    }


    return (
        <> 
            <View 
                style={{backgroundColor: '#fff'}}
            >
                <View style={styles.container}>
    
                    <View style={styles.action}>
                        <FontAwesome  name='home' color="#605C99" size={30}/>
                        <TextInput 
                            placeholder='* Cep'
                            placeholderTextColor='#666666'
                            keyboardType='number-pad'
                            autoCorrect={false}
                            onFocus={() => formik.setFieldTouched('confirmEmail')}
                            onChangeText={formik.handleChange('confirmEmail')}
                            style={{marginLeft: 20, fontSize: 18}}
                        />

                    </View>
                    
                    {/* <TouchableOpacity 
                        style={{...styles.action}}
                        onPress={ () => setIsModalVisible(!isModalVisible) }
                    >
                        <FontAwesome  name='home' color="#605C99" size={30}/>
                        <Text style={{color: !!stateSelected? 'black':'#666666', marginLeft: 20, fontSize: 18}}>{!!stateSelected ? stateSelected: '* Selecione um estado'}</Text>
                        <Feather 
                            name='arrow-down' 
                            size={30} 
                            style={{
                                color: '#605C99',
                                paddingHorizontal: 15
                            }}
                        />
                    </TouchableOpacity> */}
                    {
                        console.log('aqui:  ',formik.values)
                    }
                     <View style={styles.action}>
                        <FontAwesome  name='home' color="#605C99" size={30}/>
                        <TextInput 
                            placeholder='* Estado'
                            placeholderTextColor='#666666'
                            value={formik.values.uf}
                            autoCorrect={false}
                            onChangeText={(val) => setRua(val)}
                            style={{marginLeft: 20, fontSize: 18}}
                        />

                    </View>
                    <View style={styles.action}>
                        <FontAwesome  name='home' color="#605C99" size={30}/>
                        <TextInput 
                            placeholder='* Rua'
                            placeholderTextColor='#666666'
                            value={formik.values.logradouro}
                            autoCorrect={false}
                            onChangeText={(val) => setRua(val)}
                            style={{marginLeft: 20, fontSize: 18}}
                        />

                    </View>
                    <View style={styles.action}>
                        <FontAwesome  name='home' color="#605C99" size={30}/>
                        <TextInput 
                            placeholder='* Número'
                            placeholderTextColor='#666666'
                            autoCorrect={false}
                            onChangeText={(val) => setNumero(Number(val))}
                            style={{marginLeft: 20, fontSize: 18}}
                        />

                    </View>

                    <View style={styles.action}>
                        <FontAwesome  name='home' color="#605C99" size={30}/>
                        <TextInput 
                            placeholder='Complemento'
                            placeholderTextColor='#666666'
                            keyboardType='email-address'
                            autoCorrect={false}
                            onChangeText={(val) => setComplemento(val)}
                            style={{marginLeft: 20, fontSize: 18}}
                        />

                    </View>

                    
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity 
                            style={{...stylesGlobal.button, opacity: opacityButton}}
                            onPress={alterData}
                            disabled={disableButton}
                        >
                            <Text style={stylesGlobal.buttonText}>Salvar</Text>
                        </TouchableOpacity>

                    </View>
                    <Modal
                        transparent={true}
                        animationType={'fade'}
                        visible={isModalVisible}
                    >
                        <ModalPicker 
                            setIsModalVisible={setIsModalVisible}
                            setTypeSelected={setStateSelected}
                            data={states}
                        />

                    </Modal>
                    
                </View>
                
                
            </View>
        
        </>
    )
}



export default ProfileEditAddress;