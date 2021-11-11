import React from "react";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Modal,
} from "react-native";
import stylesGlobal from "../../styles-global";
import { useFormik } from "formik";
import { IControlProgress, IData } from "..";
import { registerTwoForm } from "./registerTwo.form";
import { UploadService } from "../../../service/api/upload-service";
import { SkillService } from "../../../service/api/skill-service";
import ModalPicker from "../../../components/ModalPicker";

interface IRegisterTwo extends IControlProgress {
  data: IData | undefined;
  setData: React.Dispatch<React.SetStateAction<IData | undefined>>;
}

const RegisterTwo = ({ index, setIndex, data, setData }: IRegisterTwo) => {
  const [imageDocument, setImageDocument] = React.useState<any | null>(null);
  const [imageProfile, setImageProfile] = React.useState<any | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [skills, setSkills] = React.useState<string[]>([]);
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);
  const [skillSelected, setSkillSelected] = React.useState<string | null>("");

  const pickImage = async (type: string) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      let name = type === "imageProfile" ? "PerfilImage" : "DocImage";
      const image = {
        name,
        size: result.width,
        uri: result.uri,
        type: "application/octet-stream",
      } as any;
      const formData = new FormData();
      formData.append("file", image);
      type === "imageProfile"
        ? setImageProfile(formData)
        : setImageDocument(formData);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      cpf: "",
      rg: "",
      cnpj: "",
      accountNumber: "",
    },
    validationSchema: registerTwoForm,
    onSubmit: async (values, { resetForm }) => {
      if (data) {
        setIsLoading(true);
        setData({
          ...data,
          cpf: values.cpf,
          rg: values.rg,
          cnpj: values.cnpj,
          accountNumber: values.accountNumber,
          imageProfile: UploadService.uploadImage(imageProfile),
          imageDocument: UploadService.uploadImage(imageDocument),
          workPlaces: ["Curitiba"],
          skillSelected: String(skillSelected),
          sex: "i",
        });
      }
      setTimeout(() => {
        setIsLoading(false);
        setIndex((index += 1));
      }, 100);
      resetForm();
    },
  });

  React.useEffect(() => {
    SkillService.getAllSkills().then((skills) => {
      setSkills(skills.map((skill) => skill.name));
    });
  }, []);

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
                  formik.touched.cpf && formik.errors.cpf ? "red" : "#302E4D",
              }}
              placeholder="CPF"
              placeholderTextColor="#666666"
              keyboardType="numeric"
              autoCorrect={false}
              value={formik.values.cpf}
              onFocus={() => formik.setFieldTouched("cpf")}
              onChangeText={formik.handleChange("cpf")}
            />
          </View>
          {formik.touched.cpf && formik.errors.cpf ? (
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text testID="error-cpf" style={styles.error}>
                {formik.errors.cpf}
              </Text>
            </View>
          ) : null}

          <View style={{ ...styles.input }}>
            <TextInput
              style={{
                ...styles.inputText,
                borderColor:
                  formik.touched.rg && formik.errors.rg ? "red" : "#302E4D",
              }}
              placeholder="RG"
              placeholderTextColor="#666666"
              keyboardType="numeric"
              autoCorrect={false}
              value={formik.values.rg}
              onFocus={() => formik.setFieldTouched("rg")}
              onChangeText={formik.handleChange("rg")}
            />
          </View>
          {formik.touched.rg && formik.errors.rg ? (
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text testID="error-rg" style={styles.error}>
                {formik.errors.rg}
              </Text>
            </View>
          ) : null}

          <View style={{ ...styles.input }}>
            <TextInput
              style={{
                ...styles.inputText,
                borderColor:
                  formik.touched.cnpj && formik.errors.cnpj ? "red" : "#302E4D",
              }}
              placeholder="cnpj"
              placeholderTextColor="#666666"
              keyboardType="numeric"
              autoCorrect={false}
              value={formik.values.cnpj}
              onFocus={() => formik.setFieldTouched("cnpj")}
              onChangeText={formik.handleChange("cnpj")}
            />
          </View>
          {formik.touched.cnpj && formik.errors.cnpj ? (
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text testID="error-cnpj" style={styles.error}>
                {formik.errors.cnpj}
              </Text>
            </View>
          ) : null}

          <View style={{ ...styles.input }}>
            <TextInput
              style={{
                ...styles.inputText,
                borderColor:
                  formik.touched.accountNumber && formik.errors.accountNumber
                    ? "red"
                    : "#302E4D",
              }}
              placeholder="Chave Pix"
              placeholderTextColor="#666666"
              keyboardType="default"
              autoCorrect={false}
              value={formik.values.accountNumber}
              onFocus={() => formik.setFieldTouched("accountNumber")}
              onChangeText={formik.handleChange("accountNumber")}
            />
          </View>
          {formik.touched.accountNumber && formik.errors.accountNumber ? (
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text testID="error-accountNumber" style={styles.error}>
                {formik.errors.accountNumber}
              </Text>
            </View>
          ) : null}

          <TouchableOpacity
            style={{ ...styles.buttonDocument }}
            onPress={() => setIsModalVisible(true)}
          >
            <Text
              style={{
                ...styles.buttonDocumentText,
                opacity: !!skillSelected ? 1 : 0.5,
              }}
            >
              {!!skillSelected ? "Vocação adicionada" : "Escolha sua vocação"}
            </Text>
            <Feather
              name="check"
              color="white"
              size={30}
              style={{
                marginHorizontal: 20,
                opacity: !!skillSelected ? 1 : 0.5,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ ...styles.buttonDocument }}
            onPress={() => pickImage("imageDocument")}
          >
            <Text
              style={{
                ...styles.buttonDocumentText,
                opacity: !!imageDocument ? 1 : 0.5,
              }}
            >
              {!!imageDocument
                ? "Documento adicionado"
                : "Adicione um documento"}
            </Text>
            <Feather
              name="check"
              color="white"
              size={30}
              style={{
                marginHorizontal: 20,
                opacity: !!imageDocument ? 1 : 0.5,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ ...styles.buttonDocument }}
            onPress={() => pickImage("imageProfile")}
          >
            <Text
              style={{
                ...styles.buttonDocumentText,
                opacity: !!imageProfile ? 1 : 0.5,
              }}
            >
              {!!imageProfile
                ? "Imagem adicionada"
                : "Adicione uma imagem de perfil"}
            </Text>
            <Feather
              name="check"
              color="white"
              size={30}
              style={{
                marginHorizontal: 20,
                opacity: !!imageProfile ? 1 : 0.5,
              }}
            />
          </TouchableOpacity>

          <Modal
            transparent={true}
            animationType={"fade"}
            visible={isModalVisible}
          >
            <ModalPicker
              setIsModalVisible={setIsModalVisible}
              setTypeSelected={setSkillSelected}
              data={skills}
            />
          </Modal>
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
                    formik.touched.cpf === undefined ||
                    imageDocument === null ||
                    imageProfile === null ||
                    skillSelected === null
                      ? 0.5
                      : !formik.isValid
                      ? 0.5
                      : 1,
                }}
                onPress={() => formik.handleSubmit()}
                disabled={
                  formik.touched.cpf === undefined ||
                  imageDocument === null ||
                  imageProfile === null ||
                  skillSelected === null
                    ? true
                    : !formik.isValid
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

export default RegisterTwo;
