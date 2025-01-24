import * as React from 'react';
import {View, StyleSheet, TextInput, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import {Biru1, BiruMuda, White, UnguMuda,UnguMuda2,UnguTua,Putih} from './Warna'
import {Feather} from '@expo/vector-icons';

import Judul from './About_Judul'
import Isi from './About_Isi'
import Contact from './About_Contact'

export default function Login({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <Judul />
        <ScrollView>
          <Isi />
          <Contact />
        </ScrollView>
        <View style={styles.main}>
          <View style={styles.content}>
            <TouchableOpacity onPress={() => navigation.navigate('beranda')}>
              <Image style={{ width: 24, height: 24, marginLeft: 9 }} source={require('../assets/beranda.png')}/>
            </TouchableOpacity>
            <Text style={styles.judul2}>Beranda</Text>
          </View>
          <View style={styles.content2}>
            <TouchableOpacity onPress={() => navigation.navigate('listawal')}>
              <Image style={{ width: 24, height: 24, marginLeft: 12 }} source={require('../assets/List.png')}/>
            </TouchableOpacity>
            <Text style={styles.judul2}>Daftar Data</Text>
          </View>
          <View style={styles.content2}>
            <TouchableOpacity onPress={() => navigation.navigate('about')}>
              <Image style={{ width: 24, height: 24, marginLeft: 7 }} source={require('../assets/about3.png')}/>
            </TouchableOpacity>
            <Text style={styles.judul}>Tentang</Text>
          </View>
          <View style={styles.content2}>
            <TouchableOpacity onPress={() => navigation.navigate('profil')}>
              <Image style={{ width: 24, height: 24, marginLeft: 3 }} source={require('../assets/profil.png')}/>
            </TouchableOpacity>
            <Text style={styles.judul2}>Profil</Text>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderTopWidth:1,
    borderColor:'#CED9FB',
    paddingTop: 10
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

