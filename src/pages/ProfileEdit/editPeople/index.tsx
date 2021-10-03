import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

import styles from "../styles";
import stylesGlobal from "../../styles-global";
import { ProviderService } from "../../../service/api/provider-service";
import { UtilsObject } from "../../../utils/object";
import { IPerson, IUpdatePerson } from "../../../interfaces";
import { UploadService } from "../../../service/api/upload-service";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditPeople = () => {
  const [image, setImage] = useState<any | null>(null);
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const [opacityButton, setOpacityButton] = useState<number>(0.5);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [bankAccountNumber, setBankAccountNumber] = useState<string>("");
  const [rg, setRg] = useState<string>("");
  const [cnpj, setCnpj] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [person, setPerson] = useState<IPerson>();

  useEffect(() => {
    if (
      !!name ||
      !!phone ||
      !!image ||
      !!cpf ||
      !!rg ||
      !!cnpj ||
      !!bankAccountNumber
    ) {
      setDisableButton(false);
      setOpacityButton(1);
    } else {
      setDisableButton(true);
      setOpacityButton(0.5);
    }
  });

  const navigation = useNavigation();

  async function alterData() {
    //enviar dados para serem alterados
    try {
      setIsLoading(true);
      let url = undefined;
      if (image) {
        let formData = new FormData();
        formData.append("file", image);
        url = await UploadService.uploadImage(formData);
      }

      const data = UtilsObject.removeKeyUndefined<IUpdatePerson>({
        cpf,
        rg,
        phone,
        imageProfile: url,
        firstName: name,
      });

      await ProviderService.upadatePerson(data);
      setIsLoading(false);
      Alert.alert("Sucesso", "Dado alterado!");
    } catch (error) {
      setIsLoading(false);
      Alert.alert("Erro", "Sistema com problema");
    }
    navigation.navigate("Home");
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage({
        name: "PerfilImage",
        size: result.width,
        uri: result.uri,
        type: "application/octet-stream",
      });
    }
  };

  useEffect(() => {
    AsyncStorage.getItem("person").then((personString) => {
      const person = JSON.parse(String(personString)) as IPerson;
      setPerson(person);
    });
  }, []);
  
  return (
    <>
      <ScrollView
        style={{ backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ backgroundColor: "#fff" }}>
          <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={{
                    uri: person?.imageProfile
                      ? person?.imageProfile
                      : "https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg",
                  }}
                  style={{ ...styles.logo, borderColor: "#4169E1" }}
                />
                <View style={{ marginTop: 20, marginLeft: 5 }}>
                  <TouchableOpacity onPress={pickImage}>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Icon
                        name="camera"
                        size={25}
                        color="#605C99"
                        style={styles.camera}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{ ...styles.action, marginTop: 20 }}>
              <FontAwesome name="user-o" size={20} />
              <TextInput
                placeholder="Nome"
                placeholderTextColor="#666666"
                autoCorrect={false}
                onChangeText={(val) => setName(val)}
                style={{ marginLeft: 20, fontSize: 18 }}
              />
            </View>
            <View style={{ ...styles.action, marginTop: 20 }}>
              <FontAwesome name="user-o" size={20} />
              <TextInput
                placeholder="CPF"
                placeholderTextColor="#666666"
                keyboardType="number-pad"
                autoCorrect={false}
                style={{ marginLeft: 20, fontSize: 18 }}
                onChangeText={(val) => setCpf(val)}
              />
            </View>
            <View style={{ ...styles.action, marginTop: 20 }}>
              <FontAwesome name="user-o" size={20} />
              <TextInput
                placeholder="CNPJ"
                placeholderTextColor="#666666"
                keyboardType="number-pad"
                autoCorrect={false}
                style={{ marginLeft: 20, fontSize: 18 }}
                onChangeText={(val) => setCnpj(val)}
              />
            </View>

            <View style={{ ...styles.action, marginTop: 20 }}>
              <FontAwesome name="user-o" size={20} />
              <TextInput
                placeholder="RG"
                placeholderTextColor="#666666"
                keyboardType="number-pad"
                autoCorrect={false}
                style={{ marginLeft: 20, fontSize: 18 }}
                onChangeText={(val) => setRg(val)}
              />
            </View>

            <View style={{ ...styles.action, marginTop: 20 }}>
              <FontAwesome name="user-o" size={20} />
              <TextInput
                placeholder="Número da conta bancária"
                placeholderTextColor="#666666"
                keyboardType="number-pad"
                autoCorrect={false}
                style={{ marginLeft: 20, fontSize: 18 }}
                onChangeText={(val) => setBankAccountNumber(val)}
              />
            </View>
            <View style={styles.action}>
              <FontAwesome name="phone" size={20} />
              <TextInput
                placeholder="Telefone"
                placeholderTextColor="#666666"
                keyboardType="number-pad"
                autoCorrect={false}
                onChangeText={(val) => setPhone(val)}
                style={{ marginLeft: 20, fontSize: 18 }}
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
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  style={{ ...stylesGlobal.button, opacity: opacityButton }}
                  onPress={() => alterData()}
                  disabled={disableButton}
                >
                  <Text style={stylesGlobal.buttonText}>Salvar</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>

        {/* <Modal animationType="slide" transparent={true} visible={visible}>
          <View style={styles.modal}>
            <Text style={styles.title}>Quer realmente alterar seus dados?</Text>
            <View style={styles.buttonArea}>
              <TouchableOpacity
                style={{ ...styles.buttonModal, marginHorizontal: 10 }}
                onPress={() => alterData()}
              >
                <Text style={stylesGlobal.buttonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonModal}
                onPress={() => setVisible(false)}
              >
                <Text style={stylesGlobal.buttonText}>Não</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal> */}
      </ScrollView>
    </>
  );
};

export default EditPeople;
