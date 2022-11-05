import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


import MainStack from './src/stacks/MainStack';
import UserContextProvider from './src/contexts/UserContext';

export default function App() {
  return (
    <UserContextProvider> 
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    </UserContextProvider>
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
