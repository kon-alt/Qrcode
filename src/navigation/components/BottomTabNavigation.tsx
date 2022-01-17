import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabButton, StackNavigationScanner} from './index';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
      <Tab.Navigator screenOptions={{
        headerShown: false
      }} tabBar={props => <BottomTabButton {...props} />}>
        <Tab.Screen name="App" options={{
          tabBarLabel: 'Home'
        }} component={StackNavigationScanner}/>
      </Tab.Navigator>
  );
};
