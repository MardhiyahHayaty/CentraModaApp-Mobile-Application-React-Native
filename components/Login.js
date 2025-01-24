import * as React from 'react';
import {View, StyleSheet, TextInput, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import {UnguMuda,UnguMuda2,UnguTua,Putih} from './Warna'
import {Feather} from '@expo/vector-icons';

import Login_Atas from './Login_Atas'
import Login_Inputan from './Login_Inputan'
import Login_Bawah from './Login_Bawah'

export default function Login({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView>
        <Login_Atas/>
        <Login_Inputan/>
        <View style={{marginTop: 12}}>
          <View style={{flexDirection: 'row'}}>
          <Text style={styles.paragraph}>
            Belum punya akun?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('register')}>
            <Text style={{marginLeft: 4, fontWeight: '600', color: '#101452'}}>Daftar </Text> 
            </TouchableOpacity>
            </View>
          
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('beranda')}>
            <Text style={{color: '#ffffff', fontSize: 16, fontWeight: 'bold'}}>Masuk</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph:{
    marginLeft: 190,
    fontSize: 14,
    fontWeight: 'reguler',
    color: '#101452',
    flexDirection:'row'
  },
  button: {
    backgroundColor: '#7486D4', 
    height:50, 
    justifyContent:'center',
    alignItems:'center', 
    borderRadius:15,
    marginLeft: 27,
    marginTop: 43,
    marginRight: 27
  }
})