import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

import styles from '../styles';
import stylesGlobal from '../../styles-global';
import { Ionicons } from '@expo/vector-icons';

import { useFormik } from 'formik';
import { passwordForm } from './password.form';


const ProfileEditPassword = () => {
    const[hidePass, setHidePass] = useState<boolean>(true)
    const[hidePassTwo, setHidePassTwo] = useState<boolean>(true)

    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: '',
            disabledButton: true
        },
        validationSchema: passwordForm,
        onSubmit: values => {
            console.log(values)
            alterData()
        },
    });

   

    const navigation = useNavigation();

    function alterData() {
        //enviar dados para serem alterados
        console.log('alterado: ', formik.values.password);
        navigation.navigate('Home')

    }

    return (
        <> 
            <View 
                style={{backgroundColor: '#fff'}}
            >
                <View style={styles.container}>
                    <View style={{...styles.action, borderBottomColor: formik.touched.password && formik.errors.password ? 'red' :'#F2F2F2'}}>
                        <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                            {
                                hidePass? 
                                    <Ionicons 
                                        name="eye" 
                                        color={formik.touched.password && formik.errors.password ? 'red' :'#605C99'} 
                                        size={25}
                                    />
                                :
                                    <Ionicons 
                                        name="eye-off" 
                                        color={formik.touched.password && formik.errors.password ? 'red' :'#605C99'} 
                                        size={25}
                                    />
                            }
                        
                        </TouchableOpacity> 
                        <TextInput 
                            placeholder='Senha'
                            placeholderTextColor='#666666'
                            autoCorrect={false}
                            secureTextEntry={hidePass} 
                            onFocus={() => formik.setFieldTouched('password')}
                            onChangeText={formik.handleChange('password')}
                            style={{marginLeft: 20, fontSize: 18}}
                        />

                    </View>

                    {
                        formik.touched.password && formik.errors.password ?
                        <View
                            style={{
                                alignItems: 'flex-start'
                            }}
                        >
                            <Text testID="error-password" style={
                                {
                                    color: "white", 
                                    backgroundColor: "red",
                                    fontSize: 16,
                                    marginHorizontal: 20,
                                    padding: 2,
                                    borderRadius: 3,
                                }
                            }>
                                {formik.errors.password}
                            </ Text>
                        </View>
                        : null
                    }
                    <View style={{...styles.action, borderBottomColor: formik.touched.confirmPassword && formik.errors.confirmPassword ? 'red' :'#F2F2F2'}}>
                        <TouchableOpacity onPress={() => setHidePassTwo(!hidePassTwo)}>
                            {
                                hidePassTwo? 
                                    <Ionicons 
                                        name="eye" 
                                        color={formik.touched.confirmPassword && formik.errors.confirmPassword ? 'red' :'#605C99'} 
                                        size={25}
                                    />
                                :
                                    <Ionicons 
                                        name="eye-off" 
                                        color={formik.touched.confirmPassword && formik.errors.confirmPassword ? 'red' :'#605C99'} 
                                        size={25}
                                    />
                            }
                        </ TouchableOpacity >
                        <TextInput 
                            placeholder='Confirmar Senha'
                            placeholderTextColor='#666666'
                            autoCorrect={false}
                            secureTextEntry={hidePassTwo} 
                            onFocus={() => formik.setFieldTouched('confirmPassword')}
                            onChangeText={formik.handleChange('confirmPassword')}
                            style={{marginLeft: 20, fontSize: 18}}
                        />

                    </View>
                    {
                        formik.touched.confirmPassword && formik.errors.confirmPassword ?
                        <View
                            style={{
                                alignItems: 'flex-start'
                            }}
                        >
                            <Text testID="error-password" style={
                                {
                                    color: "white", 
                                    backgroundColor: "red",
                                    fontSize: 16,
                                    marginHorizontal: 20,
                                    padding: 2,
                                    borderRadius: 3,
                                }
                            }>
                                {formik.errors.confirmPassword}
                            </ Text>
                        </View>
                        : null
                    }

                    
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity 
                             style={{...stylesGlobal.button, opacity: formik.touched.password === undefined? 0.5 : !formik.isValid ? 0.5: 1}}
                             onPress={() => formik.handleSubmit()}
                             disabled={formik.touched.password === undefined? true : !formik.isValid  }
                        >
                            <Text style={stylesGlobal.buttonText}>Salvar</Text>
                        </TouchableOpacity>

                    </View>
                    
                </View>
                
                
            </View>
        </>
    )
}



export default ProfileEditPassword;