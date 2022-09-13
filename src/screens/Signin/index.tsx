import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import {styles} from './styles';
import IllustrationImg from '../../assets/illustration.png'


export function Signin(){
  return(
    <View style={styles.container}>
      <Image source={IllustrationImg} style={styles.image}/>
      <View style={styles.container}>
         <Text  style={styles.title}>

         </Text>
      </View>
    </View>
  )
}