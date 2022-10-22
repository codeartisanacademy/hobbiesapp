import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeStacks from './src/navigations/HomeStacks';
import ProfileStacks from './src/navigations/ProfileStacks';
import { Feather } from '@expo/vector-icons'; 

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeStacks} options={{headerShown:false, 
        tabBarIcon: ()=>{
              return (
                <Feather name="home" size={24} color="black" />
              )
            }
            }} />
        <Tab.Screen name='Profile' component={ProfileStacks} options={{headerShown:false,
          tabBarIcon: ()=>{
              return (
                <Feather name="user" size={24} color="black" />
              )
            }
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
