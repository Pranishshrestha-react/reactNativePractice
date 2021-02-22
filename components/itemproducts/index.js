import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Product from '../product';

const ItemProducts=() =>{
    return(
        <View style={styles.box}>
           <Product/>
           <Product/>
           <Product/>
           <Product/>
           <Product/> 

           
        </View>
    );
}

const styles=StyleSheet.create({
    box:{
        flex: 1,
    }
});

export default ItemProducts;