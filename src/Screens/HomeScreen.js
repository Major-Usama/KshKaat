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
import AddCraousel from '../Components/AddCraousel';
import Categories from '../Components/Categories';
import StoreCard from '../Components/StoreCard';

export default function HomeScreen() {
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

          <View style={{width: 20, height: 20}}></View>
        </View>

        <View style={styles.contentContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <AddCraousel />

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Categories title="#THE FOOD" />
              <Categories title="#JEVELS" />
              <Categories title="#ELECTRONS" />
              <Categories title="#KITCHEN" />
            </View>

            <Text
              style={{
                color: '#88026E',
                fontSize: 18,
                marginTop: 20,
                marginLeft: 5,
                fontWeight: 'bold',
              }}>
              Whats hot in Market
            </Text>

            <View style={{height: 180}}>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                <StoreCard title="Jammer Splash" />
                <StoreCard title="Burger King" />
                <StoreCard title="Jammer Pizza" />
                <StoreCard title="Jammer Splash" />
                <StoreCard title="Jammer Splash" />
              </ScrollView>
            </View>

            <View style={{marginTop: 30}}>
              <View style={{flexDirection: 'row', backgroundColor: '#C297DD'}}>
                <View
                  style={{width: 50, height: 3, backgroundColor: '#88026E'}}
                />
              </View>

              <Text
                style={{
                  color: '#88026E',
                  fontSize: 18,
                  marginTop: 20,
                  marginLeft: 5,
                  fontWeight: 'bold',
                }}>
                Featured Stores
              </Text>
            </View>
            <View style={{height: 180}}>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                <StoreCard title="Jammer Splash" />
                <StoreCard title="Burger King" />
                <StoreCard title="Jammer Pizza" />
                <StoreCard title="Jammer Splash" />
                <StoreCard title="Jammer Splash" />
              </ScrollView>
            </View>

            <View style={{marginTop: 30}}>
              <View style={{flexDirection: 'row', backgroundColor: '#C297DD'}}>
                <View
                  style={{width: 50, height: 3, backgroundColor: '#88026E'}}
                />
              </View>

              <Text
                style={{
                  color: '#88026E',
                  fontSize: 18,
                  marginTop: 20,
                  marginLeft: 5,
                  fontWeight: 'bold',
                }}>
                Latest Stores
              </Text>
            </View>
            <View style={{height: 180, flex: 1}}>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                <StoreCard title="Jammer Splash" />
                <StoreCard title="Burger King" />
                <StoreCard title="Jammer Pizza" />
                <StoreCard title="Jammer Splash" />
                <StoreCard title="Jammer Splash" />
              </ScrollView>
            </View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#C297DD',
                marginTop: 30,
              }}>
              <View
                style={{width: 50, height: 3, backgroundColor: '#88026E'}}
              />
            </View>

            <Text
              style={{
                fontSize: 20,
                opacity: 0.5,
                alignSelf: 'center',
                marginTop: 50,
              }}>
              Have your own Store?
            </Text>
            <View
              style={{
                width: 200,
                height: 40,
                backgroundColor: '#88026E',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                marginTop: 14,
                marginBottom:50
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>
                Start Selling here
              </Text>
            </View>
          </ScrollView>
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
    padding: 10,
  },
});
