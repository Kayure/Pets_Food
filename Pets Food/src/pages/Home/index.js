import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Platform,TouchableOpacity} from 'react-native';
import Routes from '../../routes/routes';

import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'

const statusBarHeight = StatusBar.currentHeight;
const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <TouchableOpacity 
                    style={styles.buttonLogin}
                    
                >
                   <Text style={styles.buttonText}>Te Amo Hayra Saplak</Text>   
                </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040316',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 25,
  },
  buttonLogin:{
    position: 'absolute',
    backgroundColor: '#8B008B',
    borderRadius: 50,
    paddingVertical: 8,
    alignSelf:'center',
    width:'50%',
    bottom: '30%',        
    alignItems: 'center',
    justifyContent:'center',


},
buttonText:{
  fontSize: 18,
  fontWeight: 'bold'

},
});
