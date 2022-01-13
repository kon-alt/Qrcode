import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from "../screens/home";
import {BottomTabButton, StackNavigationScanner} from "./components";

const Tab = createBottomTabNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerShown: false
            }} tabBar={props => <BottomTabButton {...props} />}>
                <Tab.Screen name="App" options={{
                    tabBarLabel: 'Home'
                }} component={StackNavigationScanner}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
