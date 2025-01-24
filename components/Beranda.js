import React, { useEffect, useState } from "react";
import {View, StyleSheet, TextInput, Image, TouchableOpacity, Text, ScrollView, ActivityIndicator} from 'react-native';
import {UnguMuda,UnguMuda2,UnguTua,Putih, Biru1, Biru2, BiruMuda2, BiruPutih, BiruTua} from './Warna'
import {Feather} from '@expo/vector-icons';

import Jenis from './Beranda_Jenis'
import Menu from './Beranda_Menu'
import Navbar from './Beranda_Navbar'
import Produk from './Beranda_Produk'
import Produk1 from './Beranda_Produk1'
import Produk2 from './Beranda_Produk2'
import Search from './Beranda_Search'

export default function Beranda({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log("data")
  const getBarang = async () => {
    try {
      const response = await fetch(
        "https://7ef1-114-125-22-202.ap.ngrok.io/api/barangs"

    );
    const json = await response.json();
    console.log(json.data.data)
    setData(json.data.data);
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
  };
  useEffect(() => {
    getBarang();
  }, [])


  const ListBarang = (props) => {
    return(

      <View style = {{
        backgroundColor:Putih,
        borderRadius: 8,
        flexDirection: 'row',
        paddingTop: 14,
        borderWidth:1,
        borderColor:BiruPutih,
        paddingLeft:14,
        paddingRight:14,
        paddingBottom:14,
        marginTop: 6,
        marginBottom: 6
        }}>
        <Image source={{
          uri:
            "https://7ef1-114-125-22-202.ap.ngrok.io/storage/barangs/" + props.gambar,
          width: "50%",
          height: "50%",
        }} style={styles.produkBarang}/>
        <View style={styles.isiBarang}>
          <Text style={{fontSize:16, fontWeight:'bold',color:BiruTua, width: 200}}>{props.nama_barang}</Text>
          <Text style={{fontSize:12, fontWeight:'normal', color:BiruTua, marginTop:7.6}}>Kode T001</Text>
          <Text style={{fontSize:12, fontWeight:'800', color:BiruMuda2, marginTop:5.13}}>Rp {props.harga_barang}</Text>
          </View>
          <View style={styles.kiriBarang}>
          <Text style={{fontSize:14, fontWeight:'bold',color:BiruTua, marginLeft: 40}}>{props.stok} Pcs</Text>
          <TouchableOpacity style={styles.tombolBarang} onPress={() => navigation.navigate('detailbarang')}>
          <Text style={{fontSize:10, fontWeight:'800', color:Putih, textAlign:'center', marginTop:3.5}}>Detail</Text>
          </TouchableOpacity>
            </View>
      </View>

    );
  };

  if(isLoading) {
    <ActivityIndicator />;
  } else {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
    <Search />
    <View style={styles.mainMenu}>
      <View style={styles.contentMenu}>
        <TouchableOpacity onPress={() => navigation.navigate('admin')}>
          <Image style={{ width: 24, height: 24, marginLeft: 7, marginTop: 15 }} source={require('../assets/Admin.png')} />
        </TouchableOpacity>
        <Text style={styles.judul2Menu}>Admin</Text>

        <TouchableOpacity onPress={() => navigation.navigate('jenis')}>
          <Image style={{ width: 24, height: 24, marginLeft: 10, marginTop: 15 }} source={require('../assets/Jenis.png')} />
        </TouchableOpacity>
        <Text style={styles.judulMenu}>Jenis Barang</Text>
      </View>

      <View style={styles.content2Menu}>
        <TouchableOpacity onPress={() => navigation.navigate('supplier')}>
          <Image style={{ width: 24, height: 24, marginLeft: 15, marginTop: 15 }} source={require('../assets/Supplier.png')} />
        </TouchableOpacity>
        <Text style={styles.judul3Menu}>Supplier</Text>

        <TouchableOpacity onPress={() => navigation.navigate('barangmasuk')}>
          <Image style={{ width: 24, height: 24, marginLeft: 15, marginTop: 15 }} source={require('../assets/Masuk.png')} />
        </TouchableOpacity>
        <Text style={styles.judulMenu}>Barang Masuk</Text>
      </View>

      <View style={styles.content2Menu}>
        <TouchableOpacity onPress={() => navigation.navigate('pegawai')}>
          <Image style={{ width: 24, height: 24, marginLeft: 10, marginTop: 15 }} source={require('../assets/Pegawai.png')} />
        </TouchableOpacity>
        <Text style={styles.judul2Menu}>Pegawai</Text>

        <TouchableOpacity onPress={() => navigation.navigate('barangkeluar')}>
          <Image style={{ width: 24, height: 24, marginLeft: 15, marginTop: 15 }} source={require('../assets/Keluar.png')} />
        </TouchableOpacity>
        <Text style={styles.judulMenu}>Barang Keluar</Text>
      </View>

      <View style={styles.content2Menu}>
        <TouchableOpacity onPress={() => navigation.navigate('barang')}>
          <Image style={{ width: 24, height: 24, marginLeft: 3, marginTop: 15 }} source={require('../assets/Barang.png')} />
        </TouchableOpacity>
        <Text style={styles.judulMenu}>Barang</Text>

        <TouchableOpacity onPress={() => navigation.navigate('beranda')}>
          <Image style={{ width: 24, height: 24, marginLeft: 4, marginTop: 15 }} source={require('../assets/Lainnya.png')} />
        </TouchableOpacity>
        <Text style={styles.judulMenu}>Lainnya</Text>
      </View>
    </View>

    <Jenis />

      <View style={{flex: 1, backgroundColor: '#FFFFFF', marginLeft: 16, marginTop: 20}}>
        <Text style={styles.jenisKain}>Produk Kain Centra Moda</Text>
        <ScrollView>
  
          <View style={styles.cardBarang}>{
            data.map((val) => {
              return (
                <ListBarang 
                gambar={val.gambar}
                nama_barang={val.nama_barang}
                harga_barang={val.harga_barang}
                stok={val.stok}
                />
              )
            })
          }
        </View>
      </ScrollView>
  
      </View>

      <View style={styles.mainNavbar}>
      <View style={styles.contentNavbar}>
        <TouchableOpacity onPress={() => navigation.navigate('beranda')}>
          <Image style={{ width: 24, height: 24, marginLeft: 9 }} source={require('../assets/Home.png')} />
        </TouchableOpacity>
        <Text style={styles.judulNavbar}>Beranda</Text>
      </View>
      <View style={styles.contentNavbar2}>
        <TouchableOpacity onPress={() => navigation.navigate('listawal')}>
          <Image style={{ width: 24, height: 24, marginLeft: 12 }} source={require('../assets/List.png')} />
        </TouchableOpacity>
        <Text style={styles.judulNavbar2}>Daftar Data</Text>
      </View>
      <View style={styles.contentNavbar2}>
        <TouchableOpacity onPress={() => navigation.navigate('about')}>
          <Image style={{ width: 24, height: 24, marginLeft: 7 }} source={require('../assets/About.png')} />
        </TouchableOpacity>
        <Text style={styles.judulNavbar2}>Tentang</Text>
      </View>
      <View style={styles.contentNavbar2}>
        <TouchableOpacity onPress={() => navigation.navigate('profil')}>
          <Image style={{ width: 24, height: 24, marginLeft: 3 }} source={require('../assets/profil.png')} />
        </TouchableOpacity>
        <Text style={styles.judulNavbar2}>Profil</Text>
      </View>
    </View>
  </View>
    );
  }

  
}


const styles = StyleSheet.create({
  mainMenu: {
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
  contentMenu: {
    flexDirection: 'column'
  },
  content2Menu: {
    flexDirection: 'column',
    paddingLeft: 30,
    marginBottom:10
  },
  judulMenu: {
    fontSize: 10, 
    marginTop: 6,
    color: '#101452',
    marginBottom: 6
  },
  judul2Menu: {
    fontSize: 10, 
    marginTop: 6,
    marginLeft: 5,
    color: '#101452',
    marginBottom: 6
  },
   judul3Menu: {
    fontSize: 10, 
    marginTop: 6,
    marginLeft: 10,
    color: '#101452',
    marginBottom: 6
  },
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
  contentNavbar2: {
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

  judulNavbar2: {
    fontSize: 10, 
    fontWeight: 'bold',
    marginTop: 6,
    textAlign: 'center',
    color: '#000',
  },
  mainBarang:{
    justifyContent:'center',
    marginLeft:36,
    marginRight:36,
    marginBottom:36,
    
  },
  cardBarang: {
    borderRadius:8,
    shadowColor: "#c6c6c6", 
    marginLeft: 5,
    marginRight: 21
  },
  isiBarang:{
    flexDirection:'column',
    marginLeft: 14,
    alignItems:'stretch',
    width:145
  },
  produkBarang:{
    width:50,
    height:50,
    marginTop:6, 
    borderRadius: 8
  },
  kiriBarang: {
    alignItems:'center',
    marginLeft:13
  },
  tombolBarang: {
    width:62,
    height:22.4,
    borderRadius:8,
    backgroundColor:BiruMuda2,
    marginTop:17,
    marginLeft: 56
  },
  jenisKain:{
    fontSize:16,
    fontWeight:'700',
    color:'#101452',
    marginLeft:5,
    marginBottom:10,
    alignItems:'center'
  },

});
