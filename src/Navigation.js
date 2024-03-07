import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";
import { StyleSheet } from "react-native";
//Screens
import HomeStack from "./screens/HomeStack";
import AccederScreens from "./screens/AccederScreens";
//Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

//Function
const HomeStackNa = createNativeStackNavigator();
function MyStack() {
    return (
        <HomeStackNa.Navigator
            initialRouteName="HomeStack"
        >
            <HomeStackNa.Screen
                name='HomeStack'
                component={HomeStack}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNa.Screen
                name='Acceder'
                component={AccederScreens}
                options={{
                    headerShown: false
                }}
            />
        </HomeStackNa.Navigator>
    )
}
export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}