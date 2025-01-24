import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding1 from './components/onboarding1'
import Onboarding2 from './components/onboarding2'
import Onboarding3 from './components/onboarding3'
import Register from './components/Register'
import Login from './components/Login'
import LandingPage from './components/LandingPage'
import Beranda from './components/Beranda'
import ListAwal from './components/ListAwal'
import About from './components/About'
import Profil from './components/Profil'
import BarangMasuk from './components/BarangMasuk'
import BarangKeluar from './components/BarangKeluar'
import Barang from './components/Barang'
import Jenis from './components/Jenis'
import Pegawai from './components/Pegawai'
import Supplier from './components/Supplier'
import Admin from './components/Admin'
import DetailBarang from './components/DetailBarang'

const Stack = createNativeStackNavigator();
export default function  App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
    <Stack.Navigator >
      
      <Stack.Screen name="onboarding1" component={Onboarding1}  options={{headerShown: false}}  />
      <Stack.Screen name="onboarding2" component={Onboarding2}  options={{headerShown: false}} />
      <Stack.Screen name="onboarding3" component={Onboarding3}  options={{headerShown: false}} />
      <Stack.Screen name="lp" component={LandingPage}  options={{headerShown: false}} />
      <Stack.Screen name="register" component={Register}  options={{headerShown: false}} />
      <Stack.Screen name="login" component={Login}  options={{headerShown: false}} />
      <Stack.Screen name="beranda" component={Beranda}  options={{headerShown: false}} />
      <Stack.Screen name="listawal" component={ListAwal}  options={{headerShown: false}} />
      <Stack.Screen name="about" component={About}  options={{headerShown: false}} />
      <Stack.Screen name="profil" component={Profil}  options={{headerShown: false}} />
      <Stack.Screen name="barangmasuk" component={BarangMasuk}  options={{headerShown: false}} />
      <Stack.Screen name="barangkeluar" component={BarangKeluar}  options={{headerShown: false}} />
      <Stack.Screen name="barang" component={Barang}  options={{headerShown: false}} />
      <Stack.Screen name="jenis" component={Jenis}  options={{headerShown: false}} />
      <Stack.Screen name="pegawai" component={Pegawai}  options={{headerShown: false}} />
      <Stack.Screen name="supplier" component={Supplier}  options={{headerShown: false}} />
      <Stack.Screen name="admin" component={Admin}  options={{headerShown: false}} />
      <Stack.Screen name="detailbarang" component={DetailBarang}  options={{headerShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },

  
});


/*export default function App() {
  return (
    <View style={{marginTop:Constants.statusBarHeight}}>
      <Register />
    </View>
  );
}*/

/*
export default function App() {
  return (
    <View style={{marginTop:Constants.statusBarHeight}}>
      <DetailBarang_Judul />
      <Img />
      <Describe />
    </View>
  );
}*/

/*//List Data Barang
export default function App() {
  return (
    <View style={{marginTop:Constants.statusBarHeight}}>
      <Judul />
      <Search />
      <ListBarang />
    </View>
  );
}*/



/*
//List Awal
export default function App() {
  return (
    <View style={{marginTop:Constants.statusBarHeight}}>
      <ListAwal_Judul />
      <ListAwal_ListMenu />
      <ListAwal_Navbar />
    </View>
  );
}*/

/*//Login
export default function App(){
  return(
    <View style = {{marginTop:Constants.statusBarHeight}}>
    <Login_Atas/>
    <Login_Inputan/>
    <Login_Bawah/>
    </View>
  );
}*/

/*function Login({navigation}) {
  return (
    <View style={{ marginTop: Constants.statusBarHeight }}>
      <Login_Atas/>
      <Login_Inputan/>
      <Login_Bawah/>
    </View>
  );
}*/
/*
//List Pegawai
export default function App(){
  return(
    <View style = {{marginTop:Constants.statusBarHeight}}>
    <Pegawai_Atas/>
    <Pegawai_Tengah/>
    </View>
  );
}*/

/*//Register
export default function App(){
  return(
    <View style = {{marginTop:Constants.statusBarHeight}}>
    <Register_Header/>
    <Register_Inputan/>
    <Register_Bawah/>
    </View>
  );
}*/

/*function Register({navigation}) {
  return (
    <View style={{ marginTop: Constants.statusBarHeight }}>
      <Register_Header/>
    <Register_Inputan/>
    <Register_Bawah/>
    </View>
  );
}*/


/*
//Barang Keluar
export default function App() {
  return (
    <View style={{marginTop:Constants.statusBarHeight}}>
      <BarangKeluar_Judul />
      <Search />
      <BarangKeluar_Data />
    </View>
  );
}*/


/*//Beranda
export default function App() {
  return (
    <View style={{marginTop:Constants.statusBarHeight}}>
      <Search />
      <Beranda_Menu />
      <Beranda_Jenis />
      <Beranda_Produk />
      <Beranda_Produk1 />
      <Beranda_Produk2 />
      <Beranda_Navbar />
    </View>
  );
}*/

/*//Barang Masuk
export default function  App() {
  return (
    <View style={{marginTop:Constants.statusBarHeight}}>
      <JudulBarangMasuk />
      <Search />
      <ScrollView>
        <DataBarangMasuk/>
      </ScrollView>
    </View>
  );
}*/

/*function BarangMasuk({navigation}) {
  return (
    <View style={{ marginTop: Constants.statusBarHeight }}>
       <JudulBarangMasuk />
      <Search />
      <ScrollView>
        <DataBarangMasuk/>
      </ScrollView>
    </View>
  );
}*/



