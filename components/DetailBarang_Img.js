import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native';

export default function Img() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log("data")
  const getGambar = async () => {
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
    getGambar();
  }, [])

  const Detail=(props) => {
    return(
      <View>
        <Image source={{
          uri:
            "https://7ef1-114-125-22-202.ap.ngrok.io/storage/barangs/" + props.gambar,
          width: "10%",
          height: "20%",
        }} style={styles.main}/>
    </View>
    );
  };
  if(isLoading) {
    <ActivityIndicator />;
  } else {
      return(
        <View>
          {
            data.map((val) => {
              return (
                <Detail 
                gambar={val.gambar}
                />
              )
            })
          }
        </View>
      );
  }

}

const styles = StyleSheet.create({
  main: {
    width:336,
    marginLeft:36,
    marginTop:47,
    alignItems: 'center'
  }
})