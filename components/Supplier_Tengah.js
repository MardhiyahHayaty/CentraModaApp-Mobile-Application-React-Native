import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import {UnguMuda,UnguMuda2,UnguTua,Putih} from './Warna'

export default function Tengah() {
  const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const getSupplier = async () => {
        try {
            const response = await fetch(
                "https://7ef1-114-125-22-202.ap.ngrok.io/api/suppliers"

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
        getSupplier();
    }, [])


    const ListSupplier = (props) => {
      return(
        <>
        <View style = {{
          backgroundColor:'#FFFFFF',
          padding: 8,
          borderRadius: 8,
          marginBottom: 10,
          flexDirection: 'row',
          borderWidth:1,
          borderColor:'#CED9FB',
        }}>
        <Image source={require('../assets/supp1.png')} />
        <View style={styles.isi}>
        <Text style={{fontSize:16, fontWeight:'bold'}}>{props.nama_supplier}</Text>
        <Text style={{fontSize:12, fontWeight:'600', color:UnguTua}}>Supplier</Text>
        <Text style={{fontSize:12, fontWeight:'600', color:UnguTua}}>{props.email_supplier}</Text>
        </View>
        
        </View>
        </>
      )
    }
    if (isLoading) {
      <ActivityIndicator />;
    } else {
      return (
        <View style={styles.main}>
          <View style={styles.card}>
            {
              data.map((val) => {
                return (
                    <ListSupplier
                        nama_supplier={val.nama_supplier}
                        email_supplier={val.email_supplier}
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