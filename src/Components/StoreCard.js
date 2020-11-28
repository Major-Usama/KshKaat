import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'

export default function StoreCard({title}) {
    return (
        <View style={styles.container}>

<Image source={require('../Assets/jammer.png')} style={{width:100,height:50}}/>
    <Text style={styles.text}>{title}</Text>         
        </View>
    )
}

const styles = StyleSheet.create({

   container:{

    width:150,
    height:150,
    borderRadius:20,
    backgroundColor:'#fff',
    elevation:12,
    alignItems:'center',
    justifyContent:'space-around',
    marginTop:20,
    marginRight:20
    
   },

   text:
   {
       fontSize:16,
       color:'black',
       opacity:0.8,
   }


})
