import React from 'react';


import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import Home from './src/pages/Home';
import Food from './src/pages/Food';
import Help from './src/pages/Help';
import Profile from './src/pages/Profile';
import Welcome from './src/pages/Welcome';

import { Entypo, Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


export default function Routes(){
    return(

        <Tab.Navigator>
            
            <Tab.Screen 
                name = "Home" 
                component={Home} 
                options={{
                 tabBarIcon: ({size, color}) => (
                     <Entypo name="home" size={size} color={color} />

                 )
             }}
             />

            <Tab.Screen 
                name = "Food" 
                component={Food} 
                options={{
                 tabBarIcon: ({size, color}) => (
                     <Entypo name="home" size={size} color={color} />

                 )
             }}
             />

            <Tab.Screen 
                name = "Help" 
                component={Help} 
                options={{
                 tabBarIcon: ({size, color}) => (
                     <Entypo name="home" size={size} color={color} />

                 )
             }}
             />

            <Tab.Screen 
                name = "Notification" 
                component={Notification} 
                options={{
                 tabBarIcon: ({size, color}) => (
                     <Entypo name="home" size={size} color={color} />

                 )
             }}
             />

            <Tab.Screen 
                name = "Profile" 
                component={Profile} 
                options={{
                 tabBarIcon: ({size, color}) => (
                     <Entypo name="home" size={size} color={color} />

                 )
             }}
             />

            <Tab.Screen 
                name = "Welcome" 
                component={Welcome} 
                options={{
                 tabBarIcon: ({size, color}) => (
                     <Entypo name="home" size={size} color={color} />

                 )
             }}
             />
            
        </Tab.Navigator>


        





        // <Tab.Navigator> 
        //     tabBarOptions={{
        //         style:{
        //             backgroundColor: '#12121212',
        //             borderTopColor: 'transparent'
        //         },
        //         activeTintColor: '#FFF',
        //         tabStyle:{
        //             paddingBottom:5,
        //             paddingTop:5,
        //         }
        //     }}
        
        // >
        //     <Tab.Screen 
        //     name = "Home" 
        //     component={Home} 
        //     options={{
        //         tabBarIcon: ({size, color}) => (
        //             <Entypo name="home" size={size} color={color} />

        //         )
        //     }}
        //     />

        //     <Tab.Screen 
        //     name = "Notification" 
        //     component={Notification} 
        //     />

        //     <Tab.Screen 
        //         name = "Profile" 
        //         component={Profile} 
        //     />

        //     <Tab.Screen 
        //         name = "Food" 
        //         component={Food} 
        //     />

        //     <Tab.Screen 
        //         name = "Help" 
        //         component={Help} 
        //     />

        //     <Tab.Screen 
        //         name = "Welcome" 
        //         omponent={Welcome} 
        //     />
        // </Tab.Navigator>
    

    )
}
