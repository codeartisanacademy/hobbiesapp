import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Tools from '../screens/Tools';
import ToolDetail from '../screens/ToolDetail';

const HomeStacks = () => {
    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
        <Stack.Screen component={Home} name="HomeStack" options={
            {
                title:"My Hobbies",
            }
        } />
        <Stack.Screen component={Tools} name="ToolsStack" options={
            {
                title:"My Tools",
            }
        } />
        <Stack.Screen component={ToolDetail} name="ToolDetailStack" options={
            {
                title:"Detail",
            }
        } />
    </Stack.Navigator>
  )
}

export default HomeStacks