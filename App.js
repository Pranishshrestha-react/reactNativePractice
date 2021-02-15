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
            <Card price="$ 22.00" name ={{uri:"https://cdn.vox-cdn.com/thumbor/73nhsZwI55BVgH8-rapmIhkvbUk=/0x0:4047x3035/1200x675/filters:focal(1700x1194:2346x1840)/cdn.vox-cdn.com/uploads/chorus_image/image/64046617/20150915-_Upland_Burger_3.0.0.1489236245.0.jpg"}} itemname="Chicken Burger" itemdes="simply dummy text of the printing and typesetting industry. Lorem" time="20 min" rating="3"/>
            <Card price="$ 21.50" name ={{uri:"https://twisper.com/wp-content/uploads/2020/03/close-up-photo-of-burger-3915906-scaled.jpg"}} itemname="Ham Burger" itemdes="simply dummy text of the printing and typesetting industry. Lorem" time="50 min" rating="3.5"/>
            <Card price="$ 25.00" name ={{uri:"https://happilyunprocessed.com/wp-content/uploads/2018/03/Juicest-Burger-Everfeature.jpg.jpg"}} itemname="Pork Burger" itemdes="simply dummy text of the printing and typesetting industry. Lorem" time="52 min" rating="5"/>
                     
            
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