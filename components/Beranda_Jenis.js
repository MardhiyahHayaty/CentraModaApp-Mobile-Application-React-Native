import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView  } from 'react-native';
import {Biru1} from './Warna';
import { Feather } from '@expo/vector-icons';
import back from '../assets/back.png'
export default function MenuUtama() {
  return (
    <View style={styles.main}>
      <Text style={styles.jenisKain}>Jenis Kain</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.content2}>
            <View style={styles.content}>
              <Image style={{ width: 50, height: 50, marginLeft:24, marginTop:15 }} source={require('../assets/Katun.png')}/>
              <Text style={styles.judul2}>Kain Katun</Text>
            </View>

            <View style={styles.content}>
              <Image style={{ width: 50, height: 50, marginLeft:24, marginTop:15 }} source={require('../assets/Modal.png')}/>
              <Text style={styles.judul2}>Kain Modal</Text>
            </View>

            <View style={styles.content}>
              <Image style={{ width: 50, height: 50, marginLeft:24, marginTop:15 }} source={require('../assets/Sutra.png')}/>
              <Text style={styles.judul2}>Kain Sutra</Text>
            </View>

            <View style={styles.content}>
              <Image style={{ width: 50, height: 50, marginLeft:24, marginTop:15 }} source={require('../assets/Linen.png')}/>
              <Text style={styles.judul2}>Kain Linen</Text>
            </View>

            <View style={styles.content}>
              <Image style={{ width: 50, height: 50, marginLeft:24, marginTop:15 }} source={require('../assets/Sutra.png')}/>
              <Text style={styles.judul2}>Kain Sutra</Text>
            </View>

            <View style={styles.content}>
              <Image style={{ width: 50, height: 50, marginLeft:24, marginTop:15 }} source={require('../assets/Wol.png')}/>
              <Text style={styles.judul2}>Kain Wol</Text>
            </View>
        </View>
      </ScrollView>
    </View>
  );
}
  
const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    marginTop: 20,
  },

  content2: {
    justifyContent: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },

  jenisKain:{
    fontSize:16,
    fontWeight:'700',
    color:'#101452',
    marginLeft:20,
    alignItems:'center'
  },

  judul2: {
    fontSize: 10, 
    marginTop: 6,
    marginLeft: 24,
    color: '#101452',
    marginBottom: 6
  },

  content: {
    flexDirection: 'column',
    paddingLeft: 5
  },
});