import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import Register from '../screens/Register';
import Login from '../screens/Login';
import Help from '../screens/Help'
import Home from '../screens/Profile';

export type RootStackParamList = {
  Main: undefined;
  MyModal: { userId: string; name: string };
  Order: { order: any };
  Register: undefined
  Login: undefined
  Help: undefined
  Home: undefined
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
        <RootStack.Screen name='Main' component={TabNavigator} />
        <RootStack.Screen name='Register' component={Register} />
        <RootStack.Screen name='Login' component={Login} />
        <RootStack.Screen name='Home' component={Home} />
        <RootStack.Screen name='Help' component={Help} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
