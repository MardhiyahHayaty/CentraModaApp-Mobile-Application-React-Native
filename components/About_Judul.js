import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import {Biru1, BiruMuda, White} from './Warna'

export default function Judul() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Tentang Kami</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // Some code
  main: {
    justifyContent: 'center'
  },

  text:{
    fontSize:24,
    color:'blues',    
    marginLeft:24, 
    marginTop:32,
    fontWeight:'600',
    color: '#101452'
  },
});