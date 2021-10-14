import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";
import { IDetailService } from "../../interfaces/detailService ";
import Rating from "../../components/Rating/index";
import ButtonContrat from "../ModalContrat/buttonModal";
import {
  ConstractService,
  IConstractResponse,
} from "../../service/api/contract-service";
import { useNavigation } from "@react-navigation/core";

interface PropsComponent {
  props: {
    service: IConstractResponse[];
  };
}

function contractService(text: string, phone: string) {
  Linking.openURL(`whatsapp://send?text=${text}&phone=${phone}`);
}

export function ListServiceInProgress(propsComponent: PropsComponent) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigation = useNavigation();

  const finalizarService = async (
    contractId: string,
    updateFinalizarContrato: boolean
  ) => {
    try {
      setIsLoading(true);
      await ConstractService.updateFinalizarContrato(
        contractId,
        updateFinalizarContrato
      );
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      console.log(error.response.data);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={propsComponent.props.service}
        keyExtractor={(service: IDetailService) => String(service.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: service }) => (
          <View style={{ ...styles.task }}>
            <View style={{ alignItems: "center" }}>
              <Image
                style={styles.logo}
                source={{ uri: service.Person.imageProfile }}
              />
            </View>
            {isLoading && (
              <ActivityIndicator
                size="large"
                color="#605C99"
                style={{ marginTop: 20 }}
              />
            )}
            {!isLoading && (
              <>
                {!service.terminatedServiceProvider ? (
                  <>
                    <Text style={{ ...styles.text, marginTop: 15 }}>
                      Cliente {service.Person.firstName}
                    </Text>
                    <Text style={{ ...styles.text }}>
                      Data inicio: {service.startDate}
                    </Text>
                    <Text style={{ ...styles.text }}>
                      Acordo: {service.briefDescription}
                    </Text>
                    <Text style={{ ...styles.text }}>
                      Data finalização: {service.endDate}
                    </Text>

                    <Text style={{ ...styles.text }}>
                      Valor pago: {service.amountTotal} reais
                    </Text>

                    <TouchableOpacity
                      style={{
                        ...styles.tasksButton2,
                      }}
                      onPress={() =>
                        contractService(
                          `Olá%20é%20o%20${service.Person.firstName},%20gostaria%20de%20tirar%20uma%20dúvida%20com%20você.`,
                          service.Person.phone
                        )
                      }
                    >
                      <Text style={{ ...styles.buttonText, color: "white" }}>
                        Falar com {service.Person.firstName}
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{
                        ...styles.tasksButton2,
                      }}
                      onPress={() => finalizarService(service.id, true)}
                    >
                      <Text style={{ ...styles.buttonText, color: "white" }}>
                        Finalizar Serviço
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{ ...styles.tasksButton2 }}
                      onPress={() => {
                        navigation.navigate("Help", { idService: service.id });
                      }}
                    >
                      <Text style={{ ...styles.buttonText, color: "white" }}>
                        Ajuda
                      </Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    <Text style={{ ...styles.text, marginTop: 15 }}>
                      Aguadando o cliente finalizar o serviço.
                    </Text>
                    <TouchableOpacity
                      style={{
                        ...styles.tasksButton2,
                      }}
                      onPress={() =>
                        contractService(
                          `Olá%20é%20o%20${service.Person.firstName},%20gostaria%20de%20tirar%20uma%20dúvida%20com%20você.`,
                          service.Person.phone
                        )
                      }
                    >
                      <Text style={{ ...styles.buttonText, color: "white" }}>
                        Falar com {service.Person.firstName}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        ...styles.tasksButton2,
                      }}
                      onPress={() => finalizarService(service.id, false)}
                    >
                      <Text style={{ ...styles.buttonText, color: "white" }}>
                        Reiniciar serviço
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ ...styles.tasksButton2 }}
                      onPress={() => {
                        navigation.navigate("Help", { idService: service.id });
                      }}
                    >
                      <Text style={{ ...styles.buttonText, color: "white" }}>
                        Ajuda
                      </Text>
                    </TouchableOpacity>
                  </>
                )}
              </>
            )}
          </View>
        )}
      />
    </View>
  );
}

export function ListServicesFinished(propsComponent: PropsComponent) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        data={propsComponent.props.service}
        keyExtractor={(service: IConstractResponse) => String(service.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: service }) => (
          <View style={{ ...styles.task }}>
            <View style={{ alignItems: "center" }}>
              <Image
                style={styles.logo}
                source={{ uri: service.Person.imageProfile }}
              />
            </View>
            <Text style={{ ...styles.text, marginTop: 15 }}>
              Cliente {service.Person.firstName}
            </Text>
            <Text style={{ ...styles.text }}>
              Data inicio: {service.startDate}
            </Text>
            <Text style={{ ...styles.text }}>
              Acordo: {service.briefDescription}
            </Text>
            <Text style={{ ...styles.text }}>
              Data finalização: {service.endDate}
            </Text>

            <Text style={{ ...styles.text }}>
              Valor pago: {service.amountTotal} reais
            </Text>

            <Rating value={true} sizeHeight={45} sizeWidth={45} />

            <TouchableOpacity
              style={{ ...styles.tasksButton2 }}
              onPress={() => {
                navigation.navigate("Help", { idService: service.id });
              }}
            >
              <Text style={{ ...styles.buttonText, color: "white" }}>
                Ajuda
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export function ListContractSign(propsComponent: PropsComponent) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        data={propsComponent.props.service}
        keyExtractor={(service: IConstractResponse) => String(service.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: service }) => (
          <View style={styles.task}>
            <View style={{ alignItems: "center" }}>
              <Image
                style={styles.logo}
                source={{ uri: service.Person.imageProfile }}
              />
            </View>
            <Text style={{ ...styles.text, marginTop: 15 }}>
              Cliente {service.Person.firstName}
            </Text>
            <Text style={{ ...styles.text }}>
              Data inicio: {service.startDate}
            </Text>
            <Text style={{ ...styles.text }}>
              Acordo: {service.briefDescription}
            </Text>
            <Text style={{ ...styles.text }}>
              Data finalização: {service.endDate}
            </Text>

            <Text style={{ ...styles.text }}>
              Valor pago: {service.amountTotal} reais
            </Text>
            <ButtonContrat
              agreement={service.agreement}
              contractId={service.id}
            />

            <TouchableOpacity
              style={{ ...styles.tasksButton2 }}
              onPress={() => {
                navigation.navigate("Help", { idService: service.id });
              }}
            >
              <Text style={{ ...styles.buttonText, color: "white" }}>
                Ajuda
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
