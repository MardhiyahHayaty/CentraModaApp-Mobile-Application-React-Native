import * as React from 'react';
import {View, StyleSheet, TextInput, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import {UnguMuda,UnguMuda2,UnguTua,Putih} from './Warna'
import {Feather} from '@expo/vector-icons';
import back from '../assets/back.png'

import Describe from './DetailBarang_Describe'
import Judul from './DetailBarang_Judul'
import Img from './DetailBarang_Img'

export default function Login({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <View style={styles.main}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('beranda')}>
        <Image style={{ width: 24, height: 24, marginTop: 33 }} source={back}/>
      </TouchableOpacity>
      <Text style={styles.judul}>Detail Barang</Text>
    </View>
    <ScrollView>
    <Describe/>
    </ScrollView>
         
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
      paddingLeft: 10
    },
  
    judul: {
      fontSize: 24, 
      fontWeight: 'bold',
      marginTop: 33,
      textAlign: 'center',
      color: '#101452',
      marginLeft: 2
    },
    button: {
      justifyContent:'center',
      alignItems:'center', 
      borderRadius:15,
      marginRight: 60
    }
    
  });