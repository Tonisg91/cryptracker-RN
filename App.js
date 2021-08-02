import 'react-native-gesture-handler'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import Home from './src/views/Home'
import Details from './src/views/Details';


const Stack = createStackNavigator();

export default function App() {

  const navigatorOptions = {
    gestureDirection: 'horizontal',
    gestureEnabled: true
  }
  
  return (
    <NavigationContainer  >
      <Stack.Navigator headerMode="none" initialRouteName="Home" screenOptions={navigatorOptions} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
