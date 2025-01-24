import * as React from 'react';
import { Text, View, StyleSheet,Button, Image } from 'react-native';
import {BiruMuda} from './Warna'
import { Font } from 'expo'

export default function inti() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informasi Profil</Text>
      <Text style={styles.nama}>Nama </Text>
      <Text style={styles.isinama}>Sarah Winaria Azmi </Text>
      <View
        style={{
          borderBottomColor: BiruMuda,
          borderBottomWidth: 1,
          marginTop:12,
          width:344,
        }}
      />
      <Text style={styles.judul}>Email</Text>
      <Text style={styles.isi}>sarahazmi@gmail.com </Text>
      <View
        style={{
          borderBottomColor: BiruMuda,
          borderBottomWidth: 1,
          marginTop:12,
          width:344,
        }}
      />
      <Text style={styles.judul}>Password</Text>
      <Text style={styles.isi}>XXXX-XXXX-XXXX</Text>
      <View
        style={{
          borderBottomColor: BiruMuda,
          borderBottomWidth: 1,
          marginTop:12,
          width:344,
        }}
      />
      <Text style={styles.judul}>Nomor Handphone</Text>
      <Text style={styles.isi}>+62 812 7606 5321</Text>
      <View
        style={{
          borderBottomColor: BiruMuda,
          borderBottomWidth: 1,
          marginTop:12,
          width:344,
        }}
      />
      <Text style={styles.judul}>Alamat Rumah</Text>
      <Text style={styles.isi}>- </Text>
      <View
        style={{
          borderBottomColor: BiruMuda,
          borderBottomWidth: 1,
          marginTop:12,
          width:344,
        }}
      />
      <Text style={styles.logout}>Logout</Text>
      <Image style = {styles.ikonout} source = {require('../assets/out.png')} />
      <View
        style={{
          borderBottomColor: BiruMuda,
          borderBottomWidth: 1,
          marginTop:12,
          width:345,
          marginBottom: 100
        }}
      />
    </View>

  );
  
}
 const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginLeft: 33,
    marginRight: 33
  },
  title: {
    marginTop: 19,
    fontWeight: '600',
    fontSize: 16,
    color:'#101452'
  },
  nama: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: '350',
    color: '#101452'
  },
  isinama: {
    marginTop: -20,
    fontSize: 14,
    fontWeight: '500',
    color: '#101452',
    textAlign: 'right'
  },
  judul: {
    marginTop: 10,
    fontWeight: '350',
    fontSize: 14,
    color: '#101452'
  },
  isi: {
    marginTop: -20,
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'right',
    color: '#101452',
  },
  
  logout: {
    fontSize: 16,
    marginTop: 10,
    alignContent:'center',
    color:'#101452',
    fontWeight:'600',
  },
  ikonout: {
    width:20, 
    height:20,
    marginTop: -20,
    marginLeft: 302
  }
 });
