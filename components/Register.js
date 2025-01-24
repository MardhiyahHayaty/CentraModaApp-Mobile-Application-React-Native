import * as React from 'react';
import {View, StyleSheet, TextInput, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import {UnguMuda,UnguMuda2,UnguTua,Putih} from './Warna'
import {Feather} from '@expo/vector-icons';

import Register_Header from './Register_Header'
import Register_Inputan from './Register_Inputan'
import Register_Bawah from './Register_Bawah'

export default function Register({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
    <ScrollView>
      <Register_Header/>
      <Register_Inputan/>
      <View style={{marginTop: 12}}>
      <View style={{flexDirection: 'row'}}>
          <Text style={styles.paragraph}>
            Sudah punya akun?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={{marginLeft: 4, fontWeight: '600', color: '#101452'}}>Masuk </Text> 
            </TouchableOpacity>
            </View>
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
          <Text style={{color: '#ffffff', fontSize: 16, fontWeight: 'bold'}}>Daftar</Text>
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
    fontFamily: 'poppins',
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