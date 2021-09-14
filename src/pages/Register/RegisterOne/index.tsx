import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import stylesGlobal from "../../styles-global";
import { useFormik } from "formik";
import { personForm } from "./person.form";
import { Ionicons } from "@expo/vector-icons";
import { IControlProgress } from "..";

const FormPerson = ({ index, setIndex }: IControlProgress) => {
  const [hidePass, setHidePass] = useState<boolean>(true);
  const [confirmHidePass, setConfirmHidePass] = useState<boolean>(true);

  const formik = useFormik({
    initialValues: {
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
      phone: "",
      name: "",
    },
    validationSchema: personForm,
    onSubmit: (values, { resetForm }) => {
      setTimeout(() => {
        setIndex((index += 1));
      }, 100)
      //Enivar para o backend
      console.log(values);
      resetForm();
    },
  });

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
                borderColor:
                  formik.touched.phone && formik.errors.phone
                    ? "red"
                    : "#302E4D",
              }}
              placeholder="Telefone"
              placeholderTextColor="#666666"
              keyboardType="phone-pad"
              autoCorrect={false}
              value={formik.values.phone}
              onFocus={() => formik.setFieldTouched("phone")}
              onChangeText={formik.handleChange("phone")}
            />
          </View>
          {formik.touched.phone && formik.errors.phone ? (
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text testID="error-phone" style={styles.error}>
                {formik.errors.phone}
              </Text>
            </View>
          ) : null}

          <View style={{ ...styles.input }}>
            <TextInput
              style={{
                ...styles.inputText,
                borderColor:
                  formik.touched.name && formik.errors.name ? "red" : "#302E4D",
              }}
              placeholder="Nome"
              placeholderTextColor="#666666"
              keyboardType="default"
              autoCorrect={false}
              value={formik.values.name}
              onFocus={() => formik.setFieldTouched("name")}
              onChangeText={formik.handleChange("name")}
            />
          </View>
          {formik.touched.name && formik.errors.name ? (
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text testID="error-name" style={styles.error}>
                {formik.errors.name}
              </Text>
            </View>
          ) : null}

          <View style={{ ...styles.input }}>
            <TextInput
              style={{
                ...styles.inputText,
                borderColor:
                  formik.touched.email && formik.errors.email
                    ? "red"
                    : "#302E4D",
              }}
              placeholder="E-mail"
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
              placeholder="Confirmação de e-mail"
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
          <View style={stylesGlobal.inputAreaPassword}>
            <TextInput
              style={{
                ...stylesGlobal.inputPass,
                borderColor:
                  formik.touched.password && formik.errors.password
                    ? "red"
                    : "#302E4D",
              }}
              secureTextEntry={hidePass}
              value={formik.values.password}
              onFocus={() => formik.setFieldTouched("password")}
              onChangeText={formik.handleChange("password")}
              placeholder="Senha"
              placeholderTextColor="#666666"
            />
            <TouchableOpacity
              style={stylesGlobal.iconEye}
              onPress={() => setHidePass(!hidePass)}
            >
              {hidePass ? (
                <Ionicons name="eye" color="#FFF" size={25} />
              ) : (
                <Ionicons name="eye-off" color="#FFF" size={25} />
              )}
            </TouchableOpacity>
          </View>
          {formik.touched.password && formik.errors.password ? (
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text testID="error-password" style={styles.error}>
                {formik.errors.password}
              </Text>
            </View>
          ) : null}

          <View style={stylesGlobal.inputAreaPassword}>
            <TextInput
              style={{
                ...stylesGlobal.inputPass,
                borderColor:
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? "red"
                    : "#302E4D",
              }}
              secureTextEntry={confirmHidePass}
              value={formik.values.confirmPassword}
              onFocus={() => formik.setFieldTouched("confirmPassword")}
              onChangeText={formik.handleChange("confirmPassword")}
              placeholder="Senha"
              placeholderTextColor="#666666"
            />
            <TouchableOpacity
              style={stylesGlobal.iconEye}
              onPress={() => setConfirmHidePass(!confirmHidePass)}
            >
              {confirmHidePass ? (
                <Ionicons name="eye" color="#FFF" size={25} />
              ) : (
                <Ionicons name="eye-off" color="#FFF" size={25} />
              )}
            </TouchableOpacity>
          </View>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text testID="error-confirmPassword" style={styles.error}>
                {formik.errors.confirmPassword}
              </Text>
            </View>
          ) : null}

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{
                ...stylesGlobal.button,
                opacity:
                  formik.touched.email === undefined
                    ? 0.5
                    : !formik.isValid
                    ? 0.5
                    : 1,
              }}
              onPress={() => formik.handleSubmit()}
              disabled={
                formik.touched.email === undefined ? true : !formik.isValid
              }
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

export default FormPerson;
