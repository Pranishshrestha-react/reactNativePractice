import React from 'react';
import {View, StyleSheet, Text, FlatList, Image} from 'react-native';
import {CATEGORIES} from '../constants/data';

const Categories= props =>{
    const buildCategoriesItem = (item) => {
        return<View style={styles.category}>
            <Image source={{uri:item.image}} style={styles.image}/>
            <Text>{item.title}</Text>
        </View>
    }

    return <View style={styles.categories}>
        <FlatList
        horizontal
        data={CATEGORIES}
        renderItem={({item}) => buildCategoriesItem(item)}
        keyExtractor={(item)=>item.id}
        showsHorizontalScrollIndicator={false} 
        />

    </View>

}
 
const styles = StyleSheet.create({
    categories:{
        paddingLeft: 15,
    },
    category:{
        paddingLeft:20 ,
    },
    image:{
        width: 50,
        height: 50,
    }
});

export default Categories;