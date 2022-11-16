import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Favourite from '../screens/Favourite'
import Profile from '../screens/Profile'
import {Image} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                style:{
                    height:65,
                    justifyContent:"center",
                    paddingVertical:15,
                    backgroundColor:"#eff4f0",
                    elevation:2
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel:"",
                    tabBarIcon:({ focused }) => (
                    <MaterialCommunityIcons name="tree" size={25} color={focused ? "green" : "gray"} />
                    )
                }}
            />

            <Tab.Screen
                name="Favourite"
                component={Favourite}
                options={{
                    headerShown: false,
                    tabBarLabel:"",
                    tabBarIcon:({focused}) => (
                    <MaterialIcons name="favorite" size={25} color={focused ? "green" : "gray"} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};


const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={BottomTabNavigator}/>
            <Stack.Screen name="Detail" component={Detail}/>
            <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
    )
}

export default HomeStackNavigator;