import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import stylesGlobal from "../../styles-global";
import { useFormik } from "formik";
import { IControlProgress } from "..";

const RegisterThree = ({ index, setIndex }: IControlProgress) => {
  const [control, setControl] = React.useState(true);

  const formik = useFormik({
    initialValues: {
      logradouro: "",
      bairro: "",
      cidade: "",
      uf: "",
      cep: "",
    },
    onSubmit: (values, { resetForm }) => {
      //Enivar para o backend
      setIndex((index += 1));
      console.log(values);
      resetForm();
    },
  });

  React.useEffect(() => {
    if (
      formik.values.logradouro !== "" &&
      formik.values.bairro !== "" &&
      formik.values.cidade !== "" &&
      formik.values.cep !== "" &&
      formik.values.uf !== ""
    ) {
      setControl(false);
    } else {
      setControl(true);
    }
  }, [
    formik.values.logradouro,
    formik.values.bairro,
    formik.values.cidade,
    formik.values.cep,
    formik.values.uf,
  ]);

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
              placeholder="Logradouro"
              placeholderTextColor="#666666"
              keyboardType="default"
              autoCorrect={false}
              value={formik.values.logradouro}
              onFocus={() => formik.setFieldTouched("logradouro")}
              onChangeText={formik.handleChange("logradouro")}
            />
          </View>

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

          <View style={{ ...styles.input }}>
            <TextInput
              style={{
                ...styles.inputText,
              }}
              placeholder="Estado"
              placeholderTextColor="#666666"
              keyboardType="default"
              autoCorrect={false}
              value={formik.values.uf}
              onFocus={() => formik.setFieldTouched("uf")}
              onChangeText={formik.handleChange("uf")}
            />
          </View>

          <View style={{ ...styles.input }}>
            <TextInput
              style={{
                ...styles.inputText,
              }}
              placeholder="CEP"
              placeholderTextColor="#666666"
              keyboardType="default"
              autoCorrect={false}
              value={formik.values.cep}
              onFocus={() => formik.setFieldTouched("cep")}
              onChangeText={formik.handleChange("cep")}
            />
          </View>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{
                ...stylesGlobal.button,
                opacity: control ? 0.5 : 1,
              }}
              onPress={() => formik.handleSubmit()}
              disabled={control}
            >
              <Text style={stylesGlobal.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
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
