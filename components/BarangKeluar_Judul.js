import * as React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import back from '../assets/back.png'

export default function JudulBarangKeluar({navigation}) {
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => navigation.navigate('beranda')}>
        <Image style={{ width: 24, height: 24, marginTop: 33 }} source={back}/>
      </TouchableOpacity>
      <Text style={styles.judul}>List Data Barang Keluar</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  // Some code
  main:{
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'center', 
    paddingRight: 53,
    paddingLeft: 24
  },

  judul: {
    fontSize: 24, 
    fontWeight: 'bold',
    marginTop: 33,
    textAlign: 'center',
    color: '#101452',
    marginLeft: 6
  },

  
});






