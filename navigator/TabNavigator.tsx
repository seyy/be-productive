import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import Calendar from '../screens/Calendar';
import Home from '../screens/Home';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Timer from '../screens/Timer';
import AddTask from '../screens/AddTask';

export type TabStackParamlist = {
  Profile: undefined;
  Home: undefined;
  Calendar: undefined;
  Register: undefined;
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []); // Pass an empty array as the second argument to useLayoutEffect

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: 'black', height: 54, border: 'none'},
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <Feather name="home" size={24} color={focused ? '#831fe0' : 'gray'} />
            );
          } else if (route.name === 'Calendar') {
            return (
              <Feather name="calendar" size={24} color={focused ? '#831fe0' : 'gray'} />
            );
          } else if (route.name === 'Profile') {
            return (
              <Feather name="user" size={24} color={focused ? '#831fe0' : 'gray'} />
            );
          } else if (route.name === 'Timer') {
            return (
              <Feather name="clock" size={24} color={focused ? '#831fe0' : 'gray'} />
            );
          } else 
            return (
              <Feather name="plus-circle" size={49} color={focused ? '#831fe0' : 'gray'} />
            );
          }
      })}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Timer" component={Timer} />
      <Tab.Screen name="AddTask" component={AddTask} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;