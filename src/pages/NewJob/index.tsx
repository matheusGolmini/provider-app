import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import stylesGlobal from "../styles-global";
import { useFormik } from "formik";
import { newJobForm } from "./newJob.form";
import TabBar from "../../components/TabBar";
import ComponentDateTimePicker from "../../components/DateTimePicker";
import { ConstractService } from "../../service/api/contract-service";
import { text } from "../../mocks";

const NewJob = () => {
  const [initDate, setInitDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      confirmEmail: "",
      sortDescription: "",
      description: "",
      serviceValue: "",
    },
    validationSchema: newJobForm,
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsLoading(true);
        await ConstractService.createContract({
          amountTotal: values.serviceValue,
          briefDescription: values.sortDescription,
          longDescription: values.description,
          clientEmail: values.email,
          endDate: String(endDate),
          startDate: String(initDate),
          agreement: text,
        });
        setIsLoading(false);
        Alert.alert("Sucesso", "Servico cadastrado com sucesso! Aguarda a análise da nossa equipe.");
        setEndDate(null);
        setInitDate(null);
        resetForm();
      } catch (error) {
        setIsLoading(false);
        Alert.alert("Erro", "Erro ao salvar o serviço, tente mais tarde!");
      }
    },
  });


  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <TabBar />
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#fff",
          marginBottom: 250,
        }}
      >
        <Text style={styles.text}> Adicione um serviço </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginBottom: 100 }}>
            <View style={{ ...styles.input }}>
              <TextInput
                style={{
                  ...styles.inputText,
                  borderColor:
                    formik.touched.email && formik.errors.email
                      ? "red"
                      : "#302E4D",
                }}
                placeholder="E-mail do cliente"
                placeholderTextColor="#666666"
                keyboardType="email-address"
                autoCorrect={false}
                value={formik.values.email}
                onFocus={() => formik.setFieldTouched("email")}
                onChangeText={formik.handleChange("email")}
              />
            </View>
            {formik.touched.email && formik.errors.email ? (
              <View
                style={{
                  alignItems: "flex-start",
                }}
              >
                <Text testID="error-email" style={styles.error}>
                  {formik.errors.email}
                </Text>
              </View>
            ) : null}

            <View style={{ ...styles.input }}>
              <TextInput
                style={{
                  ...styles.inputText,
                  borderColor:
                    formik.touched.confirmEmail && formik.errors.confirmEmail
                      ? "red"
                      : "#302E4D",
                }}
                placeholder="Confirmar e-mail do cliente"
                placeholderTextColor="#666666"
                keyboardType="email-address"
                autoCorrect={false}
                value={formik.values.confirmEmail}
                onFocus={() => formik.setFieldTouched("confirmEmail")}
                onChangeText={formik.handleChange("confirmEmail")}
              />
            </View>
            {formik.touched.confirmEmail && formik.errors.confirmEmail ? (
              <View
                style={{
                  alignItems: "flex-start",
                }}
              >
                <Text testID="error-email" style={styles.error}>
                  {formik.errors.confirmEmail}
                </Text>
              </View>
            ) : null}

            <View style={styles.input}>
              <TextInput
                style={{
                  ...styles.inputText,
                  borderColor:
                    formik.touched.sortDescription &&
                    formik.errors.sortDescription
                      ? "red"
                      : "#302E4D",
                }}
                placeholder="Descrição curta"
                placeholderTextColor="#666666"
                value={formik.values.sortDescription}
                autoCorrect={false}
                onFocus={() => formik.setFieldTouched("sortDescription")}
                onChangeText={formik.handleChange("sortDescription")}
              />
            </View>
            {formik.touched.sortDescription && formik.errors.sortDescription ? (
              <View
                style={{
                  alignItems: "flex-start",
                }}
              >
                <Text testID="error-email" style={styles.error}>
                  {formik.errors.sortDescription}
                </Text>
              </View>
            ) : null}

            <View style={styles.input}>
              <TextInput
                style={{
                  ...styles.inputText,
                  borderColor:
                    formik.touched.description && formik.errors.description
                      ? "red"
                      : "#302E4D",
                }}
                placeholder="Descrição completa"
                placeholderTextColor="#666666"
                value={formik.values.description}
                autoCorrect={false}
                onFocus={() => formik.setFieldTouched("description")}
                onChangeText={formik.handleChange("description")}
              />
            </View>
            {formik.touched.description && formik.errors.description ? (
              <View
                style={{
                  alignItems: "flex-start",
                }}
              >
                <Text testID="error-email" style={styles.error}>
                  {formik.errors.description}
                </Text>
              </View>
            ) : null}

            <View style={styles.input}>
              <TextInput
                style={{
                  ...styles.inputText,
                  borderColor:
                    formik.touched.serviceValue && formik.errors.serviceValue
                      ? "red"
                      : "#302E4D",
                }}
                placeholder="Valor do serviço"
                placeholderTextColor="#666666"
                value={formik.values.serviceValue}
                keyboardType={"number-pad"}
                autoCorrect={false}
                onFocus={() => formik.setFieldTouched("serviceValue")}
                onChangeText={formik.handleChange("serviceValue")}
              />
            </View>
            {formik.touched.serviceValue && formik.errors.serviceValue ? (
              <View
                style={{
                  alignItems: "flex-start",
                }}
              >
                <Text testID="error-email" style={styles.error}>
                  {formik.errors.serviceValue}
                </Text>
              </View>
            ) : null}

            <ComponentDateTimePicker
              endDate={endDate}
              initDate={initDate}
              setEndDate={setEndDate}
              setInitDate={setInitDate}
            />

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
                  style={{
                    ...stylesGlobal.button,
                    opacity:
                      formik.touched.email === undefined ||
                      !initDate ||
                      !endDate
                        ? 0.5
                        : !formik.isValid
                        ? 0.5
                        : 1,
                  }}
                  onPress={() => formik.handleSubmit()}
                  disabled={
                    formik.touched.email === undefined || !initDate || !endDate
                      ? true
                      : !formik.isValid
                  }
                >
                  <Text style={stylesGlobal.buttonText}>Salvar</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default NewJob;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#302E4D",
  },
  input: {
    marginTop: 10,
    width: 300,
    height: 50,
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
  error: {
    color: "white",
    backgroundColor: "red",
    fontSize: 16,
    padding: 2,
    borderRadius: 3,
    marginTop: 2,
  },
});
