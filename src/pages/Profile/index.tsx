import React, { useState, useEffect } from 'react'
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles';
import { IClient } from '../../interfaces/client';
import { useNavigation } from '@react-navigation/core';
import CreateTicket from '../../components/createTicket';
import Carousel from '../../components/carousel/carousel';
import { IServicesImages } from '../../interfaces/servicesImges';
import { servicesImages } from '../../mocks/mock-images-jobs';
import Reating from '../../components/Rating';
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {
  const [image, setImage] = useState<string | null>(null);
  const [client, setClient] = useState<IClient>();
  const [controlPicker, setControlPicker] = useState<boolean>(false);
  const [ services, setServices] = useState<IServicesImages[]>([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });

    if (!result.cancelled) {
      setServices([...services, {
        id: services[services.length -1].id + 1,
        url: result.uri
      }])
    }
  };

  const navigation = useNavigation();

  useEffect(() => {
    //buscar os dados no bacno
    setClient({
      email: 'matheus@gmail.com',
      id: '1231213',
      name: 'Matheus',
      phone: '41 997628216',
      avatar: '../../assets/avatar.jpg',
      color: '#00BFFF',
      ratingNumber: 3,
    })
    setServices(servicesImages)
  }, []);

  function goTo(screenName: string){
    navigation.navigate(screenName);
  }

  return (
    <>
      <ScrollView 
        style={{backgroundColor: '#fff'}}
        showsVerticalScrollIndicator={false}
      >
      <View style={styles.container}>
        <View style={{flexDirection: 'row', marginTop: 50, alignItems: 'center', margin: 20}}>
          <Image style={styles.logo} source={{uri: 'https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg'}} />
          <View style={{marginLeft: 5}}>
            <Text style={{...styles.text, color: client?.color, marginHorizontal: 20}}>{client?.name}</Text>
          </View>

          <TouchableOpacity
            onPress={() => goTo('ProfileEdit')}
          >
            <View style={{paddingHorizontal: 40}}>
              <Icon name='account-edit' size={30}style={{color: client?.color}}/>
            </View>
          </TouchableOpacity>
          
        </View>
        
        <Reating value={false} sizeHeight={40} sizeWidth={40} ratingNumber={3}/>
        <Carousel values={{services, color: client?.color}}/> 

        <View >

          <TouchableOpacity
            onPress={pickImage}
          >
            <View style={styles.menuItem}>
              <Icon name='camera' size={30}style={{color: client?.color}}/>
              <Text style={{...styles.menuItemText}}> Adicionar imagem </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => goTo('ProfileEditEmail')}
          >
            <View style={styles.menuItem}>
              <Icon name='email' size={30}style={{color: client?.color}}/>
              <Text style={{...styles.menuItemText}}> Alterar E-mail </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => goTo('ProfileEditPassword')}
          >
            <View style={styles.menuItem}>
              <Icon name='key' size={30}style={{color: client?.color}}/>
              <Text style={{...styles.menuItemText}}> Alterar Senha </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => goTo('ProfileEditAddress')}
          >
            <View style={styles.menuItem}>
              <Icon name='home' size={30}style={{color: client?.color}}/>
              <Text style={{...styles.menuItemText}}> Alterar Endereço </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => {
            setControlPicker(!controlPicker);
          }}>
            <View style={styles.menuItem}>
              <Icon name='account-check-outline' size={30}style={{color: client?.color}}/>
              <Text style={{...styles.menuItemText}}> Ajuda </Text>
            </View>
          </TouchableOpacity>
          {
            controlPicker ? 
            <CreateTicket/>
            : <></>
          }
        </View>     
      </View>
      </ScrollView>

    </>
  )
}



export default Profile;