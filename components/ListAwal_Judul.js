import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {blues} from './Warna'

export default function Judul() {
  return(
    <Text style={styles.main}>List Data</Text>
  );
}

const styles = StyleSheet.create({
  main:{
    fontSize:24,
    color:'blues',    
    marginLeft:24, 
    marginTop:32,
    fontWeight:'600',
    color: '#101452'
  }
});