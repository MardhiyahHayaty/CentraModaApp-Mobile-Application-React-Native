import { useLinkProps } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import {UnguMuda,UnguMuda2,UnguTua,Putih} from './Warna'

export default function Tengah() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getPegawai = async () => {
    try {
      const response = await fetch(
        "https://7ef1-114-125-22-202.ap.ngrok.io/api/pegawais"

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
    getPegawai();
  }, [])

  const ListPegawai = (props) => {
    return(
      <>
      <View style = {{
        backgroundColor:Putih,
        padding: 8,
        borderRadius: 8,
        marginBottom: 10,
        flexDirection: 'row',
        borderWidth:1,
        borderColor:'#CED9FB',
      }}>
      <Image source={require('../assets/pegawai1.png')} />
      <View style={styles.isi}>
      <Text style={{fontSize:16, fontWeight:'bold'}}>{props.nama_pegawai}</Text>
      <Text style={{fontSize:12, fontWeight:'600', color:UnguTua}}>Pegawai</Text>
      <Text style={{fontSize:12, fontWeight:'600', color:UnguTua}}>{props.email_pegawai}</Text>
      </View>
      
      </View>
      </>
    );
  };
  if (isLoading) {
    <ActivityIndicator />;
  } else {
    return (
      <View style={styles.main}>
        <View style={styles.card}>
          {
            data.map((val) => {
              return (
                <ListPegawai
                  nama_pegawai={val.nama_pegawai}
                  email_pegawai={val.email_pegawai}
                />
              )
            })
          }

        </View>
      </View>
      );
  }

}

const styles = StyleSheet.create({

  // Some code
      main:{
        justifyContent:'center',
        paddingLeft:15,
        paddingRight:15,
      },
      card: {
        borderRadius:8,
        borderColor:UnguMuda,
        border:UnguMuda,
        padding:16,
      },
      isi:{
        flexDirection:'column',
        marginLeft: 14,
      }
});