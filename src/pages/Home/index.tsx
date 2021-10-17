import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import ServicesPieChart from "../../components/Graphics/servicesPieChart";
import MonthlyBarChart from "../../components/Graphics/monthlyBarChart";
import Reating from "../../components/Rating";
import { getUserMock, UserService } from "../../mocks";
import TabBar from "../../components/TabBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IPerson } from "../../interfaces";

const Home = () => {
  const [userService, setUserService] = useState<UserService | undefined>(
    undefined
  );
  const [person, setPerson] = useState<IPerson>();
  const [isLoadingPage, setIsLoadingPage] = useState<boolean>(true);

  useEffect(() => {
    AsyncStorage.getItem("person").then((personString) => {
      const person = JSON.parse(String(personString)) as IPerson;
      setPerson(person);
      setIsLoadingPage(false);
    });
    setUserService(getUserMock());
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
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={{ flexDirection: "row", marginBottom: 120 }}>
              <MonthlyBarChart
                isText={true}
                dataValues={userService?.monthValue}
              />

              <ServicesPieChart
                isText={true}
                dataValue={userService?.services}
              />
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
});

export default Home;
