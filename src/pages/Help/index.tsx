import React, { useState } from "react";
import { View, Text, Modal, Alert } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import ModalPicker from "../../components/ModalPicker";
import { TicketService } from "../../service/api/ticket-service";
import { useNavigation, useRoute } from "@react-navigation/core";
import { IPropUseRoute } from "../../interfaces/propUseRoute";
import styles from "./style";

const Help = () => {
  const route = useRoute<IPropUseRoute<{ idService: string }>>();
  const types = [
    "Dúvida",
    "Problemas com um serviço",
    "Feedback e sugestões",
    "Outro",
  ];
  const [typeSelected, setTypeSelected] = useState<string | null>("");
  const [message, setMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);
  const navigation = useNavigation();

  function submit() {
    if (message && typeSelected) {
      TicketService.createTicket({
        description: message,
        type: typeSelected,
        idService: route.params?.idService,
      });

      return true;
    } else {
      console.log("Inválido!");
      return false;
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
          {!!typeSelected? typeSelected : 'Selecione uma opção'}
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
          if (submit()) {
            setMessage("");
            setTypeSelected(null);
            Alert.alert(
              "Sucesso",
              "Solicitação criada! Nossa equipe vai entrar em contato por e-mail."
            );
            navigation.goBack();
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
