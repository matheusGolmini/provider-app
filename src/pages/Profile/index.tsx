import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";

import styles from "./styles";
import { IClient } from "../../interfaces/client";
import { useNavigation } from "@react-navigation/core";
import CreateTicket from "../../components/createTicket";
import Carousel from "../../components/carousel/carousel";
import { IServicesImages } from "../../interfaces/servicesImges";
import { servicesImages } from "../../mocks/mock-images-jobs";
import Reating from "../../components/Rating";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { IPerson } from "../../interfaces";

const { height, width } = Dimensions.get("window");
const stylesT = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topBar: {
    height: 0.16 * height,
    backgroundColor: "#605C99",
    borderBottomRightRadius: 65,
  },
  footer: {
    flexDirection: "row",
    width: 65,
  },
});

const Profile = () => {
  const [image, setImage] = useState<string | null>(null);
  const [client, setClient] = useState<IClient>();
  const [controlPicker, setControlPicker] = useState<boolean>(false);
  const [services, setServices] = useState<IServicesImages[]>([]);
  const [indexCarousel, setIndexCarousel] = useState<number>(0);
  const [person, setPerson] = useState<IPerson>();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setServices([
        ...services,
        {
          id: services[services.length - 1].id + 1,
          url: result.uri,
        },
      ]);
    }
  };

  function removeImage() {
    const n = services.filter((__value, index) => index != indexCarousel);
    setServices(n);
  }

  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem("person").then((personString) => {
      const person = JSON.parse(String(personString)) as IPerson;
      setPerson(person);
    });
    setServices(servicesImages);
    
  }, []);

  function goTo(screenName: string) {
    navigation.navigate(screenName);
  }

  return (
    <View style={stylesT.container}>
      <LinearGradient
        style={stylesT.topBar}
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: 0 }}
        locations={[0.3, 0.7]}
        colors={["#605C99", "#302E4D"]}
      >
        <View
          style={{ flexDirection: "row", marginTop: 40, alignItems: "center" }}
        >
          <View style={{ marginLeft: 5 }}>
            <Text
              style={{ ...styles.text, color: "white", marginHorizontal: 30 }}
            >
              {person?.firstName}
            </Text>
          </View>

          <TouchableOpacity onPress={() => goTo("ProfileEdit")}>
            <View style={{ paddingHorizontal: 160 }}>
              <Entypo name="user" size={30} style={{ color: "white" }} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.logo}
            source={{
              uri: person?.imageProfile
                ? person?.imageProfile
                : "https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg",
            }}
          />
        </View>
      </LinearGradient>

      <View style={stylesT.footer}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "#605C99",
            width: 65,
          }}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            borderTopLeftRadius: 75,
            width: 10,
            height: 75,
          }}
        />
      </View>

      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 30, color: "#c9b416", fontWeight: "bold" }}>
          Score
        </Text>
        <Reating
          value={false}
          sizeHeight={40}
          sizeWidth={40}
          ratingNumber={3}
        />
      </View>

      <Carousel values={{ services, setIndex: setIndexCarousel }} />
      <View
        style={{
          flex: 2,
          flexDirection: "row-reverse",
          alignSelf: "flex-start",
          paddingHorizontal: 20,
        }}
      >
        <View style={{ flexDirection: "row", alignContent: "flex-start" }}>
          <TouchableOpacity onPress={pickImage}>
            <Entypo
              name="image-inverted"
              size={30}
              style={{ color: "#302E4D" }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={removeImage}>
            <Entypo name="cup" size={30} style={{ color: "#fc3232" }} />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", flex: 1 }}>
          <TouchableOpacity
            style={{ paddingHorizontal: 5 }}
            onPress={() => {
              AsyncStorage.removeItem("TOKEN");
              goTo("Login");
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Entypo name="log-out" size={30} style={{ color: "#302E4D" }} />
              <Text
                style={{ color: "#575555", fontWeight: "bold", fontSize: 16 }}
              >
                Sair
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setControlPicker(!controlPicker);
            }}
          >
            <View>
              <Entypo name="help" size={30} style={{ color: "#fc3232" }} />
              <Text
                style={{ color: "#575555", fontWeight: "bold", fontSize: 16 }}
              >
                Ajuda
              </Text>
            </View>
          </TouchableOpacity>
          {controlPicker ? <CreateTicket /> : <></>}
        </View>
      </View>
    </View>
  );
};

export default Profile;
