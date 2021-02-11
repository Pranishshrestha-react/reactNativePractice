import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

export default App() {
  return(
    <View style={styles.home}>
    <Text style={styles.text}>
    Hello nepal</Text>
    
    
    </View>

  );

}

const styles= StyleSheet.create({
  home:{
    flex: 1,
    backgroundColor: '#f11',
  },
  text:{
    fontSize: 30,
    color: '#fff',
  }

})