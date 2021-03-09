import React from 'react';
import {View, StyleSheet, Text, TextBase} from 'react-native';
import { Appbar } from 'react-native-paper';
import {useTheme} from '@react-navigation/native'

const PriorityTodos= props =>{
    const {colors} = useTheme()
    return <View style={{flex:1}}>
       <Appbar.Header style={{backgroundColor: colors.primary}}>
       <Appbar.Content title="Priority" titleStyle={{color:'#fff', textAlign:'center'}}/>
    </Appbar.Header>
    </View>

}
 
const styles = StyleSheet.create({

});

export default PriorityTodos;