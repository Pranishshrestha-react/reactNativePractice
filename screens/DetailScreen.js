import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FoodHeader from '../components/FoodHeader.js';

const DetailScreen= props =>{
    return <View style={styles.screen}>
        <FoodHeader/>
        <Text>Detail Page</Text>
    </View>

}
 
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    }
});

export default DetailScreen;