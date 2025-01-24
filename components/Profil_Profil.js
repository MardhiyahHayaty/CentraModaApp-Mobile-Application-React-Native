import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {BiruMuda} from './Warna'
import { Font } from 'expo';

export default function foto() {
  return (
    <View style={styles.main}>
      <Image style={styles.profil} source={require('../assets/profilefoto1.png')} />
      <Text style={styles.p2}>Sarah Winaria Azmi </Text>
      <Text style={styles.p3}>Admin </Text>
      <Text style={styles.p4}>sarahazmi@gmail.com</Text>

      <View
        style={{
          borderBottomColor: BiruMuda,
          borderBottomWidth: 1,
          marginTop:24,
          width:345,
        }}
      />
    </View>
    
  );
}
const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  profil: {
    marginTop: 25,
    width: 100,
    height: 100
  },
  p2: {
    marginTop: 15,
    fontWeight: '700',
    fontSize: 16,
    color:'#101452'
  },
  p3: {
    marginTop: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
  },
  p4: {
    marginTop: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
  },
});
