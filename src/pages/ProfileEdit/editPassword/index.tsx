import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, Modal} from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

import styles from '../styles';
import stylesGlobal from '../../styles-global';
import { Ionicons } from '@expo/vector-icons';


const ProfileEditPassword = () => {
    const [disableButton, setDisableButton] = useState<boolean>(true);
    const [opacityButton, setOpacityButton] = useState<number>(0.5);
    const[password, setPassword] = useState<string>('');
    const[confirmPassword, setConfirmPassword] = useState<string>('');
    const [visibleModalOne, setVisibleModalOne ] = useState<boolean>(false);
    const [visibleModalTwo, setVisibleModalTwo ] = useState<boolean>(false);
    const[hidePass, setHidePass] = useState<boolean>(true)
    const[hidePassTwo, setHidePassTwo] = useState<boolean>(true)

    useEffect(() => {
        if(!!password && !!confirmPassword){
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
        console.log('alterado: ', password);
        setVisibleModalOne(false)
        navigation.navigate('Home')

    }

    function emailEqual(){
        if(password.toLowerCase() === confirmPassword.toLowerCase()){
            setVisibleModalOne(true);
        }else {
            setVisibleModalTwo(true);
            setHidePass(false);
            setHidePassTwo(false);
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
                        <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                            {
                                hidePass? 
                                    <Ionicons name="eye" color="black" size={25}/>
                                :
                                    <Ionicons name="eye-off" color="black" size={25}/>
                            }
                        
                        </TouchableOpacity> 
                        <TextInput 
                            placeholder='Senha'
                            placeholderTextColor='#666666'
                            autoCorrect={false}
                            secureTextEntry={hidePass} 
                            onChangeText={(val) => setPassword(val)}
                            style={{marginLeft: 20, fontSize: 18}}
                        />

                    </View>
                    <View style={styles.action}>
                        <TouchableOpacity onPress={() => setHidePassTwo(!hidePassTwo)}>
                            {
                                hidePassTwo? 
                                    <Ionicons name="eye" color="black" size={25}/>
                                :
                                    <Ionicons name="eye-off" color="black" size={25}/>
                            }
                        </ TouchableOpacity >
                        <TextInput 
                            placeholder='Confirmar Senha'
                            placeholderTextColor='#666666'
                            autoCorrect={false}
                            secureTextEntry={hidePassTwo} 
                            onChangeText={(val) => setConfirmPassword(val)}
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
                    <Text style={styles.title}>Quer realmente alterar sua senha ?</Text>
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
                    <Text style={styles.title}>As senhas não estão iguais!</Text>
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



export default ProfileEditPassword;