import * as React from 'react';
import {View, StyleSheet, TextInput, Image, Text, Button, TouchableOpacity} from 'react-native';
import {UnguMuda,UnguMuda2,UnguTua,Putih} from './Warna'
import {Feather} from '@expo/vector-icons';

export default function Bawah() {
  return(
    <View> 
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('button')}>
          <Text style={{color: '#ffffff', fontSize: 16, fontWeight: 'bold'}}>Masuk</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7486D4', 
    width:227, 
    height:50, 
    justifyContent:'center',
    alignItems: 'center', 
    borderRadius:15,
    marginTop:80,
  },
})