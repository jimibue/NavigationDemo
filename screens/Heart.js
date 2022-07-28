import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, TouchableOpacity, View,Text} from 'react-native';
import HearingScreen from './Hearing';

const BloodScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Blood Screen</Text>
    </View>
  );
};

const CardioScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>cardio stuff here Screen</Text>
    </View>
  );
};

const HeartIndex = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Blood')}
        style={styles.link}>
        <Text>Blood Pressure</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Cardio')}
        style={styles.link}
        style={styles.link}>
        <Text>Cardio</Text>
      </TouchableOpacity>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const HeartStackNavigtor = () => {
return(
  <Stack.Navigator initialRouteName="HeartIndex">
    <Stack.Screen name="HeartIndex" component={HeartIndex} />
    <Stack.Screen name="Blood" component={BloodScreen} />
    <Stack.Screen name="Cardio" component={CardioScreen} />
  </Stack.Navigator>
    )
};

const styles = StyleSheet.create({
    link:{
       padding:10,
       borderWidth:1,
       borderColor:'grey',
       margin:2
    }
})
export default HeartStackNavigtor;
