import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/core";
import { Entypo } from '@expo/vector-icons';

import styles from "./styles";

const ProfileEdit = () => {
  const navigation = useNavigation();

  function goTo(screenName: string) {
    navigation.navigate(screenName);
  }

  return (
    <View style={{flex:1, backgroundColor: 'white'}}>
      <ScrollView
        style={{ backgroundColor: "#fff", marginBottom: 80, flex: 1 }}
        showsVerticalScrollIndicator={true}
      >
        <TouchableOpacity onPress={() => goTo("ProfileEditPeople")}>
          <View style={{...styles.menuItem, marginTop: 20}}>
            <Entypo name="user" size={30} style={{ color: "#605C99" }} />
            <Text style={{ ...styles.menuItemText }}> Alterar dados pessoais </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goTo("ProfileEditEmail")}>
          <View style={styles.menuItem}>
            <Entypo name="mail" size={30} style={{ color: "#605C99" }} />
            <Text style={{ ...styles.menuItemText }}> Alterar e-mail </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goTo("ProfileEditAddress")}>
          <View style={styles.menuItem}>
            <Entypo name="home" size={30} style={{ color: "#605C99" }} />
            <Text style={{ ...styles.menuItemText }}> Alterar endereço </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goTo("ProfileEditPassword")}>
          <View style={styles.menuItem}>
            <Entypo name="key" size={30} style={{ color: "#605C99" }} />
            <Text style={{ ...styles.menuItemText }}> Alterar senha </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </ View>
  );
};

export default ProfileEdit;
