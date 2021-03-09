import React from 'react';
import {View, StyleSheet, Text, Dimensions, ImageBackground} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Title from './title';

const SpecialFoodItem= ({food}) => {
    return <View style={styles.item}>
        <ImageBackground source={{uri:food.image}} style={styles.imageContainer}>
        <View style={styles.imageContainer, styles.image}>
            <Ionicons name="heart" size={24} color="#fff"/>
        </View>
        </ImageBackground>
    </View>
    
}
 
const styles = StyleSheet.create({
    imageContainer:{
        height: 180,
        width: Dimensions.get('window').width * 0.7,
        borderRadius: 8,
        overflow:'hidden',
    },
    item:{
        marginRight: 20,
    },
    image:{
        padding: 10,
        alignItems:'flex-end',
        backgroundColor: rgba(0,0,0,0.4),
    }

});

export default SpecialFoodItem;