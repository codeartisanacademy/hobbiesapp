import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Profile';

const ProfileStacks = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen component={Profile} name="ProfileStack" options={
            {
                title: "Profile"
            }
        } />
    </Stack.Navigator>
  )
}

export default ProfileStacks