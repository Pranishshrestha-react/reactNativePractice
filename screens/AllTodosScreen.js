import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Appbar } from 'react-native-paper';
import {useTheme} from '@react-navigation/native'

const AllTodosScreen= props =>{
    const {colors} = useTheme()
    return <View style={{flex:1}}>
       <Appbar.Header style={{backgroundColor: colors.primary}}>
       <Appbar.Content title="All Todos" titleStyle={{color:'#fff'}}/>
        <Appbar.Action icon="magnify" onPress={() => {}} color='#fff' />
        <Appbar.Action icon="plus" onPress={() => {}} color='#fff'/>
    </Appbar.Header>
    </View>

}
 
const styles = StyleSheet.create({

});

export default AllTodosScreen;