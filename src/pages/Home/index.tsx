import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  Text,
} from "react-native";
import ServicesPieChart from "../../components/Graphics/servicesPieChart";
import Reating from "../../components/Rating";
import TabBar from "../../components/TabBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IPerson } from "../../interfaces";
import { ConstractService } from "../../service/api/contract-service";

interface Service {
  color: string;
  serviceAmount: number;
}
const Home = () => {
  const [person, setPerson] = useState<IPerson>();
  const [isLoadingPage, setIsLoadingPage] = useState<boolean>(true);
  const [data, setData] = useState<Service[]>([]);

  useEffect(() => {
    AsyncStorage.getItem("person").then(async (personString) => {
      const person = JSON.parse(String(personString)) as IPerson;
      setPerson(person);
      await ConstractService.getStatus().then((value) => {
        const service: Service[] = [];
        if (value.emAndamento > 0) {
          service.push({
            serviceAmount: value.emAndamento,
            color: "#37b7dc",
          });
        }
        if (value.aguardandoAssintura > 0) {
          service.push({
            serviceAmount: value.aguardandoAssintura,
            color: "#ffae00",
          });
        }
        if (value.finalizado > 0) {
          service.push({
            serviceAmount: value.finalizado,
            color: "green",
          });
        }
        if (service.length === 0) {
          service.push({
            serviceAmount: 0,
            color: "#A9A9A9",
          });
        }
        setData(service);
        setIsLoadingPage(false);
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      {isLoadingPage && (
        <ActivityIndicator
          size="large"
          color="#605C99"
          style={{ marginTop: 250 }}
        />
      )}
      {!isLoadingPage && (
        <>
          <TabBar />
          <Reating
            value={false}
            sizeHeight={40}
            sizeWidth={40}
            ratingNumber={Math.trunc(
              person?.rating ? Number(person.rating) : 0
            )}
          />
          <View style={{ alignItems: "center" }}>
            <Text style={styles.text}>Serviços</Text>
          </View>
          <View style={{ marginTop: 20 }} />
          <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={{ marginBottom: 120 }}>
              {data.length > 0 && data[0].serviceAmount > 0 && (
                <>
                  <View
                    style={{
                      flexDirection: "row",
                      alignContent: "center",
                      alignItems: "center",
                      marginLeft: 30,
                    }}
                  >
                    <View
                      style={{ ...styles.quadrado, backgroundColor: "green" }}
                    ></View>
                    <Text style={styles.textAlias}> Finalizados</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignContent: "center",
                      alignItems: "center",
                      marginLeft: 30,
                    }}
                  >
                    <View
                      style={{ ...styles.quadrado, backgroundColor: "#37b7dc" }}
                    ></View>
                    <Text style={styles.textAlias}> Em andamento</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignContent: "center",
                      alignItems: "center",
                      marginLeft: 30,
                    }}
                  >
                    <View
                      style={{ ...styles.quadrado, backgroundColor: "#ffae00" }}
                    ></View>
                    <Text style={styles.textAlias}> Aguardando assinatura</Text>
                  </View>
                </>
              )}
              {data.length > 0 && data[0].serviceAmount === 0 &&(
                <View
                  style={{
                    flexDirection: "row",
                    alignContent: "center",
                    alignItems: "center",
                    marginLeft: 30,
                  }}
                >
                  <View
                    style={{ ...styles.quadrado, backgroundColor: "#A9A9A9" }}
                  ></View>
                  <Text style={styles.textAlias}>
                    {" "}
                    Não possui nenhum serviço
                  </Text>
                </View>
              )}
              {data.length !== 0 && (
                <ServicesPieChart isText={true} dataValue={data} />
              )}
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
};

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  button: {
    backgroundColor: "#8BE5FF",
    marginTop: 10,
    width: 300,
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
  },

  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    marginTop: height - 500,
    width: "100%",
    borderRadius: 5,
    elevation: 10,
    borderWidth: 5,
    borderColor: "#37b7dc",
  },

  title: {
    marginTop: 20,
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  TextModal: {
    fontSize: 20,
    color: "#37b7dc",
    fontWeight: "bold",
  },

  buttonArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },

  buttonModal: {
    backgroundColor: "#37b7dc",
    width: 100,
    height: 40,
    flexDirection: "row",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    color: "#36294a",
  },

  textAlias: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    color: "#36294a",
  },

  quadrado: {
    height: 20,
    width: 20,
  },
});

export default Home;
