import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import Register from '../screens/Register';
import Login from '../screens/Login';

export type RootStackParamList = {
  Main: undefined;
  MyModal: { userId: string; name: string };
  Order: { order: any };
  Register: undefined
  Login: undefined
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
        <RootStack.Screen name='Main' component={TabNavigator} />
        <RootStack.Screen name='Register' component={Register} />
        <RootStack.Screen name='Login' component={Login} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
