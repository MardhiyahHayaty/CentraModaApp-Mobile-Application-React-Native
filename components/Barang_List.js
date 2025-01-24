import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import {BiruMuda2, BiruPutih, BiruTua, Putih} from './Warna'
export default function ListBarang() {
  return (
    <ScrollView style={styles.mainBarang}>
      <View style={styles.cardBarang}>
        <TileHalus/>
        <KatunBiasa/>
        <KatunJepangGA/>
        <KatunParis/>
        <KatunSupernova/>
        <LinenTebal />
      </View>
    </ScrollView>
  );
}

const TileHalus = () => {
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
      paddingBottom:14
      }}>
      <Image source={require('../assets/TH.png')} style={styles.produkBarang}/>
      <View style={styles.isiBarang}>
        <Text style={{fontSize:16, fontWeight:'bold',color:BiruTua}}>Tile Halus</Text>
        <Text style={{fontSize:12, fontWeight:'normal', color:BiruTua, marginTop:7.6}}>Kode T001</Text>
        <Text style={{fontSize:12, fontWeight:'800', color:BiruMuda2, marginTop:5.13}}>Rp 20.000</Text>
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
const KatunBiasa = () => {
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
      <View style={styles.isi}>
        <Text style={{fontSize:16, fontWeight:'bold',color:BiruTua}}>Katun Biasa</Text>
        <Text style={{fontSize:12, fontWeight:'normal', color:BiruTua, marginTop:7.6}}>Kode T001</Text>
        <Text style={{fontSize:12, fontWeight:'800', color:BiruMuda2, marginTop:5.13}}>Rp 12.000</Text>
        </View>
        <View style={styles.kiriBarang}>
          <Text style={{fontSize:16, fontWeight:'bold',color:BiruTua}}>90 Pcs</Text>
          <View style={styles.tombolBarang}>
            <Text style={{fontSize:10, fontWeight:'800', color:Putih, textAlign:'center', marginTop:4}}>Detail</Text>
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
        height:46.67,
        marginTop:6
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
        marginTop:17
      }
});
