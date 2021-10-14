import React, { useState } from "react";
import { View, Text, Modal } from "react-native";
import styles from "./style";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { IDetailService } from "../../interfaces/detailService ";
import { Feather } from "@expo/vector-icons";
import ModalPicker from "../../components/ModalPicker";

const Help = () => {
  const types = [
    "Dúvida",
    "Problemas com um serviço",
    "Feedback e sugestões",
    "Outro",
  ];
  const [typeSelected, setTypeSelected] = useState<string | null>("");
  const [message, setMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);

  function submit(message: string, type: string, service?: IDetailService) {
    if (message) {
      console.log(service);
      console.log("OK!");
      return true;
    } else {
      console.log("Inválido!");
    }
  }

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={styles.subheader}>Como podemos te ajudar?</Text>

      <TextInput
        style={styles.textInput}
        value={message}
        onChangeText={(currentMessage) => setMessage(currentMessage)}
        multiline
        numberOfLines={15}
        placeholder="Escreva sua mensagem de forma detalhada aqui."
      />
      <TouchableOpacity
        style={{ ...styles.buttonDocument }}
        onPress={() => setIsModalVisible(true)}
      >
        <Text
          style={{
            ...styles.buttonDocumentText,
            opacity: !!typeSelected ? 1 : 0.5,
          }}
        >
          Selecione uma opção
        </Text>
        <Feather
          name="check"
          color="white"
          size={30}
          style={{
            marginHorizontal: 20,
            opacity: !!typeSelected ? 1 : 0.5,
          }}
        />
      </TouchableOpacity>

      <Modal transparent={true} animationType={"fade"} visible={isModalVisible}>
        <ModalPicker
          setIsModalVisible={setIsModalVisible}
          setTypeSelected={setTypeSelected}
          data={types}
        />
      </Modal>
      <TouchableOpacity
        style={{ ...styles.button }}
        disabled={message === ""}
        onPress={() => {
          if (submit(message, String(typeSelected))) {
            setMessage("");
            setTypeSelected(null);
          }
        }}
      >
        <Text
          style={{
            ...styles.buttonText,
            opacity: message !== "" && !!typeSelected ? 1 : 0.5,
          }}
        >
          Enviar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Help;
