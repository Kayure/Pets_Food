import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import Animated from 'react-native-reanimated';


import MainStack from './src/stacks/MainStack';
import UserContextProvider from './src/contexts/UserContext';
import Home from './src/screens/Home';
import Appointments from './src/screens/Appointments';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Appointments')}
        title="Alimentar"
      />
    </View>
  );
}



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
