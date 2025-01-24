import React, { useEffect, useState } from "react";
import {View, StyleSheet, TextInput, Image, TouchableOpacity, Text, ScrollView, ActivityIndicator} from 'react-native';
import {UnguMuda,UnguMuda2,UnguTua,Putih, BiruMuda2, BiruPutih, BiruTua} from './Warna'
import {Feather} from '@expo/vector-icons';
import back from '../assets/back.png'

import Judul from './Barang_Judul'
import Data from './Barang_List'
import Search from './search'

export default function BarangMasuk({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log("data")
  const getBarangMasuk = async () => {
    try {
      const response = await fetch(
        "https://7ef1-114-125-22-202.ap.ngrok.io/api/barang_masuks"

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
    getBarangMasuk();
  }, [])


  const ListBarangMasuk = (props) => {
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
        marginBottom: 6,
        marginLeft: 36,
        marginRight: 36
        }}>
        <Image source={{
          uri:
            "https://7ef1-114-125-22-202.ap.ngrok.io/storage/barangs/" + props.gambar,
          width: "50%",
          height: "50%",
        }} style={styles.produkBarang}/>
        <View style={styles.isiBarang}>
          <Text style={{fontSize:16, fontWeight:'bold',color:BiruTua, width: 180}}>{props.nama_barang}</Text>
          <Text style={{fontSize:12, fontWeight:'400', color:'#101452', marginTop: 8}}>{props.tgl_masuk}</Text>
          <Text style={{fontSize:12, fontWeight:'normal', color:BiruTua, marginTop:7.6}}>Supplier {props.nama_supplier}</Text>
          </View>
          <View style={styles.kiriBarang}>
            <Text style={{fontSize:14, fontWeight:'bold',color:BiruTua, marginLeft: 40}}>{props.stok} Pcs</Text>
            
        </View>
      </View>

    );
  };

  if(isLoading) {
    <ActivityIndicator />;
  } else {
    return (
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        
        
        <ScrollView>
  
          <View style={styles.cardBarang}>{
            data.map((val) => {
              return (
                <ListBarangMasuk 
                gambar={val.gambar}
                nama_barang={val.nama_barang}
                tgl_masuk={val.tgl_masuk}
                nama_supplier={val.nama_supplier}
                stok={val.jml_brg_masuk}
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
        shadowColor: "#c6c6c6"
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
        marginLeft: 26
      },
        // Some code
        mainBack:{
          alignItems: 'center',
          flexDirection:'row',
          justifyContent: 'center', 
          paddingRight: 53,
          paddingLeft: 24
        },
      
        judulBack: {
          fontSize: 24, 
          fontWeight: 'bold',
          marginTop: 33,
          textAlign: 'center',
          color: '#101452',
          marginLeft: 6
        },
        buttonBack: {
          justifyContent:'center',
          alignItems:'center', 
          borderRadius:15,
          marginRight: 40
        }
        
      
});