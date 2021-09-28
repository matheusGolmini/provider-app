import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "../styles";
import stylesGlobal from "../../styles-global";
import { Ionicons } from "@expo/vector-icons";
import { useFormik } from "formik";
import { passwordForm } from "./password.form";
import { ProviderService } from "../../../service/api/provider-service";

const ProfileEditPassword = () => {
  const [hidePass, setHidePass] = useState<boolean>(true);
  const [hidePassTwo, setHidePassTwo] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
      disabledButton: true,
    },
    validationSchema: passwordForm,
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsLoading(true);
        await ProviderService.upadatePerson({ password: values.password });
        setIsLoading(false);
        Alert.alert("Sucesso", "Senha alterada!");
        resetForm();
      } catch (error) {
        setIsLoading(false);
        Alert.alert("Erro", "Sistema com problema");
      }
    },
  });


  return (
    <>
      <View style={{ backgroundColor: "#fff" }}>
        <View style={styles.container}>
          <View
            style={{
              ...styles.action,
              borderBottomColor:
                formik.touched.password && formik.errors.password
                  ? "red"
                  : "#F2F2F2",
            }}
          >
            <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
              {hidePass ? (
                <Ionicons
                  name="eye"
                  color={
                    formik.touched.password && formik.errors.password
                      ? "red"
                      : "#605C99"
                  }
                  size={25}
                />
              ) : (
                <Ionicons
                  name="eye-off"
                  color={
                    formik.touched.password && formik.errors.password
                      ? "red"
                      : "#605C99"
                  }
                  size={25}
                />
              )}
            </TouchableOpacity>
            <TextInput
              placeholder="Senha"
              placeholderTextColor="#666666"
              autoCorrect={false}
              secureTextEntry={hidePass}
              value={formik.values.password}
              onFocus={() => formik.setFieldTouched("password")}
              onChangeText={formik.handleChange("password")}
              style={{ marginLeft: 20, fontSize: 18 }}
            />
          </View>

          {formik.touched.password && formik.errors.password ? (
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text
                testID="error-password"
                style={{
                  color: "white",
                  backgroundColor: "red",
                  fontSize: 16,
                  marginHorizontal: 20,
                  padding: 2,
                  borderRadius: 3,
                }}
              >
                {formik.errors.password}
              </Text>
            </View>
          ) : null}
          <View
            style={{
              ...styles.action,
              borderBottomColor:
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? "red"
                  : "#F2F2F2",
            }}
          >
            <TouchableOpacity onPress={() => setHidePassTwo(!hidePassTwo)}>
              {hidePassTwo ? (
                <Ionicons
                  name="eye"
                  color={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? "red"
                      : "#605C99"
                  }
                  size={25}
                />
              ) : (
                <Ionicons
                  name="eye-off"
                  color={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? "red"
                      : "#605C99"
                  }
                  size={25}
                />
              )}
            </TouchableOpacity>
            <TextInput
              placeholder="Confirmar Senha"
              placeholderTextColor="#666666"
              autoCorrect={false}
              secureTextEntry={hidePassTwo}
              value={formik.values.confirmPassword}
              onFocus={() => formik.setFieldTouched("confirmPassword")}
              onChangeText={formik.handleChange("confirmPassword")}
              style={{ marginLeft: 20, fontSize: 18 }}
            />
          </View>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text
                testID="error-password"
                style={{
                  color: "white",
                  backgroundColor: "red",
                  fontSize: 16,
                  marginHorizontal: 20,
                  padding: 2,
                  borderRadius: 3,
                }}
              >
                {formik.errors.confirmPassword}
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
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  ...stylesGlobal.button,
                  opacity:
                    formik.touched.password === undefined
                      ? 0.5
                      : !formik.isValid
                      ? 0.5
                      : 1,
                }}
                onPress={() => formik.handleSubmit()}
                disabled={
                  formik.touched.password === undefined ? true : !formik.isValid
                }
              >
                <Text style={stylesGlobal.buttonText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </>
  );
};

export default ProfileEditPassword;
