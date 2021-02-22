import React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const Header = () => {
    return <View style={styles.main}>
        <View style={styles.logopart}>
            <Image style={styles.logo} source={{uri:"http://assets.stickpng.com/thumbs/5a39338fc488ac6062ac2b13.png"}}/>
        </View>
        <View style={styles.filter}>
            <Ionicons name='filter' size={22} color='#047C18' onPress={null} />
        </View>

    </View>
}

const styles = StyleSheet.create({
    main:{
        width: '100%',
        height: 60,
        backgroundColor:'#DF86A5',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    logopart:{
        height: 50,
        width: 150,
    },
    logo: {
        height: 45,
        width: 90,
        paddingLeft : 15,
    },
    filter:{
        height: 35,
        width: 35,
        padding: 5,
    },

});

export default Header;