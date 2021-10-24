import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import stylesGlobal from "../styles-global";
import { Ionicons } from "@expo/vector-icons";
import { useFormik } from "formik";
import { loginForm } from "./login.form";
import { ProviderService } from "../../service/api/provider-service";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const [hidePass, setHidePass] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingToken, setIsLoadingToken] = useState<boolean>(false);
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginForm,
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsLoading(true);
        await ProviderService.login({
          username: values.email.toLocaleLowerCase(),
          password: values.password,
        });
        setIsLoading(false);
        resetForm();
        navigation.navigate("MainTab");
      } catch (error) {
        setIsLoading(false);
        Alert.alert("Login", "E-mail ou senha inválidos");
      }
    },
  });

  function navigateToRegister() {
    navigation.navigate("Register");
  }

  async function loginToken(token?: string | null) {
    if (token) {
      setIsLoadingToken(true);
      try {
        await ProviderService.loginToken({ token });
        setIsLoadingToken(false);
        navigation.navigate("MainTab");
      } catch (error) {
        setIsLoadingToken(false);
      }
    }
  }

  useEffect(() => {
    AsyncStorage.getItem("TOKEN").then((token) => {
      loginToken(token);
    });
  }, []);

  return (
    <View style={stylesGlobal.container}>
      {isLoadingToken && (
        <>
          <Image
            style={stylesGlobal.logo}
            source={require("../../assets/logo.jpg")}
          />
          <ActivityIndicator
            size="large"
            color="#605C99"
            style={{ marginTop: 20 }}
          />
        </>
      )}
      {!isLoadingToken && (
        <>
          <Text style={{ ...stylesGlobal.headerText, marginTop: 20 }}>
            Reparo Rápido
          </Text>
          <Image
            style={stylesGlobal.logo}
            source={require("../../assets/logo.jpg")}
          />

          <Text style={{ ...stylesGlobal.headerText, marginTop: 10 }}>
            Prestador de Serviço
          </Text>
          <View style={{ marginBottom: 0, width: 300 }}>
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

            {isLoading && (
              <ActivityIndicator
                size="large"
                color="#605C99"
                style={{ marginTop: 20 }}
              />
            )}

            {!isLoading && (
              <View style={{ marginTop: 20 }}>
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
                  <Text style={stylesGlobal.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={stylesGlobal.textClick}
                  onPress={navigateToRegister}
                >
                  <Text style={styles.buttonText}>Inscreva-se!</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#605C99",
    fontSize: 18,
    fontWeight: "bold",
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

export default Login;
