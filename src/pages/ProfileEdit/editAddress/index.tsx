import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

import styles from "../styles";
import stylesGlobal from "../../styles-global";
import ModalPicker from "../../../components/ModalPicker";
import MockService from "../../../mocks/mock-detail-service";
import { useFormik } from "formik";
import axios from "axios";
import { editAddressForm } from "./address.form";

const ProfileEditAddress = () => {
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const [opacityButton, setOpacityButton] = useState<number>(0.5);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [stateSelected, setStateSelected] = useState<string | null>("");

  const formik = useFormik({
    initialValues: {
      logradouro: "",
      bairro: "",
      cidade: "",
      uf: "",
      cep: "",
      numero: "",
      complemento: "",
    },
    validationSchema: editAddressForm,
    onSubmit: (values) => {
      console.log(values);
      alterData();
    },
  });

  useEffect(() => {
    onBlurCep();
  }, [formik.values.cep]);

  async function onBlurCep() {
    if (formik.values.cep?.length === 8) {
      try {
        const { data } = await axios.get(
          `https://viacep.com.br/ws/${formik.values.cep}/json/`
        );
        console.log(data);

        formik.setFieldValue("uf", data.uf);
        await formik.setFieldValue("logradouro", data.logradouro);
        await formik.setFieldValue("bairro", data.bairro);
        await formik.setFieldValue("cidade", data.localidade);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const navigation = useNavigation();

  function alterData() {
    //enviar dados para serem alterados
    navigation.navigate("MainTab");
  }

  return (
    <>
      <View style={{ backgroundColor: "#fff" }}>
        <View style={styles.container}>
          <View
            style={{
              ...styles.action,
              borderBottomColor:
                formik.touched.cep && formik.errors.cep ? "red" : "#F2F2F2",
            }}
          >
            <FontAwesome
              name="home"
              color={
                formik.touched.cep && formik.errors.cep ? "red" : "#605C99"
              }
              size={30}
            />
            <TextInput
              placeholder="* Cep"
              placeholderTextColor="#666666"
              keyboardType="number-pad"
              autoCorrect={false}
              onFocus={() => formik.setFieldTouched("cep")}
              onChangeText={formik.handleChange("cep")}
              style={{ marginLeft: 20, fontSize: 18 }}
            />
          </View>
          {formik.touched.cep && formik.errors.cep ? (
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text
                testID="error-email"
                style={{
                  color: "white",
                  backgroundColor: "red",
                  fontSize: 16,
                  marginHorizontal: 20,
                  padding: 2,
                  borderRadius: 3,
                }}
              >
                {formik.errors.cep}
              </Text>
            </View>
          ) : null}
          <View
            style={{
              ...styles.action,
              borderBottomColor:
                formik.touched.uf && formik.errors.uf ? "red" : "#F2F2F2",
            }}
          >
            <FontAwesome
              name="home"
              color={formik.touched.uf && formik.errors.uf ? "red" : "#605C99"}
              size={30}
            />
            <TextInput
              placeholder="* Estado"
              placeholderTextColor="#666666"
              value={formik.values.uf}
              autoCorrect={false}
              onFocus={() => formik.setFieldTouched("uf")}
              onChangeText={formik.handleChange("uf")}
              style={{ marginLeft: 20, fontSize: 18 }}
            />
          </View>
          {formik.touched.uf && formik.errors.uf ? (
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text
                testID="error-email"
                style={{
                  color: "white",
                  backgroundColor: "red",
                  fontSize: 16,
                  marginHorizontal: 20,
                  padding: 2,
                  borderRadius: 3,
                }}
              >
                {formik.errors.uf}
              </Text>
            </View>
          ) : null}

          <View
            style={{
              ...styles.action,
              borderBottomColor:
                formik.touched.logradouro && formik.errors.logradouro
                  ? "red"
                  : "#F2F2F2",
            }}
          >
            <FontAwesome
              name="home"
              color={
                formik.touched.logradouro && formik.errors.logradouro
                  ? "red"
                  : "#605C99"
              }
              size={30}
            />
            <TextInput
              placeholder="* Rua"
              placeholderTextColor="#666666"
              value={formik.values.logradouro}
              autoCorrect={false}
              onFocus={() => formik.setFieldTouched("logradouro")}
              onChangeText={formik.handleChange("logradouro")}
              style={{ marginLeft: 20, fontSize: 18 }}
            />
          </View>
          {formik.touched.logradouro && formik.errors.logradouro ? (
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text
                testID="error-email"
                style={{
                  color: "white",
                  backgroundColor: "red",
                  fontSize: 16,
                  marginHorizontal: 20,
                  padding: 2,
                  borderRadius: 3,
                }}
              >
                {formik.errors.logradouro}
              </Text>
            </View>
          ) : null}

          <View
            style={{
              ...styles.action,
              borderBottomColor:
                formik.touched.bairro && formik.errors.bairro
                  ? "red"
                  : "#F2F2F2",
            }}
          >
            <FontAwesome
              name="home"
              color={
                formik.touched.bairro && formik.errors.bairro
                  ? "red"
                  : "#605C99"
              }
              size={30}
            />
            <TextInput
              placeholder="* Bairro"
              placeholderTextColor="#666666"
              value={formik.values.bairro}
              autoCorrect={false}
              onFocus={() => formik.setFieldTouched("bairro")}
              onChangeText={formik.handleChange("bairro")}
              style={{ marginLeft: 20, fontSize: 18 }}
            />
          </View>
          {formik.touched.bairro && formik.errors.bairro ? (
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text
                testID="error-email"
                style={{
                  color: "white",
                  backgroundColor: "red",
                  fontSize: 16,
                  marginHorizontal: 20,
                  padding: 2,
                  borderRadius: 3,
                }}
              >
                {formik.errors.bairro}
              </Text>
            </View>
          ) : null}

          <View
            style={{
              ...styles.action,
              borderBottomColor:
                formik.touched.numero && formik.errors.numero
                  ? "red"
                  : "#F2F2F2",
            }}
          >
            <FontAwesome
              name="home"
              color={
                formik.touched.numero && formik.errors.numero
                  ? "red"
                  : "#605C99"
              }
              size={30}
            />
            <TextInput
              placeholder="* Número"
              placeholderTextColor="#666666"
              keyboardType="number-pad"
              autoCorrect={false}
              value={formik.values.numero}
              onFocus={() => formik.setFieldTouched("numero")}
              onChangeText={formik.handleChange("numero")}
              style={{ marginLeft: 20, fontSize: 18 }}
            />
          </View>
          {formik.touched.numero && formik.errors.numero ? (
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text
                testID="error-email"
                style={{
                  color: "white",
                  backgroundColor: "red",
                  fontSize: 16,
                  marginHorizontal: 20,
                  padding: 2,
                  borderRadius: 3,
                }}
              >
                {formik.errors.numero}
              </Text>
            </View>
          ) : null}

          <View style={styles.action}>
            <FontAwesome name="home" color="#605C99" size={30} />
            <TextInput
              placeholder="Complemento"
              placeholderTextColor="#666666"
              keyboardType="email-address"
              autoCorrect={false}
              value={formik.values.complemento}
              onFocus={() => formik.setFieldTouched("complemento")}
              onChangeText={formik.handleChange("complemento")}
              style={{ marginLeft: 20, fontSize: 18 }}
            />
          </View>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{ ...stylesGlobal.button, opacity: formik.touched.cep === undefined? 0.5 : !formik.isValid ? 0.5: 1 }}
              onPress={alterData}
              disabled={formik.touched.cep === undefined? true : !formik.isValid }
            >
              <Text style={stylesGlobal.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default ProfileEditAddress;
