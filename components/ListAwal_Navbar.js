import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {blues, white, sky_blue, cutton} from './Warna'

export default function Navbar() {
  return(
    <View style={styles.main}>
      <Beranda />
      <ListData />
      <About />
      <Profil />
    </View>
  );
}

const Beranda=() => {
  return(
    <>
      <View style = {{
        flexDirection:'column',
        width:44,
        height:42       
      }}>
        <Image source={require('../assets/beranda.png')} style={{width:19.49, height:20, alignSelf:'center'}} />
        <Text style={{fontSize:10, marginTop:7}}>Beranda</Text>
      </View>
    </>
  )
}

const ListData=() => {
  return(
    <>
      <View style = {{
        flexDirection:'column',
        width:44,
        height:43,
        marginLeft:40       
      }}>
        <Image source={require('../assets/List.png')} style={{width:24, height:24, alignSelf:'center'}} />
        <Text style={{fontSize:10, marginTop:3, color:blues}}>List Data</Text>
      </View>
    </>
  )
}

const About=() => {
  return(
    <>
      <View style = {{
        flexDirection:'column',
        width:33,
        height:42,
        marginLeft:44       
      }}>
        <Image source={require('../assets/About.png')} style={{width:24, height:24, alignSelf:'center'}} />
        <Text style={{fontSize:10, marginTop:3,}}>About</Text>
      </View>
    </>
  )
}

const Profil=() => {
  return(
    <>
      <View style = {{
        flexDirection:'column',
        width:32.16,
        height:42,
        marginLeft:44.48
      }}>
        <Image source={require('../assets/profil.png')} style={{width:23.39, height:24, alignSelf:'center'}} />
        <Text style={{fontSize:10, marginTop:3,}}>Profile</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  main:{
    marginLeft:24,
    marginRight:24,
    marginBottom:24,
    flexDirection:'row',
    paddingLeft:24,
    paddingRight:24,
    height:55,
    marginTop:166
  }
});