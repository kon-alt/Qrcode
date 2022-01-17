import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from "../../screens/home";
import {ChooseFromLib, Scanner, ScannerForm} from "../../screens/scanner";

const Stack = createNativeStackNavigator();

export const StackNavigationScanner = () => {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Scanner" component={Scanner}/>
            <Stack.Screen name="ScannerForm" component={ScannerForm}/>
            <Stack.Screen name="ChooseFromLib" component={ChooseFromLib}/>
        </Stack.Navigator>
    )
}
