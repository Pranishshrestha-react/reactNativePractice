import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import SpecialFoodItem from './SpecialFoodItem';
import {FOODS} from '../constants/data.js';

const Populars= props =>{
    return <View>
        <FlatList
        style={styles.populars}
        data={FOODS}
        renderItem={({item})=> <SpecialFoodItem food={item}/>}
        keyExtractor={(item, index)=> item.id+index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false} 
        />

    </View>

}
 
const styles = StyleSheet.create({
    populars:{
        paddingLeft: 20
    }
});

export default Populars;