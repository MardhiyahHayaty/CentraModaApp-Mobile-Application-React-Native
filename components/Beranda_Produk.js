import React, { useEffect, useState } from "react";
import {View, StyleSheet, TextInput, Image, TouchableOpacity, Text, ScrollView, ActivityIndicator} from 'react-native';
import {UnguMuda,UnguMuda2,UnguTua,Putih, BiruMuda2, BiruPutih, BiruTua} from './Warna'
import {Feather} from '@expo/vector-icons';

import Judul from './Barang_Judul'
import Data from './Barang_List'
import Search from './search'

export default function Barang({navigation}) {
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
          <TouchableOpacity style={styles.tombolBarang} onPress={() => navigation.navigate('login')}>
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
    );
  }

  
}

const styles = StyleSheet.create({
  // Some code
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


