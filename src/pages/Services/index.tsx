import React, { useState, useEffect } from 'react';
import { ListServiceInProgress, ListServicesFinished } from '../../components/flatListServices';
import ReturnImageNotService from '../../components/notService';
import { IDetailService } from '../../interfaces/detailService ';
import mockService from '../../mocks/mock-detail-service';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function ServicesInProgress() {
    const [service, setService] = useState<IDetailService[]>([]);
    useEffect(() => {
        getService();
    }, []);
  
    function getService() {
      setService(mockService.getServiceInProgress)
    }
    if(service.length) {
      return (
        <ListServiceInProgress props={{service}}/>
      );
    }
    return (
      <ReturnImageNotService text="Nenhum Serviço"/>
    )
}

function ServicesFinished() {
    const [service, setService] = useState<IDetailService[]>([]);
    useEffect(() => {
        getService();
    }, []);
  
    function getService() {
      setService(mockService.getServiceServicesFinished())
    }
    if(service.length) {
      return (
        <ListServicesFinished props={{service}}/>
      );
    }
    return (
      <ReturnImageNotService text="Nenhum Serviço Finalizado"/>
    )
  }


  const Tab = createMaterialTopTabNavigator();

  const Services = () =>  {
    return (
      <>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#37b7dc',
            inactiveTintColor: '#DCDCDC',
            labelStyle: {
              fontWeight: 'bold'
            },
            indicatorStyle: {
              backgroundColor: '#37b7dc'
            }     
          }}
          style={{marginTop:24}}
        >
          <Tab.Screen name="Serviços em andamento" component={ServicesInProgress}/>
          <Tab.Screen name="Serviços finalizados" component={ServicesFinished} />
        </Tab.Navigator>
      </>
    );
  }
  
  export default Services;