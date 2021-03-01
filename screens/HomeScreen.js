import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import FoodHeader from '../components/FoodHeader.js';

const HomeScreen= props =>{
    React.useLayoutEffect(()=>{
        props.navigation.setOptions({headerShown:false})
    })
    return <View style={styles.screen}>
        <FoodHeader/>
       {/*}
        <Button title="GO TO DETAIL" onPress={()=> props.navigation.navigate('Detail')}/>
*/}
    </View>

}
 
const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
});

export default HomeScreen;