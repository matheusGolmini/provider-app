import React from 'react'
import { View, Text, TouchableOpacity} from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

import styles from '../styles';
import stylesGlobal from '../../styles-global'
import { useFormik} from 'formik';
import { editEmailForm } from './email.form';


const ProfileEditEmail = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            confirmEmail: '',
            disabledButton: true
        },
        validationSchema: editEmailForm,
        onSubmit: values => {
            console.log(values)
            alterData()
        },
    });

    const navigation = useNavigation();

    function alterData(){
        //enviar dados para serem alterados
        console.log('alterado: ', formik.values.email)
        navigation.navigate('Home')
    }
    formik.setFieldValue
    return (
        <> 
            <View 
                style={{backgroundColor: '#fff'}}
            >
                <View style={{...styles.container, backgroundColor: '#fff'}}>
                    <View style={{...styles.action, borderBottomColor: formik.touched.email && formik.errors.email ? 'red' :'#F2F2F2'}}>
                        <Icon 
                            name='email' size={30} 
                            color={ formik.touched.email && formik.errors.email ? 'red' :'#605C99' }
                        />
                        <TextInput 
                            placeholder='E-mail'
                            placeholderTextColor='#666666'
                            keyboardType='email-address'
                            autoCorrect={false}
                            onFocus={() => formik.setFieldTouched('email')}
                            onChangeText={formik.handleChange('email')}
                            style={{marginLeft: 20, fontSize: 18}}
                        />
                    </View>
                    {
                        formik.touched.email && formik.errors.email ?
                        <View
                            style={{
                                alignItems: 'flex-start'

                            }}
                        >
                            <Text testID="error-email" style={
                                {
                                    color: "white", 
                                    backgroundColor: "red",
                                    fontSize: 16,
                                    marginHorizontal: 20,
                                    padding: 2,
                                    borderRadius: 3,
                                }
                            }>
                                {formik.errors.email}
                            </ Text>
                        </View>
                        : null
                    }
                    <View style={{...styles.action, borderBottomColor: formik.touched.confirmEmail && formik.errors.confirmEmail ? 'red' :'#F2F2F2'}}>
                        <Icon 
                            name='email' size={30} 
                            color={formik.touched.confirmEmail && formik.errors.confirmEmail ? 'red' :'#605C99'}
                        />
                        <TextInput 
                            placeholder='Confirmar E-mail'
                            placeholderTextColor='#666666'
                            keyboardType='email-address'
                            autoCorrect={false}
                            onFocus={() => formik.setFieldTouched('confirmEmail')}
                            onChangeText={formik.handleChange('confirmEmail')}
                            style={{marginLeft: 20, fontSize: 18}}
                        />

                    </View>
                    {
                        formik.touched.confirmEmail && formik.errors.confirmEmail ?
                        <View
                            style={{
                                alignItems: 'flex-start'

                            }}
                        >
                            <Text testID="error-email" style={
                                {
                                    color: "white", 
                                    backgroundColor: "red",
                                    fontSize: 16,
                                    marginHorizontal: 20,
                                    padding: 2,
                                    borderRadius: 3,
                                }
                            }>
                                {formik.errors.confirmEmail}
                            </ Text>
                        </View>
                        : null
                    }

                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity 
                            style={{...stylesGlobal.button, opacity: formik.touched.email === undefined? 0.5 : !formik.isValid ? 0.5: 1}}
                            onPress={() => formik.handleSubmit()}
                            disabled={formik.touched.email === undefined? true : !formik.isValid  }
                        >
                            <Text style={stylesGlobal.buttonText}>Salvar</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </>
    )
}



export default ProfileEditEmail;