import React, { useState, useEffect } from "react";
import {
  ListContractSign,
  ListServiceInProgress,
  ListServicesFinished,
} from "../../components/flatListServices";
import ReturnImageNotService from "../../components/notService";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View } from "react-native";
import {
  ConstractService,
  IConstractResponse,
} from "../../service/api/contract-service";

function ServicesInProgress() {
  const [service, setService] = useState<IConstractResponse[]>([]);
  useEffect(() => {
    ConstractService.getInprogress()
      .then((data) => {
        setService(data);
      })
      .catch((erro: any) => {
        console.log(erro.response.data);
      });
  });

  if (service.length) {
    return <ListServiceInProgress props={{ service }} />;
  }
  return <ReturnImageNotService text="Nenhum Serviço" />;
}

function ServicesFinished() {
  const [service, setService] = useState<IConstractResponse[]>([]);
  useEffect(() => {
    ConstractService.getFinished()
      .then((data) => {
        setService(data);
      })
      .catch((erro: any) => {
        console.log(erro.response.data);
      });
  });

  if (service.length) {
    return <ListServicesFinished props={{ service }} />;
  }
  return <ReturnImageNotService text="Nenhum Serviço Finalizado" />;
}

function ContractSign() {
  const [service, setService] = useState<IConstractResponse[]>([]);
  useEffect(() => {
    ConstractService.getWaitingSignature()
      .then((data) => {
        setService(data);
      })
      .catch((erro: any) => {
        console.log(erro.response.data);
      });
  });
  
  if (service.length) {
    return <ListContractSign props={{ service }} />;
  }
  return <ReturnImageNotService text="Nenhum Serviço" />;
}

const Tab = createMaterialTopTabNavigator();

const Services = () => {
  return (
    <>
      <View
        style={{
          height: 40,
          backgroundColor: "#302E4D",
        }}
      />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#302E4D",
          inactiveTintColor: "#DCDCDC",
          labelStyle: {
            fontWeight: "bold",
          },
          indicatorStyle: {
            backgroundColor: "#302E4D",
          },
        }}
      >
        <Tab.Screen name="Assinar contrato" component={ContractSign} />
        <Tab.Screen
          name="Serviços em andamento"
          component={ServicesInProgress}
        />
        <Tab.Screen name="Serviços finalizados" component={ServicesFinished} />
      </Tab.Navigator>
    </>
  );
};

export default Services;
