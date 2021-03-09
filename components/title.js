import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Title= props => {
    return <View style={styles.titleContainer}>
    <Text style={{...styles.title, ...props.style}}>
        {props.children}
    </Text>
    </View>

}
 
const styles = StyleSheet.create({
    title:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#444'
    },
    titleContainer:{
        paddingHorizontal: 15,
        paddingVertical: 20,
    }
});

export default Title;