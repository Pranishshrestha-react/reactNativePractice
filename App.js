import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

export default function App() {
  <View style={styles.home}>
    <View style={styles.first}></View>
    <View style={styles.second}></View>
  </View>
};

const styles= StyleSheet.create({
  home:{
    flex: 1,
    backgroundColor: '#1D2CFC',
  },
  first:{
    flex:1,

  },
  second:{
    flex:1,
    backgroundColor:'#fff',
  },
});