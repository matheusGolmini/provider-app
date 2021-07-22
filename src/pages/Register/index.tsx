import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Image, StyleSheet, ImageBackground, Modal, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import stylesGlobal from '../styles-global';
import { useNavigation } from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Feather } from '@expo/vector-icons';
import ModalPicker from '../../components/ModalPicker';
import { types } from '../../mocks/index';
import ModalConfirmRegister from '../../components/ModalConfirmRegister';

const Register = () => {
    const navigation = useNavigation();

    const [image, setImage] = useState<string | null>(null);
    const [imageDocument, setImageDocument] = useState<string | null>(null);
    const[name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const[email, setEmail] = useState<string>('');
    const[phone, setPhone] = useState<string>('');
    const[cpf, setCpf] = useState<string>('');
    const[bankAccountNumber, setBankAccountNumber] = useState<string>('');
    const[rg, setRg] = useState<string>('');
    const[cnpj, setCnpj] = useState<string>('');
    const [conPassword, setConPassword] = useState<string>('');
    const[conEmail, setConEmail] = useState<string>('');
    const[hidePass, setHidePass] = useState<boolean>(true);
    const[hideConPass, setHideConPass] = useState<boolean>(true);
    const [disableButton, setDisableButton] = useState<boolean>(true);
    const [opacityButton, setOpacityButton] = useState<number>(0.5);
    const [visibleModalTwo, setVisibleModalTwo ] = useState<boolean>(false);
    const [messageModal, setMessageModal ] = useState<string>('');

    const[typeSelected, setTypeSelected] = useState<string>('');
    const[isModalVisible, setIsModalVisible] = useState<boolean>(false);


    const[isModalVisibleRegister, setIsModalVisibleRegister] = useState<boolean>(false);


    useEffect(() => {
        if(!!name && !!phone && !!conPassword && !!password && !!conEmail && !!email && !!cpf && !!imageDocument && !!cnpj && !!rg && !!typeSelected && !!bankAccountNumber) {
            setDisableButton(false)
            setOpacityButton(1)
        }else {
            setDisableButton(true)
            setOpacityButton(0.5)
        }
    })

    const pickImage = async (type: string) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            type === 'imagePerfil' 
                ? setImage(result.uri)
                : setImageDocument(result.uri)
        }
    };

    async function register () {
        const data = ({
            email: email.toLowerCase(),
            password,
            name,

            image_uri: image,
            sign_in_date: new Date(),
            is_admin: false
        });
        try {
            console.log(data);
          
        
        } catch (error) {
            alert('Deu ruim');
        }
    };

    function emailAndPasswordEqual(){
        if(email.toLowerCase() === conEmail.toLowerCase()){
            if(password === conPassword) {
                console.log("aqui")
                setIsModalVisibleRegister(!isModalVisibleRegister)
                register();
            } else {
                setMessageModal('As senhas não estão iguais!')
                setVisibleModalTwo(true);
            }
        }else {
            setMessageModal('Os E-mails não estão iguais!')
            setVisibleModalTwo(true);
        }
    }

    return (
        <>
            <ScrollView 
                style={{backgroundColor: '#fff'}}
                showsVerticalScrollIndicator={false}
            >
                <View style={stylesGlobal.container}>
                    <TouchableOpacity 
                        onPress={ () => pickImage('imagePerfil') }
                    >
                        {image === null 
                            ? <ImageBackground 
                                style={{...stylesGlobal.logo, marginTop: 20, width: 200, height: 200}} 
                                source={require('../../assets/avatar.jpg')}
                            >
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Icon name="camera"  size={35} color="#FFF" style={styles.camera}/>
                                </View>  
                            </ImageBackground >
                            : <Image  source={ {uri: image }} style={{...stylesGlobal.logo,  marginTop: 20, width: 170, height: 170}}/>
                        }
                    </TouchableOpacity>
                    <Text style={{...stylesGlobal.headerText, marginTop: 30}}>Reparo Rápido</Text>
                    <View style={stylesGlobal.input}>
                        <TextInput 
                            style={stylesGlobal.inputText} 
                            onChangeText={(val) => setName(val)}
                            placeholder='Nome' 
                            placeholderTextColor='#605C99'
                        />
                    </View>
                    <View style={stylesGlobal.input}>
                        <TextInput 
                            placeholder='CPF'
                            placeholderTextColor='#605C99'
                            keyboardType='number-pad'
                            autoCorrect={false}
                            style={stylesGlobal.inputText}
                            onChangeText={(val) => setCpf(val)}
                        />

                    </View>
                    <View style={stylesGlobal.input}>
                        <TextInput 
                            placeholder='CNPJ'
                            placeholderTextColor='#605C99'
                            keyboardType='number-pad'
                            autoCorrect={false}
                            style={stylesGlobal.inputText}
                            onChangeText={(val) => setCnpj(val)}
                        />

                    </View>

                    <View style={stylesGlobal.input}>
                        <TextInput 
                            placeholder='RG'
                            placeholderTextColor='#605C99'
                            keyboardType='number-pad'
                            autoCorrect={false}
                            style={stylesGlobal.inputText}
                            onChangeText={(val) => setRg(val)}
                        />

                    </View>

                    {/* <View style={stylesGlobal.input}>
                        <TextInput 
                            placeholder='Número da conta bancária'
                            placeholderTextColor='#605C99'
                            keyboardType='number-pad'
                            autoCorrect={false}
                            style={stylesGlobal.inputText}
                            onChangeText={(val) => setBankAccountNumber(val)}
                        />

                    </View> */}

                    
                    <View style={stylesGlobal.input}>
                        <TextInput 
                            placeholder='Telefone'
                            placeholderTextColor='#605C99'
                            keyboardType='number-pad'
                            autoCorrect={false}
                            style={stylesGlobal.inputText}
                            onChangeText={(val) => setPhone(val)}
                        />

                    </View>

                    <TouchableOpacity 
                        style={{...styles.buttonDocument}}
                        onPress={ () => pickImage('imageDocument') }
                    >
                        <Text style={{...styles.buttonDocumentText, opacity: !!imageDocument ? 1 : 0.5,}}>{!!imageDocument ? 'Documento adicionado' : 'Adicione um documento'}</Text>
                        <Feather 
                            name='check' 
                            color='white' 
                            size={30}
                            style={{
                                marginHorizontal: 20,
                                opacity: !!imageDocument ? 1 : 0.5,
                            }}
                        />
                    </TouchableOpacity>
                
                    <View style={stylesGlobal.input}>
                        <TextInput 
                            keyboardType= 'email-address'
                            style={stylesGlobal.inputText} 
                            onChangeText={(val) => setEmail(val)}
                            placeholder='E-mail' 
                            placeholderTextColor='#605C99'
                        />
                    </View>

                    <View style={stylesGlobal.input}>
                        <TextInput 
                            keyboardType= 'email-address'
                            style={stylesGlobal.inputText} 
                            onChangeText={(val) => setConEmail(val)}
                            placeholder='Confirmação de e-mail'
                            placeholderTextColor='#605C99'
                        /> 
                    </View>
                    
                    
                <View style={stylesGlobal.inputAreaPassword}>
                        <TextInput 
                            style={stylesGlobal.inputPass} 
                            secureTextEntry={hidePass} 
                            onChangeText={(val) => setPassword(val)}
                            placeholder='Senha'
                            placeholderTextColor='#605C99'
                        />
                        <TouchableOpacity style={stylesGlobal.iconEye} onPress={() => setHidePass(!hidePass)}>
                            {
                                hidePass? 
                                    <Ionicons name="eye" color="#FFF" size={25}/>
                                :
                                    <Ionicons name="eye-off" color="#FFF" size={25}/>
                            }
                            
                        </TouchableOpacity>
                    </View>
                    <View style={stylesGlobal.inputAreaPassword}>
                        <TextInput 
                            style={stylesGlobal.inputPass} 
                            secureTextEntry={hideConPass} 
                            onChangeText={(val) => setConPassword(val)}
                            placeholder='Confirmação de senha'
                            placeholderTextColor='#605C99'
                        />
                        <TouchableOpacity style={stylesGlobal.iconEye} onPress={() => setHideConPass(!hideConPass)}>
                            {
                                hideConPass? 
                                    <Ionicons name="eye" color="#FFF" size={25}/>
                                :
                                    <Ionicons name="eye-off" color="#FFF" size={25}/>
                            }
                            
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity 
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
                    </TouchableOpacity>

                    <Modal
                        transparent={true}
                        animationType={'fade'}
                        visible={isModalVisible}
                    >
                        <ModalPicker 
                            setIsModalVisible={setIsModalVisible}
                            setTypeSelected={setTypeSelected}
                            data={types}
                            color={'#302E4D'}
                        />

                    </Modal>
            
                    <TouchableOpacity 
                        style={{...stylesGlobal.button, margin: 25, opacity: opacityButton}}
                        onPress={ emailAndPasswordEqual }
                        disabled={disableButton}
                    >
                        <Text style={stylesGlobal.buttonText}>Pré-cadastro</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView> 

            <Modal
                animationType='slide'
                transparent={true}
                visible={visibleModalTwo}
            >
                <View style={styles.modal}>
                    <Text style={styles.title}>{messageModal}</Text>
                    <View style={styles.buttonArea}>
                        <TouchableOpacity 
                            style={styles.buttonModal}
                            onPress={() => setVisibleModalTwo(false) }
                        >
                            <Text style={stylesGlobal.buttonText}>Ajustar</Text>
                        </TouchableOpacity>
                    </View>
    
                </View>
            </Modal>
            <Modal
                transparent={true}
                animationType={'fade'}
                visible={isModalVisibleRegister}
            >
                <ModalConfirmRegister 
                    setIsModalVisible={setIsModalVisibleRegister}
                />

            </Modal>
           
        </>
    )
}


const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    camera:{
        opacity: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 10,
    },
    modal: {
        backgroundColor: '#FFF',
        marginTop: height - 200,
        height: 1000,
        width: '100%',
        borderRadius: 20,
        elevation: 10,
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#302E4D'
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
        backgroundColor: '#302E4D',
        marginTop: 10,
        width: 100,
        height: 40,
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonDocument: {
        backgroundColor: '#302E4D',
        marginTop: 10,
        width: 300,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
    },
    buttonDocumentText: {
        padding: 8,
        alignItems: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonPicker: {
        backgroundColor: '#302E4D',
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

export default Register;