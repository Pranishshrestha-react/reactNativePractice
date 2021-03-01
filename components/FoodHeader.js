import React from 'react';
import {View, StyleSheet, Text, Image, TextInput} from 'react-native';
import {COLORS} from '../constants/colors.js';
import {MaterialIcons} from '@expo/vector-icons';

const FoodHeader= props =>{
    return <View style={styles.header}>
        <View style={styles.profile}>
            <Text style={styles.title}>Hello There, <Text style={{color:COLORS.primary}}>Ann!</Text></Text>
            <Image source={{uri:'https://library.kissclipart.com/20181216/gzw/kissclipart-cartoon-clipart-beautycon-moj-mahdara-a06b10b1fb42dfa2.png'}} style={styles.image} />
        </View>
        <View style={styles.searchBar}>
            <TextInput placeholder="Search Products..." style={{flex:1}}/>
            <MaterialIcons name="search" size={20} />
        </View>

    </View>

}
 
const styles = StyleSheet.create({
    header:{
        paddingHorizontal: 15,
        paddingTop: 40,
    },
    profile:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    image:{
        width:40,
        height: 40,
        borderRadius: 8,
    },
    searchBar:{
        width:'100%',
        height: 40,
        backgroundColor: '#ddd',
        marginTop: 25,
        justifyContent: 'center',
        paddingHorizontal: 15,
        flexDirection:'row',
        alignItems:'center',
    }
});

export default FoodHeader; 