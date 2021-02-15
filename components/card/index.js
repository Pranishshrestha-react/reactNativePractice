import React from 'react';
import {StyleSheet , Text , View, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Title , AllText, SubTitle } from '../typography';

const Card =(props) =>{
    return(
        <View style={styles.home}>
            <View style={styles.firstimage}>
                <Image style={styles.foodimg} source={props.name} />
            </View>
            <View style={styles.contentfood}>
                <SubTitle>{props.itemname}</SubTitle>
                <AllText>{props.itemdes}</AllText>
                <View style={styles.rate}>
                    <AllText>{props.time}</AllText>
                    <AntDesign name="star" size={14} color='#B6BEB7' />
                    <AllText>{props.rating}</AllText>
                </View>
            </View>
            <View style={styles.priceadd}>
                <View style={styles.pricealign}>
                    <AntDesign name="pluscircle" size={32} color="#F74080" />
                </View>
                <View>
                    <SubTitle>{props.price}</SubTitle>
                </View>
            </View>

        </View>
    );
}

const styles=StyleSheet.create({
    home:{
        width:352,
        height: 90,
        marginTop: 10,
        flexDirection:'row',
    },
    firstimage:{
        width: 90,
        justifyContent:'center',
    },
    foodimg:{
        height: 80,
        width: 80,
        borderRadius: 20,
        justifyContent:'center',
        alignItems:'center',
    },
    contentfood:{
        width: 180,
    },
    priceadd:{
        flex: 2,
        alignItems:'flex-end',
        justifyContent: 'space-between',
    },
    rate:{
      flexDirection: 'row',
      paddingTop:5,  
    }
});

export {Card};