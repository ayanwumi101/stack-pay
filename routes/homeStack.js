import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/onboarding'
import Login from '../screens/login'


const Stack = createStackNavigator()
const HomeStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

export default HomeStack