import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Appbar,Modal, TextInput, Checkbox, Button } from 'react-native-paper';
import {useTheme} from '@react-navigation/native'
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

const AllTodosScreen= props =>{
    const [visible, setVisible] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [priority, setPriority] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => {
        setDescription('')
        setPriority(false)
        setTitle('')
        setVisible(false)
    }

    const {colors} = useTheme()
    return <View style={{flex:1}}>
       <Appbar.Header style={{backgroundColor: colors.primary}}>
       <Appbar.Content title="All Todos" titleStyle={{color:'#fff'}}/>
        <Appbar.Action icon="magnify" onPress={() => {}} color='#fff' />
        <Appbar.Action icon="plus" onPress={() => {}} color='#fff' onPress={showModal}/>
    </Appbar.Header>

    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{padding:20, margin:20, backgroundColor:'#fff'}}>
        <TextInput 
        mode="outlined"
        label= "Title"
        value={title}
        onChangeText={text => setTitle(text)}       
        />
        <TextInput 
        mode="outlined"
        label= "Description"
        value={description}
        onChangeText={text => setDescription(text)}
        multiline
        numberOfLines={3}       
        />
        <Checkbox.Item labelStyle={{color:'#444'}} label="High Priority" status={priority? 'checked' : 'unchecked'} onPress={()=> {setPriority(!priority)}}/>
        <View style={{flexDirection:'row', justifyContent:'space-around',marginTop: 30}}>
            <Button icon="cancel" color="#aa0000" mode="contained" onPress={hideModal}>
                Cancel
            </Button>
            <Button icon="floppy" color={colors.primary} mode="contained" onPress={() => console.log('Pressed')}>
                Save
            </Button>
        </View>
    </Modal>
    </View>

}
 
const styles = StyleSheet.create({

});

export default AllTodosScreen;