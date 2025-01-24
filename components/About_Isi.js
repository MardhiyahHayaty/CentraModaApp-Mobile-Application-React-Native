import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Font } from 'expo'

export default function isi() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />

      <Text style={styles.p2}>Centra Moda Textile adalah toko tekstil yang beroperasi di Jalan Jenderal Sudirman, Kota Pekanbaru. Berdirinya toko tekstil ini pada awal tahun 2020. Toko Centra Moda merupakan usaha dagang berbasis tekstil atau bahan kain yang menjual berbagai macam motif bahan kain setengah jadi yang akan dibuat menjadi berbagai macam pakaian, seperti baju kurung, kebaya, gaun, kemeja dan lain sebagainya. selain itu terdapat beragam motif, terutama batik dan songket. konsumen yang menjadi pembeli di toko ini sebagian besar merupakan pengusaha tekstil untuk membuat pakaian.</Text>
    
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  p2: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'justify',
    lineHeight: 22
  },

  logo: {
    height: 171,
    width: 275,
    marginLeft : 30,
    marginBottom: 32,
    marginTop: 17
  },
});
