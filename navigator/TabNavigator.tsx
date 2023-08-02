import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Timer from '../screens/Timer';
import AddTask from '../screens/AddTask';
import Profile from '../screens/Profile';
import Calendar from '../screens/Calendar';
import Home from '../screens/Home';
import { theme } from '../constants/theme';

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
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: 'black', height: 54 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Calendar') {
            iconName = 'calendar';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          } else if (route.name === 'Timer') {
            iconName = 'clock';
          } else {
            iconName = 'plus-circle';
          }

          return (
            <Feather
              name={iconName}
              size={route.name === 'AddTask' ? 49 : 24}
              color={focused ? theme.colors.purple.dark : theme.colors.grey}
            />
          );
        },
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
