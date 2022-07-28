import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const BrowseScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Activity')} style={styles.link}>
            <Text>Go to Activies</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=> navigation.navigate('Hearing')} style={styles.link} style={styles.link}>
            <Text>Go to Hearing</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=> navigation.navigate('Heart')} style={styles.link} style={styles.link}>
            <Text>Go to Heart</Text>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
    link:{
       padding:10,
       borderWidth:1,
       borderColor:'grey',
       margin:2
    }
})


  export default BrowseScreen