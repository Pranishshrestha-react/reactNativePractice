import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Picker} from '@react-native-community/picker';
import { Entypo } from '@expo/vector-icons';

const Filter= props =>{
    return(
        <View style={styles.filtermain}>
            <View style={styles.cross}>
                <Entypo onPress={props.cancel} name="cross" size={32} color="#047C18" />
            </View>
            <Text style={styles.headtext}>CHOOSE YOUR CATEGORY</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    filtermain:{
        flex: 1,
        backgroundColor:'#F9DCE6',
    },
    cross: {
        alignItems: 'flex-end',
        marginTop: 10,
        paddingRight: 10,
    },
    headtext: {
        color: '#047C18',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold',
        marginBottom: 50,
    },
})

export default Filter;