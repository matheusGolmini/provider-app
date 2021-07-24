import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground, Modal, ScrollView} from "react-native"
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

import styles from './styles';
import stylesGlobal from '../styles-global'


const ProfileEdit = () => {
    const [image, setImage] = useState<string | null>(null);
    const [disableButton, setDisableButton] = useState<boolean>(true);
    const [opacityButton, setOpacityButton] = useState<number>(0.5);
    const[name, setName] = useState<string>('');
    const[phone, setPhone] = useState<string>('');
    const[cpf, setCpf] = useState<string>('');
    const[bankAccountNumber, setBankAccountNumber] = useState<string>('');
    const[rg, setRg] = useState<string>('');
    const[cnpj, setCnpj] = useState<string>('');
    const [visible, setVisible ] = useState<boolean>(false);

    useEffect(() => {
        if(!!name || !!phone || !! image || !!cpf || !!rg || !!cnpj || !!bankAccountNumber) {
            setDisableButton(false)
            setOpacityButton(1)
        }else {
            setDisableButton(true)
            setOpacityButton(0.5)
        }
    })

    const navigation = useNavigation();

    function navigateBack(){
        navigation.goBack()
    }

    function alterData(){
        //enviar dados para serem alterados
        console.log('dados alterado: ', image, name, phone);
        setVisible(false)
        navigation.navigate('Home')

    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    }

    return (
        <> 
            <ScrollView 
                style={{backgroundColor: '#fff'}}
                showsVerticalScrollIndicator={false}
            >
            <View 
                style={{backgroundColor: '#fff'}}
            >
                <View style={styles.container}>
                
                    <View style={{alignItems: 'center', marginTop: 2}}> 
                        <TouchableOpacity 
                            onPress={ pickImage }
                            
                        >
                            {image === null 
                                ? <ImageBackground style={styles.logo} source={{uri: 'https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg'}} >
                                        <View style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <Icon name="camera"  size={35} color="#FFF" style={styles.camera}/>
                                        </View>
                                </ImageBackground>  
                                : <Image  source={ {uri: image }} style={{...styles.logo,  borderColor: '#4169E1'}}/>
                            }
                        </TouchableOpacity>
                        <Text style={styles.text}>Matheus</Text>
                    </View>
                    <View style={{...styles.action, marginTop: 20}}>
                        <FontAwesome  name='user-o' size={20}/>
                        <TextInput 
                            placeholder='Nome'
                            placeholderTextColor='#666666'
                            autoCorrect={false}
                            onChangeText={(val) => setName(val)}
                            style={{marginLeft: 20, fontSize: 18}}
                        />

                    </View>
                    <View style={{...styles.action, marginTop: 20}}>
                        <FontAwesome  name='user-o' size={20}/>
                        <TextInput 
                            placeholder='CPF'
                            placeholderTextColor='#666666'
                            keyboardType='number-pad'
                            autoCorrect={false}
                            style={{marginLeft: 20, fontSize: 18}}
                            onChangeText={(val) => setCpf(val)}
                        />

                    </View>
                    <View style={{...styles.action, marginTop: 20}}>
                        <FontAwesome  name='user-o' size={20}/>
                        <TextInput 
                            placeholder='CNPJ'
                            placeholderTextColor='#666666'
                            keyboardType='number-pad'
                            autoCorrect={false}
                            style={{marginLeft: 20, fontSize: 18}}
                            onChangeText={(val) => setCnpj(val)}
                        />

                    </View>

                    <View style={{...styles.action, marginTop: 20}}>
                        <FontAwesome  name='user-o' size={20}/>
                        <TextInput 
                            placeholder='RG'
                            placeholderTextColor='#666666'
                            keyboardType='number-pad'
                            autoCorrect={false}
                            style={{marginLeft: 20, fontSize: 18}}
                            onChangeText={(val) => setRg(val)}
                        />

                    </View>

                    <View style={{...styles.action, marginTop: 20}}>
                        <FontAwesome  name='user-o' size={20}/>
                        <TextInput 
                            placeholder='Número da conta bancária'
                            placeholderTextColor='#666666'
                            keyboardType='number-pad'
                            autoCorrect={false}
                            style={{marginLeft: 20, fontSize: 18}}
                            onChangeText={(val) => setBankAccountNumber(val)}
                        />

                    </View>
                    <View style={styles.action}>
                        <FontAwesome  name='phone' size={20}/>
                        <TextInput 
                            placeholder='Telefone'
                            placeholderTextColor='#666666'
                            keyboardType='number-pad'
                            autoCorrect={false}
                            onChangeText={(val) => setPhone(val)}
                            style={{marginLeft: 20, fontSize: 18}}
                        />

                    </View>

                    
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity 
                            style={{...stylesGlobal.button, opacity: opacityButton}}
                            onPress={() => setVisible(true)}
                            disabled={disableButton}
                        >
                            <Text style={stylesGlobal.buttonText}>Salvar</Text>
                        </TouchableOpacity>

                    </View>
                    
                </View>
                
                
            </View>
            
            <Modal
                animationType='slide'
                transparent={true}
                visible={visible}
            >
                <View style={styles.modal}>
                    <Text style={styles.title}>Quer realmente alterar seus dados?</Text>
                    <View style={styles.buttonArea}>
                        <TouchableOpacity 
                            style={{...styles.buttonModal, marginHorizontal: 10}}
                            onPress={() => alterData()}
                        >
                            <Text style={stylesGlobal.buttonText}>Sim</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.buttonModal}
                            onPress={() => setVisible(false) }
                        >
                            <Text style={stylesGlobal.buttonText}>Não</Text>
                        </TouchableOpacity>
                    </View>
    
                </View>
            </Modal>
            </ScrollView>
        </>
    )
}



export default ProfileEdit;