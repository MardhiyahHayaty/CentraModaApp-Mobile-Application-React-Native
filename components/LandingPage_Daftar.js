import * as React from 'react';
import {View, StyleSheet, TextInput, Image, Text, Button, TouchableOpacity} from 'react-native';
import {UnguMuda} from './Warna'
import {Feather} from '@expo/vector-icons';

export default function Bawah() {
  return(
    <View> 
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('button')}>
          <Text style={{color: '#10145280', fontSize: 16, fontWeight: 'bold'}}>Daftar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF', 
    width:227, 
    height:50, 
    justifyContent:'center',
    alignItems: 'center', 
    borderRadius:15,
    borderWidth:1,
    borderColor:UnguMuda,
    marginTop:24,
  },
})