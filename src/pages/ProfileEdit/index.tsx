import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground, Modal} from "react-native"
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Feather } from '@expo/vector-icons';
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
    const [visible, setVisible ] = useState<boolean>(false);

    useEffect(() => {
        if(!!name || !!phone || !! image){
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
            <View 
                style={{backgroundColor: '#fff'}}
            >
                <View style={styles.container}>
                    <TouchableOpacity 
                        onPress={ navigateBack }
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <Feather 
                            name='arrow-left' 
                            size={20} 
                            style={{
                                color: 'black',
                                paddingHorizontal: 10
                            }}
                        
                        />
                        <Text style={{color:'#666666', fontSize: 12}}>Voltar</Text>
                    </TouchableOpacity>
                
                    <View style={{alignItems: 'center', marginTop: 2}}> 
                        <TouchableOpacity 
                            onPress={ pickImage }
                        >
                            
                            {image === null 
                                ? <ImageBackground style={styles.logo} source={require('../../assets/avatar.jpg')}>
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
        </>
    )
}



export default ProfileEdit;