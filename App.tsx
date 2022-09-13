import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import {Signin} from "./src/screens/Signin";


export default function App(){
  return(
    <>
    <StatusBar style="light" backgroundColor="black"/>
   <Signin/>
   </>
  )
}