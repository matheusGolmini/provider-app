import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Modal,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

import styles from "./styles";
import stylesGlobal from "../styles-global";

const ProfileEdit = () => {
  const [image, setImage] = useState<string | null>(null);
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const [opacityButton, setOpacityButton] = useState<number>(0.5);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [bankAccountNumber, setBankAccountNumber] = useState<string>("");
  const [rg, setRg] = useState<string>("");
  const [cnpj, setCnpj] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);

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

  function navigateBack() {
    navigation.goBack();
  }

  function alterData() {
    //enviar dados para serem alterados
    console.log("dados alterado: ", image, name, phone);
    setVisible(false);
    navigation.navigate("Home");
  }

  function goTo(screenName: string) {
    navigation.navigate(screenName);
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{flex:1, backgroundColor: 'white'}}>
      <ScrollView
        style={{ backgroundColor: "#fff", marginBottom: 80, flex: 1 }}
        showsVerticalScrollIndicator={true}
      >
        <TouchableOpacity onPress={() => goTo("ProfileEditPeople")}>
          <View style={{...styles.menuItem, marginTop: 20}}>
            <Icon name="account-edit" size={30} style={{ color: "#605C99" }} />
            <Text style={{ ...styles.menuItemText }}> Alterar dados pessoais </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goTo("ProfileEditEmail")}>
          <View style={styles.menuItem}>
            <Icon name="email" size={30} style={{ color: "#605C99" }} />
            <Text style={{ ...styles.menuItemText }}> Alterar e-mail </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goTo("ProfileEditAddress")}>
          <View style={styles.menuItem}>
            <Icon name="home" size={30} style={{ color: "#605C99" }} />
            <Text style={{ ...styles.menuItemText }}> Alterar endereço </Text>
          </View>
        </TouchableOpacity>

        

        <TouchableOpacity onPress={() => goTo("ProfileEditPassword")}>
          <View style={styles.menuItem}>
            <Icon name="key" size={30} style={{ color: "#605C99" }} />
            <Text style={{ ...styles.menuItemText }}> Alterar senha </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </ View>
  );
};

export default ProfileEdit;
