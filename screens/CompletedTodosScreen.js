import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Appbar } from 'react-native-paper';
import {useTheme} from '@react-navigation/native'

const CompletedTodosScreen= props =>{
    const {colors} = useTheme()
    return <View style={{flex:1}}>
       <Appbar.Header style={{backgroundColor: colors.primary}}>
       <Appbar.Content title="Completed" titleStyle={{color:'#fff', textAlign:'center'}}/>        
    </Appbar.Header>
    </View>

}
 
const styles = StyleSheet.create({

});

export default CompletedTodosScreen;