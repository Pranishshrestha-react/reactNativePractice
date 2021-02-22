import React from 'react';
import { View, StyleSheet, Text, ScrollView,StatusBar,Modal} from 'react-native';
import Header from './components/header';
import Itemproducts from './components/itemproducts';
import {Ionicons} from '@expo/vector-icons';
import Additem from './components/additems';

 
export default function App() {
  const [isOpen, setIsOpen] = React.useState(false)

  
  const handleSubmit=(pdata)=>{
    setIsOpen(false)
  }
  return(
   
  <View style={styles.home}>
    <StatusBar hidden />
    <Header />
    <ScrollView>
    <Itemproducts />
    </ScrollView>
    <View style={styles.add}>
      <Ionicons name='add-outline' size={50} color='#047C18' onPress={() => setIsOpen(true)}/>
    </View>
    <Modal visible ={isOpen}>
      <Additem cancel={() => setIsOpen(false)} submit={handleSubmit} />

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