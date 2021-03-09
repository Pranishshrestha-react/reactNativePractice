import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import Categories from '../components/categories.js';
import FoodHeader from '../components/FoodHeader.js';
import Populars from '../components/Populars.js';
import Title from '../components/title.js';

const HomeScreen= props =>{
    React.useLayoutEffect(()=>{
        props.navigation.setOptions({headerShown:false})
    })
    return <View style={styles.screen}>
        <FoodHeader/>
        <Title>Select a Category</Title>
        <Categories/>
        <Title>Popular</Title>
        <Populars/>
    </View>

}
 
const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
});

export default HomeScreen;