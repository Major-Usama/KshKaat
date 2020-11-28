import React from 'react';
import {View} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome'

import HomeScreen from '../Screens/HomeScreen'
import SearchScreen from '../Screens/SearchScreen'
import ChatScreen from '../Screens/ChatScreen'
import GlobalCartScreen from '../Screens/GlobalCartScreen'



const Tab = createBottomTabNavigator();

export default function AuthNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator

        lazy={false}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'youtube-tv' : 'youtube-tv';
            } else if (route.name === 'Messages') {
              iconName = focused ? 'timetable' : 'timetable';
            }

            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },

        })}



        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#88026E',
         


          tabStyle:
          {
            justifyContent: 'center',
            paddingTop: 15,

          }
        }}

      >
        <Tab.Screen

          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: '',
            
            tabBarIcon: ({ color }) => (
                <View
                style={{
                    position: 'absolute',
                    bottom: -8, // space from bottombar
                    height: 60,
                    width: 60,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:'#88026E'
                }}
                >
                <AntDesign name="home" color={color} size={35} />
                </View>
            )

          }}
        />
        <Tab.Screen
          name="ServicesList"
          component={ChatScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
                <View
                style={{
                    position: 'absolute',
                    bottom: -8, // space from bottombar
                    height: 60,
                    width: 60,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:'#88026E'
                }}
                >
                <AntDesign name="search1" color={color} size={35} />
                </View>
            )

          }}
        />
        <Tab.Screen
          name="AddNewTask"
          component={SearchScreen}
          options={{
            tabBarLabel: '',

            tabBarIcon: ({ color }) => (
                <View
                style={{
                    position: 'absolute',
                    bottom: -8, // space from bottombar
                    height: 60,
                    width: 60,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:'#88026E'
                }}
                >
                <MaterialCommunityIcons name="plus" color={color} size={35} />
                
                </View>
            )
           
            }}
        />
        <Tab.Screen
          name="Messages"
          component={GlobalCartScreen}
          options={{
            tabBarLabel: '',

            tabBarIcon: ({ color }) => (
                <View
                style={{
                    position: 'absolute',
                    bottom: -8, // space from bottombar
                    height: 60,
                    width: 60,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:'#88026E'
                }}
                >
              
                <MaterialCommunityIcons
                  name="android-messages"
                  color={color}
                  size={35}
                />
                
                </View>
            )
            
            }}
        />
       
      </Tab.Navigator>
    </NavigationContainer>
  );
}


