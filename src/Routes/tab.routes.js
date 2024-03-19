import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../pages/Home';
import Details from '../pages/Details';
import Login from '../pages/Login';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (

    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'green',
          borderTopColor: 'transparent'
        },

        tabBarActiveTintColor: 'green',
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5

        }
      }}
    >

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="poll" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="login" color={color} size={size} />
          ),
        }}
      />



    </Tab.Navigator>
  )

}


