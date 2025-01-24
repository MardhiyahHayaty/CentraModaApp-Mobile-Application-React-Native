import * as React from 'react';
import {View, StyleSheet, TextInput, Image, Text, Button, TouchableOpacity} from 'react-native';
import {UnguMuda,UnguMuda2,UnguTua,Putih} from './Warna'
import {Feather} from '@expo/vector-icons';

export default function Bawah() {
  return(
    <View>
      <Text style={styles.paragraph}>
        Sudah punya akun? Masuk 
      </Text> 
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('register')}>
          <Text style={{color: '#ffffff', fontSize: 16, fontWeight: 'bold'}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph:{
    margin: 15,
    marginLeft: 170,
    marginTop: 0,
    fontSize: 14,
    fontFamily: 'poppins',
    fontWeight: 'reguler',
    color: '#101452',
    flexDirection:'row'
  },
  button: {
    backgroundColor: '#7486D4', 
    width:340, 
    height:50, 
    justifyContent:'center',
    alignItems:'center', 
    borderRadius:15,
    marginStart: 25
  }
})