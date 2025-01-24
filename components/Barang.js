import React, { useEffect, useState } from "react";
import {View, StyleSheet, TextInput, Image, TouchableOpacity, Text, ScrollView, ActivityIndicator} from 'react-native';
import {UnguMuda,UnguMuda2,UnguTua,Putih, BiruMuda2, BiruPutih, BiruTua} from './Warna'
import {Feather} from '@expo/vector-icons';
import back from '../assets/back.png'

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
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <View style={styles.mainBack}>
          <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('beranda')}>
            <Image style={{ width: 24, height: 24, marginTop: 33 }} source={back} />
          </TouchableOpacity>
          <Text style={styles.judulBack}>List Data Barang</Text>
        </View>
        <Search/>
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


/*const KatunBiasa = () => {
  return(
    <>
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
      marginTop:11.6
      }}>
      <Image source={require('../assets/KB.png')} style={styles.produkBarang}/>
      <View style={styles.isiBarang}>
        <Text style={{fontSize:16, fontWeight:'bold',color:BiruTua}}>Katun Biasa</Text>
        <Text style={{fontSize:12, fontWeight:'normal', color:BiruTua, marginTop:7.6}}>Kode T001</Text>
        <Text style={{fontSize:12, fontWeight:'800', color:BiruMuda2, marginTop:5.13}}>Rp 17.000</Text>
        </View>
        <View style={styles.kiriBarang}>
          <Text style={{fontSize:16, fontWeight:'bold',color:BiruTua}}>50 Pcs</Text>
          <View style={styles.tombolBarang}>
            <Text style={{fontSize:10, fontWeight:'800', color:Putih, textAlign:'center', marginTop:5}}>Detail</Text>
          </View>
      </View>
    </View>
    </>
  )
}
const KatunJepangGA = () => {
  return(
    <>
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
      marginTop:11.6
      }}>
      <Image source={require('../assets/KJGA.png')} style={styles.produkBarang}/>
      <View style={styles.isiBarang}>
        <Text style={{fontSize:14, fontWeight:'bold',color:BiruTua}}>Katun Jepang GA</Text>
        <Text style={{fontSize:10.5, fontWeight:'normal', color:BiruTua, marginTop:7.6}}>Kode T001</Text>
        <Text style={{fontSize:10.5, fontWeight:'800', color:BiruMuda2, marginTop:5.13}}>Rp 23.000</Text>
        </View>
        <View style={styles.kiriBarang}>
          <Text style={{fontSize:14, fontWeight:'bold',color:BiruTua}}>800 Pcs</Text>
          <View style={styles.tombolBarang}>
            <Text style={{fontSize:10.5, fontWeight:'800', color:Putih, textAlign:'center', marginTop:4}}>Detail</Text>
          </View>
      </View>
    </View>
    </>
  )
}
const KatunParis = () => {
  return(
    <>
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
      marginTop:11.6
      }}>
      <Image source={require('../assets/KP.png')} style={styles.produkBarang}/>
      <View style={styles.isiBarang}>
        <Text style={{fontSize:16, fontWeight:'bold',color:BiruTua}}>Katun Paris</Text>
        <Text style={{fontSize:12, fontWeight:'normal', color:BiruTua, marginTop:7.6}}>Kode T001</Text>
        <Text style={{fontSize:12, fontWeight:'800', color:BiruMuda2, marginTop:5.13}}>Rp 10.000</Text>
        </View>
        <View style={styles.kiriBarang}>
          <Text style={{fontSize:16, fontWeight:'bold',color:BiruTua}}>230 Pcs</Text>
          <View style={styles.tombolBarang}>
            <Text style={{fontSize:10, fontWeight:'800', color:Putih, textAlign:'center', marginTop:5}}>Detail</Text>
          </View>
      </View>
    </View>
    </>
  )
}
const KatunSupernova = () => {
  return(
    <>
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
      marginTop:11.6
      }}>
      <Image source={require('../assets/KS.png')} style={styles.produkBarang}/>
      <View style={styles.isiBarang}>
        <Text style={{fontSize:16, fontWeight:'bold',color:BiruTua}}>Katun Supernova</Text>
        <Text style={{fontSize:12, fontWeight:'normal', color:BiruTua, marginTop:7.6}}>Kode T001</Text>
        <Text style={{fontSize:12, fontWeight:'800', color:BiruMuda2, marginTop:5.13}}>Rp 17.000</Text>
        </View>
        <View style={styles.kiriBarang}>
          <Text style={{fontSize:16, fontWeight:'bold',color:BiruTua}}>50 Pcs</Text>
          <View style={styles.tombolBarang}>
            <Text style={{fontSize:10, fontWeight:'800', color:Putih, textAlign:'center', marginTop:5}}>Detail</Text>
          </View>
      </View>
    </View>
    </>
  )
}
const LinenTebal = () => {
  return(
    <>
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
      marginTop:11.6
      }}>
      <Image source={require('../assets/LT.png')} style={styles.produkBarang}/>
      <View style={styles.isiBarang}>
        <Text style={{fontSize:16, fontWeight:'bold',color:BiruTua}}>Linen Tebal</Text>
        <Text style={{fontSize:12, fontWeight:'normal', color:BiruTua, marginTop:7.6}}>Kode T001</Text>
        <Text style={{fontSize:12, fontWeight:'800', color:BiruMuda2, marginTop:5.13}}>Rp 20.000</Text>
        </View>
        <View style={styles.kiriBarang}>
          <Text style={{fontSize:16, fontWeight:'bold',color:BiruTua}}>300 Pcs</Text>
          <View style={styles.tombolBarang}>
            <Text style={{fontSize:10, fontWeight:'800', color:Putih, textAlign:'center', marginTop:5}}>Detail</Text>
          </View>
      </View>
    </View>
    </>
  )
}*/
