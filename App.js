import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabRoutes from './src/Routes/tab.routes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <TabRoutes></TabRoutes>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});






