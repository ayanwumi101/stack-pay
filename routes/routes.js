import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Signup from '../screens/Signup';

const routes = () => {
    const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Signup' component={<Signup />} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default routes