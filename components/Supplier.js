import * as React from 'react';
import {View, StyleSheet, TextInput, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import {UnguMuda,UnguMuda2,UnguTua,Putih} from './Warna'
import {Feather} from '@expo/vector-icons';
import back from '../assets/back.png'

import Atas from './Supplier_Atas'
import Tengah from './Supplier_Tengah'

export default function Supplier({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={styles.mainBack}>
          <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('beranda')}>
            <Image style={{ width: 24, height: 24, marginTop: 33 }} source={back} />
          </TouchableOpacity>
          <Text style={styles.judulBack}>List Data Supplier</Text>
        </View>
      <Tengah/>
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
    marginLeft: 6
  },
  buttonBack: {
    justifyContent:'center',
    alignItems:'center', 
    borderRadius:15,
    marginRight: 40
  }
  
});
