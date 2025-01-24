import * as React from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';
import {UnguMuda,UnguMuda2,UnguTua,Putih} from './Warna'
import {Feather} from '@expo/vector-icons';

export default function KotakInputan() {
  return(
    <View style={styles.main}>
      <TextInput style={styles.formRegistrasi} placeholder=" Masukkan Nama "/>
      <TextInput style={styles.formRegistrasi2} placeholder=" Masukkan Email Anda "/>
      <TextInput
          placeholder={'Kata Sandi'}
          secureTextEntry={true}
          style={styles.formRegistrasi3}
        />
        <TextInput
          placeholder={'Konfirmasi Kata Sandi'}
          secureTextEntry={true}
          style={styles.formRegistrasi4}
        />
    </View>
  );
}
const styles = StyleSheet.create({
  // Some code
  main:{
    paddingRight:27,
    marginTop:23,
    marginLeft: 27,
  },

  formRegistrasi:{
    height:50,
    borderRadius:10,
    borderWidth:1,
    borderColor:UnguTua,
    color:UnguMuda,
    paddingLeft:10,
  },

  formRegistrasi2:{
    marginBottom:10,
    marginTop:10,
    height:50,
    borderRadius:10,
    borderWidth:1,
    borderColor:UnguTua,
    color:UnguMuda,
    paddingLeft:10,
  },

    formRegistrasi3:{
    marginBottom:10,
    height:50,
    borderRadius:10,
    borderWidth:1,
    borderColor:UnguTua,
    color:UnguMuda,
    paddingLeft:10,
  },

    formRegistrasi4:{
    height:50,
    borderRadius:10,
    borderWidth:1,
    borderColor:UnguTua,
    color:UnguMuda,
    paddingLeft:10,
  }
});