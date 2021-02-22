import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Picker } from '@react-native-community/picker';
import CATEGORIES from '../../constant/categories';

const Additem = props => {
    const [pname, setPname] = React.useState('');
    const [pprice, setPprice] = React.useState('');
    const [purl, setPurl] = React.useState('');
    const [pdescription, setPdescription] = React.useState('');
    const [category, setCategory] = React.useState(null);
    return (
        
            <View style={styles.formhome}>
                <View style={styles.cross}>
                    <Entypo onPress={props.cancel} name="cross" size={32} color="#047C18" />
                </View>
                <Text style={styles.headtext}>ADD YOUR ITEM</Text>
                <View style={styles.formbox}>
                    <View style={styles.forminner}>
                        <Text style={styles.formtext}>Name of Product</Text>
                        <TextInput maxLength={30} style={styles.input} placeholder="Name of Product" value={pname} onChangeText={(text) => setPname(text)} />
                    </View>
                    <View style={styles.forminner}>
                        <Text style={styles.formtext}>Price of Product</Text>
                        <TextInput keyboardType="numeric" maxLength={8} style={styles.input} value={pprice} placeholder="Price of Product" onChangeText={(text) => setPprice(text)} />
                    </View>
                    <View style={styles.forminner}>
                        <Text style={styles.formtext}>Image of Product</Text>
                        <TextInput keyboardType="url" style={styles.input} value={purl} placeholder="Paste URL of Product" onChangeText={(text) => setPurl(text)} />
                    </View>
                    <View style={styles.forminner}>
                        <Text style={styles.formtext}>Detail of Product</Text>
                        <TextInput multiline numberOfLine={5} maxLength={180} style={styles.inputmultiple} value={pdescription} placeholder="Details of Product" onChangeText={(text) => setPdescription(text)} />
                    </View>
                    <View>
                        <Picker onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
                            selectedValue={category} >
                            <Picker.Item label="Select Category" value={null} color="#878787" />
                            {
                                CATEGORIES.map(category => {
                                    return <Picker.Item key={category.id} label={category.title} value={category.title} />

                                })
                            }
                        </Picker>
                    </View>
                </View>
                <View style={styles.button}>
                    <Button title="Submit" onPress={() => props.submit({ pname, pprice, purl, pdescription, category })} />
                </View>
            </View>
        
    );
}

const styles = StyleSheet.create({
    formhome: {
        flex: 1,
        backgroundColor: '#F9DCE6',

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
    formbox: {
        borderWidth: 4,
        height: '63%',
        marginHorizontal: 10,
        borderRadius: 10,
        borderColor: '#047C18'
    },
    forminner: {
        padding: 15,
    },
    formtext: {
        fontSize: 18,
        color: '#047C18',
        textAlign: 'center',
    },
    input: {
        borderBottomWidth: 1,
        borderRightWidth: 1,
    },
    inputmultiple: {
        borderBottomWidth: 1,
        borderRightWidth: 1,
        height: 80,
    },
    button: {
        marginTop: 20,
    }

});

export default Additem;