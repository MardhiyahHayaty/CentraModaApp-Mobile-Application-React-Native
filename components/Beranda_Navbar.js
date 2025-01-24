import * as React from 'react';
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {Biru1} from './Warna';

export default function MenuUtama({navigation}) {
  return (
    <View style={styles.main}>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('onboarding3')}>
          <Image style={{ width: 24, height: 24, marginLeft: 9 }} source={require('../assets/Home.png')}/>
        </TouchableOpacity>
        <Text style={styles.judul}>Beranda</Text>
      </View>
      <View style={styles.content2}>
        <TouchableOpacity onPress={() => navigation.navigate('onboarding3')}>
          <Image style={{ width: 24, height: 24, marginLeft: 6 }} source={require('../assets/List.png')}/>
        </TouchableOpacity>
        <Text style={styles.judul2}>List Data</Text>
      </View>
      <View style={styles.content2}>
        <TouchableOpacity onPress={() => navigation.navigate('onboarding3')}>
          <Image style={{ width: 24, height: 24, marginLeft: 3 }} source={require('../assets/About.png')}/>
        </TouchableOpacity>
        <Text style={styles.judul2}>About</Text>
      </View>
      <View style={styles.content2}>
        <TouchableOpacity onPress={() => navigation.navigate('onboarding3')}>
          <Image style={{ width: 24, height: 24, marginLeft: 3 }} source={require('../assets/profil.png')}/>
        </TouchableOpacity>
        <Text style={styles.judul2}>Profil</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  content: {
    flexDirection: 'column',
  },
  content2: {
    flexDirection: 'column',
    paddingLeft: 60
  },
  judul: {
    fontSize: 10, 
    fontWeight: 'bold',
    marginTop: 6,
    textAlign: 'center',
    color: '#7486D4',
  },

  judul2: {
    fontSize: 10, 
    fontWeight: 'bold',
    marginTop: 6,
    textAlign: 'center',
    color: '#000',
  },


});