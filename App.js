import React from 'react';
import {StatusBar} from 'expo-status-bar';
import { View, StyleSheet, Text, ScrollView,Modal} from 'react-native';
import Header from './components/header';
import Itemproducts from './components/itemproducts';
import {Ionicons} from '@expo/vector-icons';
import Additem from './components/additems';
import Filter from './components/filter';

 
export default function App() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isFilter, setIsFilter] = React.useState(false)
  const [imgblocks, addImgblock] = React.useState([])
  
  const handleSubmit=(pdata)=>{
    addImgblock([{...pdata, id: Math.random().toString()}, ...imgblocks ])  
    setIsOpen(false)
  }
  return(
   
  <View style={styles.home}>
    <StatusBar hidden/>
    <Header filterpage={()=> setIsFilter(true)}/>
    <ScrollView>
    <Itemproducts imgblocks={imgblocks} />
    </ScrollView>
    <View style={styles.add}>
      <Ionicons name='add-outline' size={50} color='#047C18' onPress={() => setIsOpen(true)}/>
    </View>
    <Modal visible ={isOpen}>
      <Additem cancel={() => setIsOpen(false)} submit={handleSubmit} />

    </Modal>
    <Modal visible ={isFilter}>
      <Filter cancel={() => setIsFilter(false)}/>
    </Modal>
  </View>
 
)

};

const styles=StyleSheet.create({
  home:{
    flex: 1,
    backgroundColor:'#F9DCE6',
    position:'relative',
  },
  add:{
    height: 50,
    width: 50,
    borderRadius: 25 ,
    backgroundColor: '#DF86A5',
    position:'absolute',
    bottom: 30,
    right: 10,
    justifyContent:'center',
    alignItems:'center',
  },
  
})