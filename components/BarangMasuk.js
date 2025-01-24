import * as React from 'react';
import {View, StyleSheet, TextInput, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import {UnguMuda,UnguMuda2,UnguTua,Putih} from './Warna'
import {Feather} from '@expo/vector-icons';
import back from '../assets/back.png'

import Data from './BarangMasuk_Data'
import Judul from './BarangMasuk_Judul'
import Search from './search'

export default function BarangMasuk({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={styles.mainBack}>
          <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('beranda')}>
            <Image style={{ width: 24, height: 24, marginTop: 33 }} source={back} />
          </TouchableOpacity>
          <Text style={styles.judulBack}>List Data Barang Masuk</Text>
        </View>
        <Search/>
      <ScrollView>
        <Data />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // Some code
  mainBack:{
    alignItems: 'center',
    flexDirection:'row',
    justifyContent: 'center', 
    paddingRight: 53,
    paddingLeft: 24
  },

  judulBack: {
    fontSize: 24, 
    fontWeight: 'bold',
    marginTop: 33,
    textAlign: 'center',
    color: '#101452',
    marginLeft: 2
  },
  buttonBack: {
    justifyContent:'center',
    alignItems:'center', 
    borderRadius:15,
    marginRight: 16
  }
  
});