import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Inicial from './pages/inicial';
import PedirAjuda from './pages/pedirAjuda';
import QueroAjudar from './pages/queroAjudar';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Inicial" component={Inicial} />
                <AppStack.Screen name="PedirAjuda" component={PedirAjuda} />
                <AppStack.Screen name="Ajudar" component={QueroAjudar} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}