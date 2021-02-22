import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const Product= props => {
    return(
        <View style={styles.bigbox}>
            <Image style={styles.images} source={{uri:"https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/0992a8537ac540dd9a4aab2c010ae053_9366/Club_C_85_Shoes_White_BS7685_01_standard.jpg"}}/>
            <View style={styles.textonly}>
                <View style={styles.upperbox}>
                    <Text style={styles.imgprice}>Category</Text>
                    <Text style={styles.imgprice}>Price</Text>
                </View>
                <View style={styles.lowerbox}>
                    <Text style={styles.imgtitle}>TITLE</Text>
                    <Text style={styles.outline}></Text>
                </View>
                
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    bigbox:{
        height: 200,
        width: '100%',
        marginBottom: 10,
    },
    images:{
        height:200,
        width: '100%',
        position: 'relative',
    },
    textonly:{
        width: '100%',
        height: '100%',
        position:'absolute',
        justifyContent:'space-between',
    },
    upperbox:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    
    lowerbox:{
        width:'100%',
        alignItems:'center',
        position:'relative',
    },
    outline:{
        width:'100%',
        height: 45,
        backgroundColor:'#D5FBDC',
        position:'absolute',
        opacity: 0.3,
    },
    imgtitle:{
        fontSize:30,
        fontWeight:'bold',
    },
    imgprice:{
        fontSize:25,
        paddingHorizontal: 5,
       
    }

});
export default Product;