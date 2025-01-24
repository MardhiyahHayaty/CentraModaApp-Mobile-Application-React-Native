import * as React from 'react';
import {View, StyleSheet, TextInput, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import {UnguMuda,UnguMuda2,UnguTua,Putih, blues, white, sky_blue} from './Warna'
import {Feather} from '@expo/vector-icons';

import Judul from './ListAwal_Judul'
import Menu from './ListAwal_ListMenu'

export default function ListAwal({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Judul />

      <View style={styles.mainMenu}>
        <View style={{
          backgroundColor: white,
          borderRadius: 15,
          flexDirection: 'row',
          borderColor: sky_blue,
          paddingLeft: 24,
          paddingRight: 24,
          borderWidth: 1.5,
          paddingTop: 18,
          paddingBottom: 18
        }}>

          <Image source={require('../assets/Admin.png')} style={styles.menu} />
          <Text style={styles.list}>Data Admin</Text>
          <TouchableOpacity onPress={() => navigation.navigate('admin')}>
            <Image source={require('../assets/next.png')} style={styles.row} />
          </TouchableOpacity>
        </View>


        <View style={{
          backgroundColor: white,
          borderRadius: 15,
          flexDirection: 'row',
          borderColor: sky_blue,
          paddingLeft: 24,
          paddingRight: 24,
          borderWidth: 1.5,
          paddingTop: 18,
          paddingBottom: 18,
          marginTop: 5
        }}>
          <Image source={require('../assets/Supplier.png')} style={styles.menu} />
          <Text style={styles.list}>Data Supplier</Text>
          <TouchableOpacity onPress={() => navigation.navigate('supplier')}>
            <Image source={require('../assets/next.png')} style={styles.row} />
          </TouchableOpacity>
        </View>


        <View style={{
          backgroundColor: white,
          borderRadius: 15,
          flexDirection: 'row',
          borderColor: sky_blue,
          paddingLeft: 24,
          paddingRight: 24,
          borderWidth: 1.5,
          paddingTop: 18,
          paddingBottom: 18,
          marginTop: 5,
        }}>
          <Image source={require('../assets/ikonpegawai.png')} style={styles.menu} />
          <Text style={styles.list}>Data Pegawai</Text>
          <TouchableOpacity onPress={() => navigation.navigate('pegawai')}>
            <Image source={require('../assets/next.png')} style={styles.row} />
          </TouchableOpacity>
        </View>

        <View style={{
          backgroundColor: white,
          borderRadius: 15,
          flexDirection: 'row',
          borderColor: sky_blue,
          paddingLeft: 24,
          paddingRight: 24,
          borderWidth: 1.5,
          paddingTop: 18,
          paddingBottom: 18,
          marginTop: 5,
        }}>
          <Image source={require('../assets/jenisbr.png')} style={styles.menu} />
          <Text style={styles.list}>Data Jenis Barang</Text>
          <TouchableOpacity onPress={() => navigation.navigate('jenis')}>
            <Image source={require('../assets/next.png')} style={styles.row} />
          </TouchableOpacity>
        </View>


        <View style={{
          backgroundColor: white,
          borderRadius: 15,
          flexDirection: 'row',
          borderColor: sky_blue,
          paddingLeft: 24,
          paddingRight: 24,
          borderWidth: 1.5,
          paddingTop: 18,
          paddingBottom: 18,
          marginTop: 5,
        }}>
          <Image source={require('../assets/ikonbarang.png')} style={styles.menu} />
          <Text style={styles.list}>Data Barang</Text>
          <TouchableOpacity onPress={() => navigation.navigate('barang')}>
            <Image source={require('../assets/next.png')} style={styles.row} />
          </TouchableOpacity>
        </View>


        <View style={{
          backgroundColor: white,
          borderRadius: 15,
          flexDirection: 'row',
          borderColor: sky_blue,
          paddingLeft: 24,
          paddingRight: 24,
          borderWidth: 1.5,
          paddingTop: 18,
          paddingBottom: 18,
          marginTop: 5,
        }}>
          <Image source={require('../assets/bm.png')} style={styles.menu} />
          <Text style={styles.list}>Data Barang Masuk</Text>
          <TouchableOpacity onPress={() => navigation.navigate('barangmasuk')}>
            <Image source={require('../assets/next.png')} style={styles.row} />
          </TouchableOpacity>
        </View>


        <View style={{
          backgroundColor: white,
          borderRadius: 15,
          flexDirection: 'row',
          borderColor: sky_blue,
          paddingLeft: 24,
          paddingRight: 24,
          borderWidth: 1.5,
          paddingTop: 18,
          paddingBottom: 18,
          marginTop: 5,
        }}>
          <Image source={require('../assets/bk.png')} style={styles.menu} />
          <Text style={styles.list}>Data Barang Keluar</Text>
          <TouchableOpacity onPress={() => navigation.navigate('barangkeluar')}>
            <Image source={require('../assets/next.png')} style={styles.row} />
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.mainNavbar}>
        <View style={styles.contentNavbar}>
          <TouchableOpacity onPress={() => navigation.navigate('beranda')}>
            <Image style={{ width: 24, height: 24, marginLeft: 9 }} source={require('../assets/beranda.png')} />
          </TouchableOpacity>
          <Text style={styles.judul2Navbar}>Beranda</Text>
        </View>
        <View style={styles.content2Navbar}>
          <TouchableOpacity onPress={() => navigation.navigate('listawal')}>
            <Image style={{ width: 24, height: 24, marginLeft: 16 }} source={require('../assets/listaktif.png')} />
          </TouchableOpacity>
          <Text style={styles.judulNavbar}>Daftar Data</Text>
        </View>
        <View style={styles.content2Navbar}>
          <TouchableOpacity onPress={() => navigation.navigate('about')}>
            <Image style={{ width: 24, height: 24, marginLeft: 7 }} source={require('../assets/About.png')} />
          </TouchableOpacity>
          <Text style={styles.judul2Navbar}>Tentang</Text>
        </View>
        <View style={styles.content2Navbar}>
          <TouchableOpacity onPress={() => navigation.navigate('profil')}>
            <Image style={{ width: 24, height: 24, marginLeft: 3 }} source={require('../assets/profil.png')} />
          </TouchableOpacity>
          <Text style={styles.judul2Navbar}>Profil</Text>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  mainNavbar: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderTopWidth:1,
    borderColor:'#CED9FB',
    paddingTop: 10
  },
  contentNavbar: {
    flexDirection: 'column',
  },
  content2Navbar: {
    flexDirection: 'column',
    paddingLeft: 60
  },
  judulNavbar: {
    fontSize: 10, 
    fontWeight: 'bold',
    marginTop: 6,
    textAlign: 'center',
    color: '#7486D4',
  },

  judul2Navbar: {
    fontSize: 10, 
    fontWeight: 'bold',
    marginTop: 6,
    textAlign: 'center',
    color: '#000',
  },
    mainMenu:{
      marginTop: 24,
      marginLeft:24,
      marginRight:24,
      marginBottom: 185
    },
    menu: {
      height:24,
      width:24
    },
    list:{
      color:blues,
      fontSize:12,
      fontWeight:'500',
      marginLeft:20,
      marginTop:3,
      width:120
    },
    row:{
      height:18,
      width:18,
      marginLeft:105
    }

});


