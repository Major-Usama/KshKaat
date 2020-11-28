import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import ShopClickMainCard from '../Components/ShopClickMainCard';


export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#88026E" />
      <LinearGradient
        colors={['#88026E', '#7C069F', '#6F10D1']}
        style={styles.linearGradient}>
            <View style={styles.header}>
            <Feather
                name="menu"
                size={28}
                color="#ffffff"
                style={styles.drawerIcon}
            />

            <Image source={require('../Assets/logo.png')} style={styles.logo} />

            <Feather
                name="menu"
                size={28}
                color="#ffffff"
                style={styles.drawerIcon}
            />


            </View>

        <View style={styles.contentContainer}>

            <ShopClickMainCard />
         
        </View>

        
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#830381',
  },

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },

  logo: {
    width: 130,
    height: 30,
  },

  drawerIcon: {
    marginTop: 10,
  },

  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 10,
    padding: 2,
  },
});
