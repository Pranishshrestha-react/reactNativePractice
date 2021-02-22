import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Product from '../product';

const ItemProducts=props =>{
    return(
        <View style={styles.box}>
          {
              props.imgblocks.map(imgblock => <Product key={imgblock.id} imgblock={imgblock}/>)
          }

           
        </View>
    );
}

const styles=StyleSheet.create({
    box:{
        flex: 1,
    }
});

export default ItemProducts;