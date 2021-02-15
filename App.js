import React from 'react';
import {StyleSheet, View, Text, Image } from 'react-native';
import { Ionicons , AntDesign  } from '@expo/vector-icons';
import { Title , AllText } from './components/typography';
import { Card } from './components/card';

export default function App() {
  return(
    <View style={styles.home}>
      <View style={styles.banner}>
        <Image style={styles.bannerimage} source={{uri:"https://cdn.xl.thumbs.canstockphoto.com/most-popular-fast-food-meal-chicken-nuggets-burgers-and-french-fries-on-black-and-yellow-picture_csp80354719.jpg"}} />
        
        <View style={styles.bannerleft}>
          <Ionicons name="arrow-back-outline" size={32} color="black" />
          <Text style={styles.bannerText}>American</Text>
          <Text style={styles.bannersubText}>Food</Text>

        </View>

      </View>



      <View style={styles.body}>
        <View style={styles.bodystart}>
          <View style={styles.filter}>
            <Ionicons style={styles.images} name="options-outline" size={32} color="#F74080" />
          </View>
          <View style={styles.menu}>
            <Card price="$ 23.00" name ={{uri:"https://i2.wp.com/www.foodrepublic.com/wp-content/uploads/2012/03/033_FR11785.jpg?fit=978%2C650&ssl=1"}} itemname="American Burger" itemdes="simply dummy text of the printing and typesetting industry. Lorem" time="45 min" rating="4.5"/>
            <Card price="$ 20.00" name ={{uri:"https://www.skinnytaste.com/wp-content/uploads/2015/05/grilled-teriyaki-burger-550x825.jpg"}} itemname="Cheese Hot Dog" itemdes="simply dummy text of the printing and typesetting industry. Lorem" time="60 min" rating="4"/>
               
            
          </View>

        </View>

      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  home:{
    flex: 1,
    
  },
  banner:{
    flex:2,
    
  },
  bannerimage:{
    width: '100%',
    height: 205,
    position:'absolute',
  },
  bannerleft:{
    width: 200,
    height: 150,
    justifyContent:'center',
    marginHorizontal: 20,
    
  },
  bannerText:{
    fontSize:23,
    marginTop: 40,
    fontWeight:'bold',
  },
  bannersubText:{
    fontSize:20,
    fontStyle:'italic',
  },
  body:{
    flex: 6,
    backgroundColor:'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  bodystart:{
    marginHorizontal: 20,
    marginTop: 5,
  },
  filter:{
    
    alignItems:'flex-end',
    
  },
  images:{
    padding: 5,
    marginBottom: 5,
    
    elevation: 10,
    borderRadius: 50,
    shadowColor:'green',
    shadowOpacity: 0.2,
  },
  
});