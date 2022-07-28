import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import ActiviesScreen from './Activites';
import BrowseScreen from './Browse';
import HearingScreen from './Hearing';
import HeartStackNavigtor from './Heart';


const Stack = createNativeStackNavigator();
const TestStackNav = () => {
  return (
    <Stack.Navigator initialRouteName="BrowseIndex">
      <Stack.Screen name="BrowseIndex" component={BrowseScreen} />
      <Stack.Screen name="Activity" component={ActiviesScreen} />
      <Stack.Screen name="Hearing" component={HearingScreen} />
      <Stack.Screen name='Heart' component={HeartStackNavigtor} />
    </Stack.Navigator>
  );
};

export default TestStackNav;
