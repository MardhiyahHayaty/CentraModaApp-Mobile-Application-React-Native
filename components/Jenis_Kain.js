import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native';
import {blues,sky_blue,cutton,white} from './Warna';

export default function JenisKain(){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getJenisKain = async () => {
    try {
      const response = await fetch(
        "https://7ef1-114-125-22-202.ap.ngrok.io/api/jenis_barangs"

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
    getJenisKain();
  }, [])

  const JenisKain=(props) => {
    return(
      <>
        <View style={{flexDirection:'row'}}>
          <View style={styles.cardl}>
            <Image style={styles.kain} source={require('../assets/Katun1.png')} />
            <Text style={styles.txt}>{props.jenis_barang}</Text>
          </View>
        </View>
      </>
    );
  };
  if (isLoading) {
    <ActivityIndicator />;
  } else {
    return(
      <ScrollView style={{marginTop:52, marginLeft:36, marginRight:36, marginBottom:24}}>
        {
          data.map((val) => {
            return (
                <JenisKain
                    jenis_barang={val.jenis_barang}
                />
            )
        })
        }
      </ScrollView>
    );
  }

  
}

const styles = StyleSheet.create({
  cardl:{
    width: '80%',
    height:151,
    borderWidth:1,
    borderColor:sky_blue,
    borderRadius:8,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    marginLeft: 32
  },
  kain:{
    width:76,
    height: 76,    
    alignSelf: 'center',
    marginTop:24
  },
  txt:{
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    alignContent: 'center',
    color: blues,
    height: 32,
    backgroundColor:sky_blue,
    marginTop:17,
    borderBottomEndRadius:8,    
    paddingTop: 7.5
  },
  cardr:{
    width: '47%',
    marginLeft: 8.5,
    height:151,
    borderWidth:1,
    borderColor:sky_blue,
    borderRadius:8,
    justifyContent: 'center'
  },
})