import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Font } from 'expo'
import {UnguMuda,UnguMuda2,UnguTua} from './Warna'

export default function Menu() {
  return (
    <View style = {styles.container}>
      <Image style = {styles.logo} source = {require('../assets/logo_cm.png')} /> 
      <Image style = {styles.animasi} source = {require('../assets/animasi.png')} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    marginTop: 100
  },

  animasi:{
    marginTop: 30,
    marginLeft: 250,
    paddingRight:10,
  }
})