import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Categories({title}) {
    return (
        <View style={styles.container}>
             <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({


container:
{
    
   
   padding:8, 
    backgroundColor:'#88026E',
    borderRadius:18,
    marginTop:25,


},
text:
{
    color:"#ffff",
    fontSize:13
}

})
