 import React from 'react';
import {
  SafeAreaView,
  StyleSheet,

  View,
  Text,
  StatusBar,
  ImageBackground,
  Image
} from 'react-native';
import AuthNavigator from './src/Navigation/AuthNavigator'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#8B0161" barStyle="dark-content" />
      
      
     
       <AuthNavigator />

   
    </>
  );
};



export default App;
