import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo, Feather } from '@expo/vector-icons';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Services from './pages/Services';
import NewJob from './pages/NewJob';
import Info from './pages/Info';
import ButtonNew from './components/NewJob';



const Tab = createBottomTabNavigator();

export default function Routes() {
    return(
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: '#FFF',
                    borderTopColor: 'transparent',
                    height: 60
                    
                },
                keyboardHidesTabBar: true,
                activeTintColor: '#37b7dc',
                inactiveTintColor: '#8BE5FF',
                tabStyle: {
                    paddingBottom: 5,
                    paddingTop: 5,
                    borderBottomWidth: 4, 
                    borderBottomColor: '#37b7dc',
                    borderTopWidth: 4,
                    borderTopColor: '#37b7dc'
                },
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({ size, color}) => (
                        <Entypo name="home" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen 
                name="Serviços" 
                component={Services} 
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Entypo name="suitcase" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen 
                name="NewJob" 
                component={NewJob} 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused, size, color}) => (
                       <ButtonNew size={Number(size)} color={color} focused={focused}/>
                    )
                }}
            />

            <Tab.Screen 
                name="Informações" 
                component={Info} 
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Feather name="info" size={size} color={color} />
                    )
                }}
            />
            
            <Tab.Screen 
                name="Perfil" 
                component={Profile} 
                options={{
                    tabBarIcon: ({size, color}) => (
                        <Entypo name="user" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}