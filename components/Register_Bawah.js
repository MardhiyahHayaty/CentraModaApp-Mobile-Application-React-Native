import * as React from 'react';
import {View, StyleSheet, TextInput, Image, Text, Button, TouchableOpacity} from 'react-native';
import {UnguMuda,UnguMuda2,UnguTua,Putih} from './Warna'
import {Feather} from '@expo/vector-icons';

export default function Bawah({navigation}) {
  return(
    <View>
      <Text style={styles.paragraph}>
        Sudah punya akun? Masuk 
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('onboarding3')}>
          <Text style={{color: '#ffffff', fontSize: 16, fontWeight: 'bold'}}>Daftar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph:{
    margin: 15,
    marginLeft: 170,
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'poppins',
    fontWeight: 'reguler',
    color: '#101452',
    flexDirection:'row'
  },
  button: {
    backgroundColor: '#7486D4', 
    width:200, 
    height:20, 
    justifyContent:'center',
    alignItems:'center', 
    borderRadius:15,
    marginBottom:10,
    marginTop:43,
    paddingLeft:10,
  }
})