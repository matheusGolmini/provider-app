import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking, Modal} from 'react-native';

import styles from './styles'; 
import { FlatList } from 'react-native-gesture-handler';
import { IDetailService } from '../../interfaces/detailService ';
import Rating from '../../components/Rating/index';


interface PropsComponent {
    props: {
        service: IDetailService[]
    }
}

function contractService(text: string) {
    Linking.openURL(
      `whatsapp://send?text=${text}&phone=5541984875054`
    )
};



export function ListServiceInProgress(propsComponent: PropsComponent) {
    const text= `Olá%20é%20o%20Matheus,%20gostaria%20de%20tirar%20umas%20duvidas%20com%20você.`;
    return (
        <View style={styles.container}>
            <FlatList 
                data={propsComponent.props.service}
                keyExtractor={(service: IDetailService) => String(service.id)}
                showsVerticalScrollIndicator={false}    
                renderItem={({item: service})=> (
                    <View style={ { ...styles.task, borderColor: service.color }}>
                        
                        <Image style={styles.logo} source={{uri: service.imageProvider}}/>
                        <Text style={{...styles.text, color: service.color, marginTop: 15}}>Cliente {service.nameProvider}</Text>
                        <Text style={{...styles.text, color: service.color}}>Data inicio: 01/02/2021</Text>
                        <Text style={{...styles.text, color: service.color}}>Acordo: {service.combinedContract}</Text>
                        <Text style={{...styles.text, color: service.color}}>Data finalização: 01/22/2021</Text>
                        
                        <Text style={{...styles.text, color: service.color}}>Valor pago: {service.value} reais</Text>

                        <TouchableOpacity 
                            style={{...styles.tasksButton2, backgroundColor: service.color, borderColor: service.color}} 
                            onPress={() => contractService(text)}
                        >
                            <Text style={{...styles.buttonText, color:  'white'}}> Falar com {service.nameProvider}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={{...styles.tasksButton2, backgroundColor: service.color, borderColor: service.color}} 
                            onPress={() => {}}
                        >
                            <Text style={{...styles.buttonText, color:  'white'}}> Ajuda</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>  
    )
}

export function ListServicesFinished(propsComponent: PropsComponent) {
    return (
        <View style={styles.container}>
            <FlatList 
                data={propsComponent.props.service}
                keyExtractor={(service: IDetailService) => String(service.id)}
                showsVerticalScrollIndicator={false}    
                renderItem={({item: service})=> (
                    <View style={ { ...styles.task, borderColor: service.color }}>
                        <Image style={styles.logo} source={{uri: service.imageProvider}}/>
                        <Text style={{...styles.text, color: service.color, marginTop: 15}}>Cliente {service.nameProvider}</Text>
                        <Text style={{...styles.text, color: service.color}}>Data inicio: 01/02/2021</Text>
                        <Text style={{...styles.text, color: service.color}}>Acordo: {service.combinedContract}</Text>
                        <Text style={{...styles.text, color: service.color}}>Data finalização: 01/22/2021</Text>
                        
                        <Text style={{...styles.text, color: service.color}}>Valor pago: {service.value} reais</Text>

                        <Rating value={true} sizeHeight={45} sizeWidth={45}/>
                        
                        <TouchableOpacity 
                            style={{...styles.tasksButton2, backgroundColor: service.color, borderColor: service.color}} 
                            onPress={() => {}}
                        >
                            <Text style={{...styles.buttonText, color:  'white'}}> Ajuda</Text>
                        </TouchableOpacity>

                        
                    </View>
                )}
            />
        </View>  
    )
}