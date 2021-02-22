import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Title =(props) => {
    return <Text style={styles.head}> {props.children}</Text>
}
const SubTitle =(props) => {
    return <Text style={styles.subhead}> {props.children}</Text>
}

const AllText =(props) => {
    return <Text style={styles.alltext}> {props.children} </Text>
}

const styles= StyleSheet.create({
    head:{
        fontSize: 18,
        fontWeight: "bold",
        color:'#eee',

    },
    subhead:{
        fontSize: 15,
        fontWeight: "bold",
    },  
    alltext:{
        fontSize: 10,
        color: '#B6BEB7',
    }
});

export {Title , AllText, SubTitle};