import 'react-native-gesture-handler'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import Home from './src/views/Home'
import Layout from './src/hocs/Layout';
import { Text } from 'react-native';


const Stack = createStackNavigator();

const Details = ({ route, navigation }) => {

  console.log({route, navigation})

  return (
    <Layout>
      <Text style={{color: '#fffff', fontSize:20, marginTop: 50}} >Details page</Text>
    </Layout>
  )
}

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
