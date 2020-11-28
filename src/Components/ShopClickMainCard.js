import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import AndDesign from 'react-native-vector-icons/AntDesign'

export default function ShopClickMainCard() {
    return (
        <View style={styles.container}>

            <View style={styles.cardContainer}>

                <View style={styles.shopImageCircle}>
                    <Image style={styles.shopimage}  source={require('../Assets/jammer.png')}/>

                
                </View>

                <View>
                     <Text style={styles.shopTitle}>Jammer Splash</Text>

                     <View style={styles.rpfContainer}>                 
                         
                    <View style={styles.ratingsContainer}>
                     <Ionicons name="star-half-sharp" size={16} color="#88026E"/>

                     <View style={styles.ratings}>
                         <Text>4.5</Text>
                         <Text style={styles.ratingsText}>Rating</Text>

                     </View>



                     </View>

                     <View style={styles.ratingsContainer}>
                     <AndDesign name="CodeSandbox" size={16} color="#88026E"/>

                     <View style={styles.ratings}>
                         <Text>298</Text>
                         <Text style={styles.ratingsText}>Products</Text>

                     </View>



                     </View>


                     
                     <View style={styles.ratingsContainer}>
                     <Ionicons name="ios-person-sharp" size={16} color="#88026E"/>

                     <View style={styles.ratings}>
                         <Text>1.9k</Text>
                         <Text style={styles.ratingsText}>Folowers</Text>

                     </View>



                     </View>
                     

                     </View>


                    
                    </View>

                   
                   

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({

container:
{
    width:'95%',
    height:'45%',
    elevation:10,
    backgroundColor:'#fff',
    borderRadius:20,
    alignSelf:'center',
    padding:25



},

cardContainer:
{
    flexDirection:'row'

},

shopImageCircle:
{

    width:80,
    height:80,
    borderRadius:40,
    backgroundColor:'#8B0160',
    justifyContent:'center',
    alignItems:'center'

},

shopimage:
{
    width:60,
    height:35,

    

},

shopTitle:{

    fontSize:22,
    marginLeft:10,
},


ratingsContainer:
{
  flexDirection:'row',
  marginLeft:10
},

ratings:
{
  marginLeft:7
},

ratingsText:{
 color:'gray'

},

rpfContainer:
{
    flexDirection:'row',
    marginTop:10

}




})
