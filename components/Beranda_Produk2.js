import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {Biru1, BiruMuda, White} from './Warna'

export default function  Card() {
  return (
    <View style={styles.main}>
      <View style={styles.card}>
        <Image source={require('../assets/Silk.png')} />

        <ProdukCard />
      </View>
    </View>
  );
}

const ProdukCard= ()=>{
  return (
    <>
    <View style={{
      backgroundColor:'white',
      padding:5,
      marginLeft:10,
      marginRight:10,
      width:280,
      
    }}>
      <Text style={{fontSize:15, fontWeight:'bold'}}>Kain Sutra Silk Taffeta</Text>
      <Text style={{fontSize:10}}>Dibuat dari serat alami yang dihasilkan oleh kepompong sutra</Text>
      <Text style={{fontSize:12, fontWeight:'bold'}}>Kode S001</Text>
    </View>
    
    </>
  )
}

const styles = StyleSheet.create({
  // Some code
  main:{
    justifyContent:'center',
    paddingLeft:10,
    paddingRight:10,
    marginTop: -10,
  },
   card:{
    padding:16,
    flexDirection:'row',
  },
});