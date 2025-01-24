import React from 'react'
import { Text, View, TouchableOpacity, Image, Button, StyleSheet} from 'react-native'
import gambarob3 from '../assets/gambarob3.png'
import process3 from '../assets/process3.png'
import Constants from 'expo-constants';

export default function Onboarding1({navigation}){
  
  return(
      <View style={styles.content}>
        <Image style={{ width: 256, height: 224 }} source={gambarob3}/>
        <Text style={styles.judul}>Kelola Transaksi dan Pantau </Text>
        <Text style={styles.isi}>Jumlah stok terupdate otomatis saat terjadi transaksi dan Anda akan dapat mengelola arus stok dengan mudah.
        </Text>
        <Image style={{width: 54, height: 10, marginTop: 48, marginBottom: 72}} source={process3} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('lp')}>
          <Text style={{color: '#ffffff', fontSize: 16, fontWeight: 'bold'}}>Mulai</Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1, 
    backgroundColor: '#CED9FB',
    justifyContent: 'center', 
    alignItems:'center'
  },

  judul: {
    fontSize: 20, 
    fontWeight: 'bold',
    marginTop: 48,
    
  },

  isi: {
    fontSize: 14,  
    marginTop: 12,
    textAlign: 'center',
    lineHeight: 24,
    marginStart: 24,
    marginEnd: 24
  },
  
  button: {
    backgroundColor: '#7486D4', 
    width:340, 
    height:50, 
    justifyContent:'center',
    alignItems:'center', 
    borderRadius:15
  }

});