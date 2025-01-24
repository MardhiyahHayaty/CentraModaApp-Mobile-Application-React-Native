import * as React from 'react';
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Biru1, Biru2 } from './Warna';

export default function MenuUtama({navigation}) {
  return (
    <View style={styles.main}>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('onboarding3')}>
          <Image style={{ width: 24, height: 24, marginLeft:7, marginTop:15 }} source={require('../assets/Admin.png')}/>
        </TouchableOpacity>
        <Text style={styles.judul2}>Admin</Text>

        <TouchableOpacity onPress={() => navigation.navigate('onboarding3')}>
            <Image style={{ width: 24, height: 24, marginLeft:10, marginTop:15 }} source={require('../assets/Jenis.png')}/>
          </TouchableOpacity>
          <Text style={styles.judul}>Jenis Barang</Text>
      </View>

      <View style={styles.content2}>
        <TouchableOpacity onPress={() => navigation.navigate('onboarding3')}>
          <Image style={{ width: 24, height: 24, marginLeft:15, marginTop:15 }} source={require('../assets/Supplier.png')}/>
        </TouchableOpacity>
        <Text style={styles.judul3}>Supplier</Text>

        <TouchableOpacity onPress={() => navigation.navigate('barangmasuk')}>
          <Image style={{ width: 24, height: 24, marginLeft:15, marginTop:15 }} source={require('../assets/Masuk.png')}/>
        </TouchableOpacity>
        <Text style={styles.judul}>Barang Masuk</Text>
      </View>

      <View style={styles.content2}>
        <TouchableOpacity onPress={() => navigation.navigate('onboarding3')}>
          <Image style={{ width: 24, height: 24, marginLeft:10, marginTop:15 }} source={require('../assets/Pegawai.png')}/>
        </TouchableOpacity>
        <Text style={styles.judul2}>Pegawai</Text>

        <TouchableOpacity onPress={() => navigation.navigate('onboarding3')}>
          <Image style={{ width: 24, height: 24, marginLeft:15, marginTop:15 }} source={require('../assets/Keluar.png')}/>
        </TouchableOpacity>
        <Text style={styles.judul}>Barang Keluar</Text>
      </View>

      <View style={styles.content2}>
        <TouchableOpacity onPress={() => navigation.navigate('onboarding3')}>
          <Image style={{ width: 24, height: 24, marginLeft:3, marginTop:15 }} source={require('../assets/Barang.png')}/>
        </TouchableOpacity>
        <Text style={styles.judul}>Barang</Text>

        <TouchableOpacity onPress={() => navigation.navigate('onboarding3')}>
          <Image style={{ width: 24, height: 24, marginLeft:4, marginTop:15 }} source={require('../assets/Lainnya.png')}/>
        </TouchableOpacity>
        <Text style={styles.judul}>Lainnya</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    marginTop: 10,
    borderRadius:10,
    borderWidth:1,
    borderColor:Biru2,
    marginLeft:10,
    marginRight:10,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  content: {
    flexDirection: 'column'
  },
  content2: {
    flexDirection: 'column',
    paddingLeft: 30,
    marginBottom:10
  },
  judul: {
    fontSize: 10, 
    marginTop: 6,
    color: '#101452',
    marginBottom: 6
  },
  judul2: {
    fontSize: 10, 
    marginTop: 6,
    marginLeft: 5,
    color: '#101452',
    marginBottom: 6
  },
   judul3: {
    fontSize: 10, 
    marginTop: 6,
    marginLeft: 10,
    color: '#101452',
    marginBottom: 6
  },
});