import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  Modal,
} from "react-native";

import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";
import { IDetailService } from "../../interfaces/detailService ";
import Rating from "../../components/Rating/index";
import ModalContrat from "../ModalContrat";
import CreateTicket from "../createTicket";
import { Feather } from "@expo/vector-icons";
import ButtonContrat from "../ModalContrat/buttonModal";

interface PropsComponent {
  props: {
    service: IDetailService[];
  };
}

function contractService(text: string) {
  Linking.openURL(`whatsapp://send?text=${text}&phone=5541984875054`);
}

export function ListServiceInProgress(propsComponent: PropsComponent) {
  const text = `Olá%20é%20o%20Matheus,%20gostaria%20de%20tirar%20umas%20duvidas%20com%20você.`;
  const [controlPicker, setControlPicker] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <FlatList
        data={propsComponent.props.service}
        keyExtractor={(service: IDetailService) => String(service.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: service }) => (
          <View style={{ ...styles.task }}>
            <View style={{ alignItems: 'center'}}>
              <Image
                style={styles.logo}
                source={{ uri: service.imageProvider }}
              />
            </View>
            <Text
              style={{ ...styles.text, marginTop: 15 }}
            >
              Cliente {service.nameProvider}
            </Text>
            <Text style={{ ...styles.text }}>
              Data inicio: 01/02/2021
            </Text>
            <Text style={{ ...styles.text }}>
              Acordo: {service.combinedContract}
            </Text>
            <Text style={{ ...styles.text }}>
              Data finalização: 01/22/2021
            </Text>

            <Text style={{ ...styles.text }}>
              Valor pago: {service.value} reais
            </Text>

            <TouchableOpacity
              style={{
                ...styles.tasksButton2
              }}
              onPress={() => contractService(text)}
            >
              <Text style={{ ...styles.buttonText, color: "white" }}>
                {" "}
                Falar com {service.nameProvider}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                ...styles.tasksButton2
              }}
              onPress={() => {
                service.help_open = !service.help_open;
                setControlPicker(!controlPicker);
              }}
            >
              <Text style={{ ...styles.buttonText, color: "white" }}>
                {" "}
                Ajuda
              </Text>
            </TouchableOpacity>
            {service.help_open ? <CreateTicket service={service} /> : <></>}
          </View>
        )}
      />
    </View>
  );
}

export function ListServicesFinished(propsComponent: PropsComponent) {
  const [controlPicker, setControlPicker] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <FlatList
        data={propsComponent.props.service}
        keyExtractor={(service: IDetailService) => String(service.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: service }) => (
          <View style={{ ...styles.task }}>
            <View style={{ alignItems: 'center'}}>
              <Image
                style={styles.logo}
                source={{ uri: service.imageProvider }}
              />
            </View>
            <Text
              style={{ ...styles.text, marginTop: 15 }}
            >
              Cliente {service.nameProvider}
            </Text>
            <Text style={{ ...styles.text}}>
              Data inicio: 01/02/2021
            </Text>
            <Text style={{ ...styles.text }}>
              Acordo: {service.combinedContract}
            </Text>
            <Text style={{ ...styles.text }}>
              Data finalização: 01/22/2021
            </Text>

            <Text style={{ ...styles.text }}>
              Valor pago: {service.value} reais
            </Text>

            <Rating value={true} sizeHeight={45} sizeWidth={45} />

            <TouchableOpacity
              style={{
                ...styles.tasksButton2
              }}
              onPress={() => {
                service.help_open = !service.help_open;
                setControlPicker(!controlPicker);
              }}
            >
              <Text style={{ ...styles.buttonText, color: "white" }}>
                {" "}
                Ajuda
              </Text>
            </TouchableOpacity>
            {service.help_open ? <CreateTicket service={service} /> : <></>}
          </View>
        )}
      />
    </View>
  );
}

export function ListContractSign(propsComponent: PropsComponent) {
  const [controlPicker, setControlPicker] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <FlatList
        data={propsComponent.props.service}
        keyExtractor={(service: IDetailService) => String(service.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: service }) => (
          <View style={styles.task}>
           <View style={{ alignItems: 'center'}}>
              <Image
                style={styles.logo}
                source={{ uri: service.imageProvider }}
              />
            </View>
            <Text style={{ ...styles.text, marginTop: 15 }}>
              Cliente {service.nameProvider}
            </Text>
            <Text style={{ ...styles.text }}>Data inicio: 01/02/2021</Text>
            <Text style={{ ...styles.text }}>
              Acordo: {service.combinedContract}
            </Text>
            <Text style={{ ...styles.text }}>Data finalização: 01/22/2021</Text>

            <Text style={{ ...styles.text }}>
              Valor pago: {service.value} reais
            </Text>
            <ButtonContrat />

            <TouchableOpacity
              style={{ ...styles.tasksButton2 }}
              onPress={() => {
                service.help_open = !service.help_open;
                setControlPicker(!controlPicker);
              }}
            >
              <Text style={{ ...styles.buttonText, color: "white" }}>
                {" "}
                Ajuda
              </Text>
            </TouchableOpacity>
            {service.help_open ? <CreateTicket service={service} /> : <></>}

          </View>
        )}
      />
    </View>
  );
}
