import * as React from 'react';
import {View, StyleSheet, TextInput, Image, TouchableOpacity, Text} from 'react-native';
import {UnguMuda,UnguMuda2,UnguTua,Putih} from './Warna'
import {Feather} from '@expo/vector-icons';

import LPMenu from './LandingPage_Menu'

export default function LandingPage({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF', justifyContent:'center', alignItems: 'center'}}>
      <LPMenu/>
      <View> 
      <TouchableOpacity style={styles.buttonMasuk} onPress={() => navigation.navigate('login')}>
          <Text style={{color: '#ffffff', fontSize: 16, fontWeight: 'bold'}}>Masuk</Text>
      </TouchableOpacity>
      </View>
      <View style={{marginBottom: 90}}> 
        <TouchableOpacity style={styles.buttonDaftar} onPress={() => navigation.navigate('register')}>
            <Text style={{color: '#10145280', fontSize: 16, fontWeight: 'bold'}}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonMasuk: {
    backgroundColor: '#7486D4', 
    width:227, 
    height:50, 
    justifyContent:'center',
    alignItems: 'center', 
    borderRadius:15,
    marginTop:80,
  },
  buttonDaftar: {
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


