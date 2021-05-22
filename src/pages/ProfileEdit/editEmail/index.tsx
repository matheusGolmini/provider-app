import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, Modal} from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

import styles from '../styles';
import stylesGlobal from '../../styles-global'


const ProfileEditEmail = () => {
    const [disableButton, setDisableButton] = useState<boolean>(true);
    const [opacityButton, setOpacityButton] = useState<number>(0.5);
    const[email, setEmail] = useState<string>('');
    const[confirmEmail, setConfirmEmail] = useState<string>('');
    const [visibleModalOne, setVisibleModalOne ] = useState<boolean>(false);
    const [visibleModalTwo, setVisibleModalTwo ] = useState<boolean>(false);

    useEffect(() => {
        if(!!email && !!confirmEmail){
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
        console.log('alterado: ', email);
        setVisibleModalOne(false)
        navigation.navigate('Home')

    }

    function emailEqual(){
        if(email.toLowerCase() === confirmEmail.toLowerCase()){
            setVisibleModalOne(true);
        }else {
            setVisibleModalTwo(true);
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
                        <Image style={styles.logo} source={require('../../../assets/avatar.jpg')} />
                        <Text style={styles.text}>Matheus</Text>
                    </View>
                    <View style={styles.action}>
                        <FontAwesome  name='envelope-o' size={20}/>
                        <TextInput 
                            placeholder='E-mail'
                            placeholderTextColor='#666666'
                            keyboardType='email-address'
                            autoCorrect={false}
                            onChangeText={(val) => setEmail(val)}
                            style={{marginLeft: 20, fontSize: 18}}
                        />

                    </View>
                    <View style={styles.action}>
                        <FontAwesome  name='envelope-o' size={20}/>
                        <TextInput 
                            placeholder='Confirmar E-mail'
                            placeholderTextColor='#666666'
                            keyboardType='email-address'
                            autoCorrect={false}
                            onChangeText={(val) => setConfirmEmail(val)}
                            style={{marginLeft: 20, fontSize: 18}}
                        />

                    </View>

                    
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity 
                            style={{...stylesGlobal.button, opacity: opacityButton}}
                            onPress={emailEqual}
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
                visible={visibleModalOne}
            >
                <View style={styles.modal}>
                    <Text style={styles.title}>Quer realmente alterar seu E-mail?</Text>
                    <View style={styles.buttonArea}>
                        <TouchableOpacity 
                            style={{...styles.buttonModal, marginHorizontal: 10}}
                            onPress={() => alterData()}
                        >
                            <Text style={stylesGlobal.buttonText}>Sim</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.buttonModal}
                            onPress={() => setVisibleModalOne(false) }
                        >
                            <Text style={stylesGlobal.buttonText}>Não</Text>
                        </TouchableOpacity>
                    </View>
    
                </View>
            </Modal>

            <Modal
                animationType='slide'
                transparent={true}
                visible={visibleModalTwo}
            >
                <View style={styles.modal}>
                    <Text style={styles.title}>Os E-mails não estão iguais!</Text>
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
        </>
    )
}



export default ProfileEditEmail;