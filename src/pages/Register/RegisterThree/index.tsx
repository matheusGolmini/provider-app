import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  Modal,
} from "react-native";
import stylesGlobal from "../../styles-global";
import { useFormik } from "formik";
import { IControlProgress } from "..";
// import { Feather } from "@expo/vector-icons";
// import ModalPicker from "../../../components/ModalPicker";
// import MockService from "../../../mocks/mock-detail-service";
import axios from "axios";
import { editAddressForm } from "../../ProfileEdit/editAddress/address.form";

const RegisterThree = ({ index, setIndex }: IControlProgress) => {
 
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
    onSubmit: (values, { resetForm }) => {
      //Enivar para o backend
      setTimeout(() => {
        setIndex((index += 1));
      }, 100);
      console.log({ ...values });
      resetForm();
    },
  });

  React.useEffect(() => {
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

  return (
    <>
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#fff",
          marginBottom: 250,
        }}
      >
        <View style={{ marginBottom: 0 }}>
          <View style={{ ...styles.input }}>
            <TextInput
              style={{
                ...styles.inputText,
              }}
              placeholder="CEP"
              placeholderTextColor="#666666"
              keyboardType="numeric"
              autoCorrect={false}
              value={formik.values.cep}
              onFocus={() => formik.setFieldTouched("cep")}
              onChangeText={formik.handleChange("cep")}
            />
          </View>
          {formik.touched.cep && formik.errors.cep ? (
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text testID="error-cep" style={styles.error}>
                {formik.errors.cep}
              </Text>
            </View>
          ) : null}

          <View style={{ ...styles.input }}>
            <TextInput
              style={{
                ...styles.inputText,
              }}
              placeholder="Estado"
              placeholderTextColor="#666666"
              autoCorrect={false}
              value={formik.values.uf}
              onFocus={() => formik.setFieldTouched("uf")}
              onChangeText={formik.handleChange("uf")}
            />
          </View>
          {formik.touched.uf && formik.errors.uf ? (
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text testID="error-uf" style={styles.error}>
                {formik.errors.uf}
              </Text>
            </View>
          ) : null}

          <View style={{ ...styles.input }}>
            <TextInput
              style={{
                ...styles.inputText,
              }}
              placeholder="Logradouro"
              placeholderTextColor="#666666"
              keyboardType="default"
              autoCorrect={false}
              value={formik.values.logradouro}
              onFocus={() => formik.setFieldTouched("logradouro")}
              onChangeText={formik.handleChange("logradouro")}
            />
          </View>
          {formik.touched.logradouro && formik.errors.logradouro ? (
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text testID="error-logradouro" style={styles.error}>
                {formik.errors.logradouro}
              </Text>
            </View>
          ) : null}

          <View style={{ ...styles.input }}>
            <TextInput
              style={{
                ...styles.inputText,
              }}
              placeholder="Bairro"
              placeholderTextColor="#666666"
              keyboardType="default"
              autoCorrect={false}
              value={formik.values.bairro}
              onFocus={() => formik.setFieldTouched("bairro")}
              onChangeText={formik.handleChange("bairro")}
            />
          </View>
          {formik.touched.bairro && formik.errors.bairro ? (
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text testID="error-bairro" style={styles.error}>
                {formik.errors.bairro}
              </Text>
            </View>
          ) : null}

          <View style={{ ...styles.input }}>
            <TextInput
              style={{
                ...styles.inputText,
              }}
              placeholder="cidade"
              placeholderTextColor="#666666"
              keyboardType="default"
              autoCorrect={false}
              value={formik.values.cidade}
              onFocus={() => formik.setFieldTouched("cidade")}
              onChangeText={formik.handleChange("cidade")}
            />
          </View>
          {formik.touched.cidade && formik.errors.cidade ? (
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text testID="error-cidade" style={styles.error}>
                {formik.errors.cidade}
              </Text>
            </View>
          ) : null}

          <View style={{ ...styles.input }}>
            <TextInput
              style={{
                ...styles.inputText,
              }}
              placeholder="Numero"
              placeholderTextColor="#666666"
              keyboardType="numeric"
              autoCorrect={false}
              value={formik.values.numero}
              onFocus={() => formik.setFieldTouched("numero")}
              onChangeText={formik.handleChange("numero")}
            />
          </View>
          {formik.touched.numero && formik.errors.numero ? (
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text testID="error-numero" style={styles.error}>
                {formik.errors.numero}
              </Text>
            </View>
          ) : null}

          <View style={{ ...styles.input }}>
            <TextInput
              style={{
                ...styles.inputText,
              }}
              placeholder="Complemento"
              placeholderTextColor="#666666"
              autoCorrect={false}
              value={formik.values.complemento}
              onFocus={() => formik.setFieldTouched("complemento")}
              onChangeText={formik.handleChange("complemento")}
            />
          </View>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{
                ...stylesGlobal.button,
                opacity: formik.touched.cep === undefined? 0.5 : !formik.isValid ? 0.5: 1
              }}
              onPress={() => formik.handleSubmit()}
              disabled={formik.touched.cep === undefined? true : !formik.isValid }
            >
              <Text style={stylesGlobal.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity
            style={{ ...styles.buttonDocument }}
            onPress={() => setIsModalVisible(!isModalVisible)}
          >
            <Text style={styles.buttonDocumentText}>
              {!!stateSelected ? stateSelected : "Selecione um estado"}
            </Text>
            <Feather
              name="arrow-down"
              size={20}
              style={{
                color: "white",
                paddingHorizontal: 15,
              }}
            />
          </TouchableOpacity> */}
          {/* <Modal
            transparent={true}
            animationType={"fade"}
            visible={isModalVisible}
          >
            <ModalPicker
              setIsModalVisible={setIsModalVisible}
              setTypeSelected={setStateSelected}
              data={MockService.getStates()}
            />
          </Modal> */}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2",
    paddingBottom: 5,
  },
  error: {
    color: "white",
    backgroundColor: "red",
    fontSize: 16,
    padding: 2,
    borderRadius: 3,
    marginTop: 2,
  },
  buttonDocument: {
    backgroundColor: "#302E4D",
    marginTop: 10,
    width: 300,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
  },
  buttonDocumentText: {
    padding: 8,
    alignItems: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
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

export default RegisterThree;
