import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import stylesGlobal from '../styles-global';
import { Ionicons } from '@expo/vector-icons';

const Login = () => {
    const [password, setPassword] = useState('');
    const[email, setEmail] = useState('');
    const[hidePass, setHidePass] = useState<boolean>(true)
    const navigation = useNavigation();


    function navigateToHome() {
        navigation.navigate('Home');
    }

    function navigateToRegister(){
        navigation.navigate('Register');
    }

    async function login() {
        try {
            navigateToHome()
        } catch (error) {
            alert('Deu ruim')
        }
    }


    return (
        <View style={stylesGlobal.container}>
            <Image style={stylesGlobal.logo} source={require('../../assets/logo.jpg')}/>
            <Text style={ stylesGlobal.headerText }>Reparo Rápido</Text>

            <TextInput 
                keyboardType= 'email-address'
                style={stylesGlobal.input} 
                onChangeText={(val) => setEmail(val)}
                placeholder='Digite seu E-mail'
                placeholderTextColor='#FFF'
            />
           <View style={stylesGlobal.inputAreaPassword}>
                <TextInput 
                    style={stylesGlobal.inputPass} 
                    secureTextEntry={hidePass} 
                    onChangeText={(val) => setPassword(val)}
                    placeholder='Senha'
                    placeholderTextColor='#FFF'
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
            <View style={{marginTop: 20}}> 
                <TouchableOpacity 
                    style={stylesGlobal.button}
                    onPress={login}
                >
                    <Text style={stylesGlobal.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesGlobal.textClick}
                    onPress={navigateToRegister}
                >
                    <Text style={styles.buttonText}>Inscreva-se!</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#4169E1',
        fontSize: 18,
        fontWeight: 'bold',
    },
})

export default Login;