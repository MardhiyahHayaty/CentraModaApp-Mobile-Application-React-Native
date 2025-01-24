import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {blues, white, sky_blue, cutton} from './Warna'

export default function ListMenu() {
  return(
    <View style={styles.mainMenu}>
      <Admin />
      <Supp />
      <Pegawai />
      <Jenis />
      <Barang />
      <BarangMasuk />
      <BarangKeluar />
    </View>
  );
}

const Admin=() => {
  return(
    <>
      <View style = {{
        backgroundColor: white,
        borderRadius: 15,
        flexDirection: 'row',
        borderColor:sky_blue,
        paddingLeft:24,
        paddingRight:24,
        borderWidth:1.5,
        paddingTop:18,
        paddingBottom:18
      }}>
        
        <Image source={require('../assets/Admin.png')} style={styles.menu} />
        <Text style={styles.list}>Data Admin</Text>
        <TouchableOpacity onPress={() => navigation.navigate('admin')}>
          <Image source={require('../assets/next.png')} style={styles.row} />
        </TouchableOpacity>
      </View>
    </>
  )
}

const Supp=() => {
  return(
    <>
      <View style = {{
        backgroundColor: white,
        borderRadius: 15,
        flexDirection: 'row',
        borderColor:sky_blue,
        paddingLeft:24,
        paddingRight:24,
        borderWidth:1.5,
        paddingTop:18,
        paddingBottom:18,
        marginTop:5
      }}>
        <Image source={require('../assets/Supplier.png')} style={styles.menu}/>
        <Text style={styles.list}>Data Supplier</Text>
        <Image source={require('../assets/next.png')} style={styles.row}/>
      </View>
    </>
  )
}

const Pegawai=() => {
  return(
    <>
      <View style = {{
        backgroundColor: white,
        borderRadius: 15,
        flexDirection: 'row',
        borderColor:sky_blue,
        paddingLeft:24,
        paddingRight:24,
        borderWidth:1.5,
        paddingTop:18,
        paddingBottom:18,
        marginTop:5,        
      }}>
        <Image source={require('../assets/ikonpegawai.png')} style={styles.menu}/>
        <Text style={styles.list}>Data Pegawai</Text>
        <Image source={require('../assets/next.png')} style={styles.row}/>
      </View>
    </>
  )
}

const Jenis=() => {
  return(
    <>
      <View style = {{
        backgroundColor: white,
        borderRadius: 15,
        flexDirection: 'row',
        borderColor:sky_blue,
        paddingLeft:24,
        paddingRight:24,
        borderWidth:1.5,
        paddingTop:18,
        paddingBottom:18,
        marginTop:5,        
      }}>
        <Image source={require('../assets/jenisbr.png')} style={styles.menu}/>
        <Text style={styles.list}>Data Jenis Barang</Text>
        <Image source={require('../assets/next.png')} style={styles.row}/>
      </View>
    </>
  )
}

const Barang=() => {
  return(
    <>
      <View style = {{
        backgroundColor: white,
        borderRadius: 15,
        flexDirection: 'row',
        borderColor:sky_blue,
        paddingLeft:24,
        paddingRight:24,
        borderWidth:1.5,
        paddingTop:18,
        paddingBottom:18,
        marginTop:5,        
      }}>
        <Image source={require('../assets/ikonbarang.png')} style={styles.menu}/>
        <Text style={styles.list}>Data Barang</Text>
        <Image source={require('../assets/next.png')} style={styles.row}/>
      </View>
    </>
  )
}

const BarangMasuk=() => {
  return(
    <>
      <View style = {{
        backgroundColor: white,
        borderRadius: 15,
        flexDirection: 'row',
        borderColor:sky_blue,
        paddingLeft:24,
        paddingRight:24,
        borderWidth:1.5,
        paddingTop:18,
        paddingBottom:18,
        marginTop:5,        
      }}>
        <Image source={require('../assets/bm.png')} style={styles.menu}/>
        <Text style={styles.list}>Data Barang Masuk</Text>
        <Image source={require('../assets/next.png')} style={styles.row}/>
      </View>
    </>
  )
}

const BarangKeluar=() => {
  return(
    <>
      <View style = {{
        backgroundColor: white,
        borderRadius: 15,
        flexDirection: 'row',
        borderColor:sky_blue,
        paddingLeft:24,
        paddingRight:24,
        borderWidth:1.5,
        paddingTop:18,
        paddingBottom:18,
        marginTop:5,        
      }}>
        <Image source={require('../assets/bk.png')} style={styles.menu}/>
        <Text style={styles.list}>Data Barang Keluar</Text>
        <Image source={require('../assets/next.png')} style={styles.row}/>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
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