import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/routes';
import { StatusBar } from 'expo-status-bar';
import TabNavigation from './src/routes/tabNavigation';

export default function App() {
  return (
    <NavigationContainer>
      
      <TabNavigation/>
    </NavigationContainer>
  );
}