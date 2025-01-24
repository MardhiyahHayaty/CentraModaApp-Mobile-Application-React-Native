import * as React from 'react';
import { Text, View, StyleSheet, Image, Feather } from 'react-native';
import {Biru1, BiruMuda, White} from './Warna'

export default function Contact() {
  return (
    <View style={styles.main}>
      <Text style={styles.t2}>Hubungi Kami</Text>

      <Image style={styles.gmbr} source={require('../assets/instagram.png')}/>
      <Text style={styles.c2}>: centramoda.pku</Text>
      <Image style={styles.br2} source={require('../assets/call.png')}/>
      <Text style={styles.c2}>: 0761 - 8653493</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  // Some code
  main: {
    justifyContent: 'center',
    marginLeft: 24,
    marginBottom: 83
  },

  t2: {
    fontSize:12,
    fontWeight:'700',
    color:'#101452',
    alignItems:'center',
  },

  gmbr: {
    height: 18,
    width: 18,
    marginTop :12
  },

  br2: {
    height: 18,
    width: 18,
    marginTop :12
  },

  c2: {
    marginTop: -21,
    marginLeft:55,
    fontSize: 14,
    textAlign: 'justify',
  },
});