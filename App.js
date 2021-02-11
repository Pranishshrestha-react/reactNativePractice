
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.first}>
        <Text style={styles.text}>Conversation</Text>
        
      </View>
      <View style={styles.second}>
          <Text style={styles.text}>Conversation 1</Text>
          <Text style={styles.text}>Conversation 2</Text>
          <Text style={styles.text}>Conversation 3</Text>
          <Text style={styles.text}>Conversation 4</Text>
        
      </View>
      <View style={styles.third}>
        <View style={styles.thirdfirst}>
          <Text style={styles.text}>A</Text>
          <Text style={styles.text}>B</Text>
        </View>
        <View style={styles.thirdsecond}>
          <Text style={styles.text}>C</Text>
          <Text style={styles.text}>D</Text>
        </View>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    marginTop: 20
  },
  first:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
    backgroundColor: '#f00',
  },
  text:{
    fontSize: 20,
    color: 'white',
    
  },
  second:{
    flex: 8,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    backgroundColor: '#0f0',
  },
  third:{
    flex: 4,
    justifyContent:'space-between',
    backgroundColor: '#00f',
  },
  thirdfirst:{
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  thirdsecond:{
    flexDirection:'row',
    justifyContent:'space-between'

  }
});
