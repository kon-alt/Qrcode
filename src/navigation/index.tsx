import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTabNavigation} from './components';

const Drawer = createDrawerNavigator();

export const Navigation = () => {
  return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
              name="overlay"
              options={{
                headerShown: false,
                title: '',
                drawerIcon: () => null,
                drawerItemStyle: {height: 0}
              }}
              component={BottomTabNavigation}
          />
        </Drawer.Navigator>
      </NavigationContainer>
  );
};




