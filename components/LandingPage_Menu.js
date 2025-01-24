import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Font } from 'expo'
import {UnguMuda,UnguMuda2,UnguTua} from './Warna'

export default function Menu() {
  return (
    <View style = {styles.container}>
      <Image style = {styles.animasi} source = {require('../assets/lpgambar.png')
      } />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  animasi:{
    paddingRight:10,
  }
})