import * as React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import back from '../assets/back.png'

export default function JudulBarangMasuk({navigation}) {
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => navigation.navigate('onboarding3')}>
        <Image style={{ width: 24, height: 24, marginTop: 33 }} source={back}/>
      </TouchableOpacity>
      <Text style={styles.judul}>List Data Barang Masuk</Text>
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
    paddingLeft: 24
  },

  judul: {
    fontSize: 24, 
    fontWeight: 'bold',
    marginTop: 33,
    textAlign: 'center',
    color: '#101452',
    marginLeft: 6
  },

  
});






/*import React, {useEffect, useState} from "react";
import{
    Text,
    View,
    StyleSheet,
    Image,
    ActivityIndicator,
} from "react-native";

export default function BarangMasuk() {
  const [isLoading,setLoading]= useState(true);
  const [data,setData]= useState([]);
  const getBarangMasuk = async ()=> {
    try{
        const response = await fetch(
            "https://87f4-113-212-122-130.ngrok.io/api/posts"

        );
        const json = await response.json();
        console.log(json.data.data)
        setData(json.data.data);
    }catch (error){
        console.error(error);
    }finally{
        setLoading(false);
    }
};
useEffect(() => {
    getBarangMasuk();
},[])

  return(
    <View style={styles.main}>
    
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    justifyContent: "center"
  }
})*/