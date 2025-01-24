import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native';
import {blues, sky_blue, cutton, white} from './Warna'

export default function Describe() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log("data")
  const getDetail = async () => {
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
    getDetail();
  }, [])

  const Detail=(props) => {
    return(

        <View>
        <Image source={{
          uri:
            "https://7ef1-114-125-22-202.ap.ngrok.io/storage/barangs/" + props.gambar,
          width: "10%",
          height: "30%",
        }} style={styles.mainImg}/>
      <View style={styles.main}>
      <Text style={{fontSize:24, color:blues, fontWeight:'600'}}>{props.nama_barang}</Text>
      <Text style={{fontSize:14, color:blues, fontWeight:'400', marginTop:6}}>Kode T001</Text>
      <View style={{flexDirection:'row', marginTop:24}}>
      <View style={{flexDirection:'column', width:70}}>
        <Text style={{fontSize:16, color:blues}}>Stok</Text>
        <Text style={{fontSize:16, color:cutton, fontWeight:'700'}}>{props.stok} Pcs</Text>
      </View>

      <View style={{flexDirection:'column', width:90, marginLeft:172}}>
        <Text style={{fontSize:16, color:blues}}>Harga</Text>
        <Text style={{fontSize:16, color:cutton, fontWeight:'700'}}>Rp {props.harga_barang}</Text>
      </View>
        </View>
      <View
        style={{
          borderBottomColor: blues,
          borderBottomWidth: 1,
          marginTop:24
        }}
      />
      <Text style={styles.txt}>
        Kain {props.nama_barang} dibuat dari bahan yang biasanya digunakan sebagai bahan gamis karena memiliki karakteristik lembut dengan warna mengkilap dan tidak luntur. Selain itu memiliki daya serap keringat yang lebih baik daripada jenis katun lainnya.
      </Text>
    </View>
    </View>
    );
  };
  if(isLoading) {
    <ActivityIndicator />;
  } else {
      return(
        <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
          {
            data.map((val) => {
              return (
                <Detail 
                gambar={val.gambar}
                nama_barang={val.nama_barang}
                harga_barang={val.harga_barang}
                stok={val.stok}
                />
              )
            })
          }
        </View>
      );
  }

  
}


const styles = StyleSheet.create({
  main:{
    marginLeft:36,
    marginRight:36,

  },  
  txt:{
    fontSize:14,
    marginTop:14,
    color:blues,
    textAlign:'justify'
  },
    mainImg: {
      width:336,
      marginLeft:36,
      marginTop:47,
      alignItems: 'center',
      borderRadius: 8,
      marginBottom: 12
    }
})