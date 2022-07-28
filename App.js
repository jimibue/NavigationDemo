import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TestStackNav from './screens/BrowseStackNavigator';
import HomeScreen from './screens/Home';



const SettingsScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings Screen</Text>
    </View>
  );
};
const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen}/>
        <Tab.Screen name="Browse" component={TestStackNav}/>
      </Tab.Navigator>

    </NavigationContainer>
  );
};

export default App;
