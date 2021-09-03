import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { height } = Dimensions.get("window");

export default function TabBar() {
  return (
    <>
      <LinearGradient
        style={styles.topBar}
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: 0 }}
        locations={[0.3, 0.7]}
        colors={["#605C99", "#302E4D"]}
      >
        <View style={{ alignItems: "center", marginTop: 0.068 * height }}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg",
            }}
          />
        </View>
      </LinearGradient>

      <View style={styles.footer}>
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  footer: {
    flexDirection: "row",
    width: 65,
  },
  topBar: {
    height: 0.16 * height,
    backgroundColor: "#605C99",
    borderBottomRightRadius: 65,
  },
  logo: {
    width: 110,
    height: 110,
    borderRadius: 100,
    borderWidth: 5,
    marginTop: 20,
  },
});
