import * as React from 'react';
import { View, StyleSheet, TextInput, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Search() {
  return (
    <View style={styles.main}>
      <TextInput style={styles.formCari} placeholder="Jenis Kain Untuk Nikahan? " />
      
      <Feather  name="search" size={20 } color="#7486D4" style={{
        marginLeft:20,
        height:35,
        width:35,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#7486D4',
        paddingRight:10,
        paddingLeft:7,
        paddingTop:5,
      }}
      alignSelf={'center'}/>
    </View>
  );
}
const styles = StyleSheet.create({
  // Some code
  main:{
    paddingLeft:36,
    paddingRight:36,
    marginTop:47,
    marginBottom:15,
    flexDirection:'row'
  },

  formCari:{
    height:35,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#7486D4',
    color:'#7486D4',
    paddingLeft:10,
    flex:5,
  }
});