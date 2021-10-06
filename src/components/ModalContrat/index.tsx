import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { ConstractService } from "../../service/api/contract-service";
import { ContractStatus } from "../../enum/status";

const { height, width } = Dimensions.get("window");

interface ModalPicker {
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSignedContract: React.Dispatch<React.SetStateAction<boolean>>;
  agreement: string;
  contractId: string;
}

const ModalContrat = ({
  setIsModalVisible,
  setSignedContract,
  agreement,
  contractId,
}: ModalPicker) => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [opacity, setOpacity] = useState<number>(0.5);

  function scroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
    if (event.nativeEvent.contentOffset.y >= 4600) {
      setOpacity(1);
      setDisabled(false);
    } else {
      setOpacity(0.5);
      setDisabled(true);
    }
  }

  function contractSign() {
    try {
      ConstractService.updateStatus(contractId, {
        status: ContractStatus.ESPERANDO_PAGAMENTO,
      });
    } catch (error: any) {
      console.log(error.response.data);
    }

    console.log("Eu aceito o contrato");
    setIsModalVisible(false);
    setSignedContract(true);
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.modal,
          width: width - 10,
          height: height / 1.5,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => setIsModalVisible(false)}>
          <Feather name={"x"} size={27} color={"#302E4D"} />
        </TouchableOpacity>

        <Text style={styles.title}> Leia e Assine </Text>

        <View
          style={{ ...styles.contrat, width: width - 30, height: height / 2 }}
        >
          <ScrollView
            onScroll={scroll}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.contratText}>{agreement}</Text>
          </ScrollView>
        </View>

        <TouchableOpacity
          style={{ ...styles.button, opacity: opacity }}
          disabled={disabled}
          onPress={() => contractSign()}
        >
          <Text style={styles.buttonText}> Assinar contrato </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModalContrat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  modal: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#605C99",
    alignItems: "center",
  },

  option: {
    alignItems: "center",
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#302E4D",
  },

  text: {
    margin: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "#37b7dc",
  },

  contrat: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#605C99",
  },

  contratText: {
    margin: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },

  button: {
    backgroundColor: "#605C99",
    height: 30,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 7,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
