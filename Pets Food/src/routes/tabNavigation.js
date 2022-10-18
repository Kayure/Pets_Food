import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import Home from './src/pages/Home';
import Food from './src/pages/Food';
import Help from './src/pages/Help';
import Profile from './src/pages/Profile';
import Welcome from './src/pages/Welcome';

import { Entypo, Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


export default function TabNavigation(){
    return(

        <Tab.Navigator>
            
            <Tab.Screen name="Home" component={Home}  />
            <Tab.Screen name="Food" component={Food}  />
            <Tab.Screen name="Help" component={Help}  />
            <Tab.Screen name="Profile" component={Profile}  />
            <Tab.Screen name="Welcome" component={Welcome}  />

        </Tab.Navigator>


    )
}
