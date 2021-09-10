import React from "react";
import { Text, View, StyleSheet, Dimensions, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/core";
import Progress from "../../components/progress";
import FormPerson from "./RegisterOne";

const { height } = Dimensions.get("window");

export interface IControlProgress {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ControlRegister = ({ index, setIndex }: IControlProgress) => {
  switch (index) {
    case 0:
      return <FormPerson index={index} setIndex={setIndex} />;
    case 1:
      return <View></View>;
    case 2:
      return <View></View>;
    default:
      return <View></View>;
  }
};

const Register = () => {
  const navigation = useNavigation();

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (index === 3) navigation.navigate("Login");
  }, [index]);

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 50, alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}> Cadastro</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: 25 }}
      >
        <Progress step={index} steps={3} height={19} marginHorizontal={5} />
        <ControlRegister index={index} setIndex={setIndex} />
      </ScrollView>
    </View>
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

  //   ------------------------ New  ^ ^----------

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

  // camera: {
  //   opacity: 0.7,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   borderWidth: 1,
  //   borderColor: "#FFF",
  //   borderRadius: 10,
  // },
  // modal: {
  //   backgroundColor: "#FFF",
  //   marginTop: height - 200,
  //   height: 1000,
  //   width: "100%",
  //   borderRadius: 20,
  //   elevation: 10,
  //   alignItems: "center",
  //   borderWidth: 5,
  //   borderColor: "#302E4D",
  // },

  // title: {
  //   marginTop: 20,
  //   fontSize: 20,
  //   color: "black",
  //   fontWeight: "bold",
  // },

  // buttonArea: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   margin: 20,
  // },

  // buttonModal: {
  //   backgroundColor: "#302E4D",
  //   marginTop: 10,
  //   width: 100,
  //   height: 40,
  //   flexDirection: "row",
  //   borderRadius: 10,
  //   alignItems: "center",
  // },
  // buttonDocument: {
  //   backgroundColor: "#302E4D",
  //   marginTop: 10,
  //   width: 300,
  //   height: 50,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   borderRadius: 10,
  //   overflow: "hidden",
  //   alignItems: "center",
  // },
  // buttonDocumentText: {
  //   padding: 8,
  //   alignItems: "center",
  //   color: "white",
  //   fontSize: 16,
  //   fontWeight: "bold",
  // },
  // buttonPicker: {
  //   backgroundColor: "#302E4D",
  //   marginTop: 10,
  //   width: 300,
  //   height: 50,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   borderRadius: 10,
  //   overflow: "hidden",
  //   alignItems: "center",
  // },

  // buttonTextPicker: {
  //   padding: 8,
  //   alignItems: "center",
  //   color: "white",
  //   fontSize: 16,
  //   fontWeight: "bold",
  // },
});

export default Register;

// return (
//     <>
//         <ScrollView
//             style={{backgroundColor: '#fff'}}
//             showsVerticalScrollIndicator={false}
//         >
//             <View style={stylesGlobal.container}>
//                 <TouchableOpacity
//                     onPress={ () => pickImage('imagePerfil') }
//                 >
//                     {image === null
//                         ? <ImageBackground
//                             style={{...stylesGlobal.logo, marginTop: 20, width: 200, height: 200}}
//                             source={require('../../assets/avatar.jpg')}
//                         >
//                             <View style={{
//                                 flex: 1,
//                                 justifyContent: 'center',
//                                 alignItems: 'center'
//                             }}>
//                                 <Icon name="camera"  size={35} color="#FFF" style={styles.camera}/>
//                             </View>
//                         </ImageBackground >
//                         : <Image  source={ {uri: image }} style={{...stylesGlobal.logo,  marginTop: 20, width: 170, height: 170}}/>
//                     }
//                 </TouchableOpacity>
//                 <Text style={{...stylesGlobal.headerText, marginTop: 30}}>Reparo Rápido</Text>
//                 <View style={stylesGlobal.input}>
//                     <TextInput
//                         style={stylesGlobal.inputText}
//                         onChangeText={(val) => setName(val)}
//                         placeholder='Nome'
//                         placeholderTextColor='#605C99'
//                     />
//                 </View>
//                 <View style={stylesGlobal.input}>
//                     <TextInput
//                         placeholder='CPF'
//                         placeholderTextColor='#605C99'
//                         keyboardType='number-pad'
//                         autoCorrect={false}
//                         style={stylesGlobal.inputText}
//                         onChangeText={(val) => setCpf(val)}
//                     />

//                 </View>
//                 <View style={stylesGlobal.input}>
//                     <TextInput
//                         placeholder='CNPJ'
//                         placeholderTextColor='#605C99'
//                         keyboardType='number-pad'
//                         autoCorrect={false}
//                         style={stylesGlobal.inputText}
//                         onChangeText={(val) => setCnpj(val)}
//                     />

//                 </View>

//                 <View style={stylesGlobal.input}>
//                     <TextInput
//                         placeholder='RG'
//                         placeholderTextColor='#605C99'
//                         keyboardType='number-pad'
//                         autoCorrect={false}
//                         style={stylesGlobal.inputText}
//                         onChangeText={(val) => setRg(val)}
//                     />

//                 </View>

//                 {/* <View style={stylesGlobal.input}>
//                     <TextInput
//                         placeholder='Número da conta bancária'
//                         placeholderTextColor='#605C99'
//                         keyboardType='number-pad'
//                         autoCorrect={false}
//                         style={stylesGlobal.inputText}
//                         onChangeText={(val) => setBankAccountNumber(val)}
//                     />

//                 </View> */}

//                 <View style={stylesGlobal.input}>
//                     <TextInput
//                         placeholder='Telefone'
//                         placeholderTextColor='#605C99'
//                         keyboardType='number-pad'
//                         autoCorrect={false}
//                         style={stylesGlobal.inputText}
//                         onChangeText={(val) => setPhone(val)}
//                     />

//                 </View>

//                 <TouchableOpacity
//                     style={{...styles.buttonDocument}}
//                     onPress={ () => pickImage('imageDocument') }
//                 >
//                     <Text style={{...styles.buttonDocumentText, opacity: !!imageDocument ? 1 : 0.5,}}>{!!imageDocument ? 'Documento adicionado' : 'Adicione um documento'}</Text>
//                     <Feather
//                         name='check'
//                         color='white'
//                         size={30}
//                         style={{
//                             marginHorizontal: 20,
//                             opacity: !!imageDocument ? 1 : 0.5,
//                         }}
//                     />
//                 </TouchableOpacity>

//                 <View style={stylesGlobal.input}>
//                     <TextInput
//                         keyboardType= 'email-address'
//                         style={stylesGlobal.inputText}
//                         onChangeText={(val) => setEmail(val)}
//                         placeholder='E-mail'
//                         placeholderTextColor='#605C99'
//                     />
//                 </View>

//                 <View style={stylesGlobal.input}>
//                     <TextInput
//                         keyboardType= 'email-address'
//                         style={stylesGlobal.inputText}
//                         onChangeText={(val) => setConEmail(val)}
//                         placeholder='Confirmação de e-mail'
//                         placeholderTextColor='#605C99'
//                     />
//                 </View>

//             <View style={stylesGlobal.inputAreaPassword}>
//                     <TextInput
//                         style={stylesGlobal.inputPass}
//                         secureTextEntry={hidePass}
//                         onChangeText={(val) => setPassword(val)}
//                         placeholder='Senha'
//                         placeholderTextColor='#605C99'
//                     />
//                     <TouchableOpacity style={stylesGlobal.iconEye} onPress={() => setHidePass(!hidePass)}>
//                         {
//                             hidePass?
//                                 <Ionicons name="eye" color="#FFF" size={25}/>
//                             :
//                                 <Ionicons name="eye-off" color="#FFF" size={25}/>
//                         }

//                     </TouchableOpacity>
//                 </View>
//                 <View style={stylesGlobal.inputAreaPassword}>
//                     <TextInput
//                         style={stylesGlobal.inputPass}
//                         secureTextEntry={hideConPass}
//                         onChangeText={(val) => setConPassword(val)}
//                         placeholder='Confirmação de senha'
//                         placeholderTextColor='#605C99'
//                     />
//                     <TouchableOpacity style={stylesGlobal.iconEye} onPress={() => setHideConPass(!hideConPass)}>
//                         {
//                             hideConPass?
//                                 <Ionicons name="eye" color="#FFF" size={25}/>
//                             :
//                                 <Ionicons name="eye-off" color="#FFF" size={25}/>
//                         }

//                     </TouchableOpacity>
//                 </View>
//                 <TouchableOpacity
//                     style={{...styles.buttonPicker}}
//                     onPress={ () => setIsModalVisible(!isModalVisible) }
//                 >
//                     <Text style={styles.buttonTextPicker}>{typeSelected === '' ? 'Selecione o tipo de serviço' : typeSelected}</Text>
//                     <Feather
//                         name='arrow-down'
//                         size={20}
//                         style={{
//                             color: 'white',
//                             paddingHorizontal: 15
//                         }}
//                     />
//                 </TouchableOpacity>

//                 <Modal
//                     transparent={true}
//                     animationType={'fade'}
//                     visible={isModalVisible}
//                 >
//                     <ModalPicker
//                         setIsModalVisible={setIsModalVisible}
//                         setTypeSelected={setTypeSelected}
//                         data={types}
//                         color={'#302E4D'}
//                     />

//                 </Modal>

//                 <TouchableOpacity
//                     style={{...stylesGlobal.button, margin: 25, opacity: opacityButton}}
//                     onPress={ emailAndPasswordEqual }
//                     disabled={disableButton}
//                 >
//                     <Text style={stylesGlobal.buttonText}>Pré-cadastro</Text>
//                 </TouchableOpacity>
//             </View>
//         </ScrollView>

//         <Modal
//             animationType='slide'
//             transparent={true}
//             visible={visibleModalTwo}
//         >
//             <View style={styles.modal}>
//                 <Text style={styles.title}>{messageModal}</Text>
//                 <View style={styles.buttonArea}>
//                     <TouchableOpacity
//                         style={styles.buttonModal}
//                         onPress={() => setVisibleModalTwo(false) }
//                     >
//                         <Text style={stylesGlobal.buttonText}>Ajustar</Text>
//                     </TouchableOpacity>
//                 </View>

//             </View>
//         </Modal>
//         <Modal
//             transparent={true}
//             animationType={'fade'}
//             visible={isModalVisibleRegister}
//         >
//             <ModalConfirmRegister
//                 setIsModalVisible={setIsModalVisibleRegister}
//             />

//         </Modal>

//     </>
// )
