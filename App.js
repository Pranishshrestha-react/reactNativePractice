import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

export default function App() {
  return(
    <View style={styles.home}>
      <View style={styles.blank} >

      </View>

      <View style={styles.numbers}>
        <View style={styles.partone}>
          <View style={styles.oneone}>
            <Text style={styles.smalltext}>1</Text>
            <Text style={styles.smalltext}>4</Text>
          </View>
          <View style={styles.oneone}>
            <Text style={styles.smalltext}>2</Text>
            <Text style={styles.smalltext}>5</Text>
          </View>
          <View style={styles.oneone}>
            <Text style={styles.smalltext}>3</Text>
            <Text style={styles.smalltext}>6</Text>
          </View>
          <View style={styles.oneone}>
            <Text style={styles.bighorztext}>*</Text>
            
          </View>
          
        </View>
        <View style={styles.partone}>
          <View style={styles.parttwo}>
            <View style={styles.parttwosub}>
              <Text style={styles.smalltextdown}>7</Text>
              <Text style={styles.smalltextdown}>8</Text>

            </View>
              <Text style={styles.bigverttext}>0</Text>
            

          </View>
        {/*<View style={styles.oneone}>
            <Text style={styles.smalltext}>7</Text>
            <Text style={styles.bigverttext}>4</Text>
          </View>
          <View style={styles.oneone}>
            <Text style={styles.smalltext}>8</Text>
            
          </View>*/}
          <View style={styles.oneone}>
            <Text style={styles.smalltext}>9</Text>
            <Text style={styles.smalltext}>6</Text>
          </View>
          <View style={styles.oneone}>
            <Text style={styles.bighorztext}>OK</Text>
            
          </View>
        
        </View>
      </View>
    
    </View>

  );

}

const styles= StyleSheet.create({
  home:{
    flex: 1,
    
  },
  blank:{
    flex:1,
    backgroundColor:'#fff',
  },
  partone:{
    flex: 1,
    
    flexDirection:'row',
       
  },
  parttwo:{
    flex: 2.1,
   
    
    
  },
  parttwosub:{
    flexDirection: 'row',
    
  },
  oneone:{
    flex:1,
    
    marginHorizontal:3,
    marginVertical: 3,
    
  },
  bighorz:{
    alignItems:'flex-end',
    //justifyContent:'space-between',  
  },
  bigvert:{
    flexDirection:'row',
  },

  bighorztext:{
    fontSize: 30,
    width: 85,
    height: 170,
    backgroundColor: '#E0E0E0',
    margin: 2,
    borderRadius:20,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  bigverttext:{
    
    fontSize: 50,
    position: 'relative',
    height: 79,
    width: 185,
    backgroundColor: '#E0E0E0',
    margin: 2,
    borderRadius:20,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  smalltext:{
    height: 85,
    width: 85,
    backgroundColor: '#E0E0E0',
    marginHorizontal:3,
    marginVertical: 3,
    borderRadius: 20,
    textAlign:'center',
    fontSize: 50,
  },
  smalltextdown:{
    height: 85,
    width: 85,
    backgroundColor: '#E0E0E0',
    marginHorizontal:5.5,
    marginVertical: 7,
    borderRadius: 20,
    textAlign:'center',
    fontSize: 50,
  },
  numbers:{
    flex:1,
    backgroundColor:'#918A9E',
  },
  text:{
    fontSize: 30,
    color: '#fff',
  }

});