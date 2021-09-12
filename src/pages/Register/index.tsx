import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

import Progress from "../../components/progress";
import FormPerson from "./RegisterOne";
import RegisterTwo from "./RegisterTwo";
import RegisterThree from "./RegisterThree";
import RegisterEnd from "./RegisterEnd";
import stylesGlobal from "../styles-global";

export interface IControlProgress {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ControlRegister = ({ index, setIndex }: IControlProgress) => {
  switch (index) {
    case 0:
      return <FormPerson index={index} setIndex={setIndex} />;
    case 1:
      return <RegisterTwo index={index} setIndex={setIndex} />;
    case 2:
      return <RegisterThree index={index} setIndex={setIndex} />;
    case 3:
      return <RegisterEnd />;
    default:
      return <View></View>;
  }
};

const Register = () => {

  const [index, setIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 50, alignItems: "center" }}>
        {
          index === 3 ?
          <Image
            style={stylesGlobal.logo}
            source={require("../../assets/logo.jpg")}
          />
         : null
        }
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>
          Cadastro {index === 3 ? "Finalizado" : ""}
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: 25, marginTop: 15 }}
      >
        <Progress step={index} steps={3} height={19} marginHorizontal={5} />
        <ControlRegister index={index} setIndex={setIndex} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
  },

  error: {
    color: "white",
    backgroundColor: "red",
    fontSize: 16,
    padding: 2,
    borderRadius: 3,
    marginTop: 2,
  },

  input: {
    marginTop: 10,
    width: 300,
    height: 50,
  },

  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#302E4D",
  },
  textInfo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#37b7dc",
    marginHorizontal: 5,
  },
  inputText: {
    width: "100%",
    backgroundColor: "#FFF",
    height: 50,
    padding: 8,
    fontSize: 16,
    color: "#302E4D",
    fontWeight: "bold",
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default Register;

