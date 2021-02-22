import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const Imgblock= ({imgblock}) => {
    return(
        <View style={styles.bigbox}>
            <Image style={styles.images} source={{uri:imgblock.purl}}/>
            <View style={styles.textonly}>
                <View style={styles.upperbox}>
                    <Text style={styles.imgprice}>{imgblock.category}</Text>
                    <Text style={styles.imgprice}>{imgblock.pprice}</Text>
                </View>
                <View style={styles.lowerbox}>
                    <Text style={styles.imgtitle}>{imgblock.pname}</Text>
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
export default Imgblock;