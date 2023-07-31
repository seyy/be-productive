import React, { useLayoutEffect } from 'react'
import { ScrollView, Text } from 'react-native'
import { useNavigation, CompositeNavigationProp } from '@react-navigation/native' 
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabStackParamlist } from '../navigator/TabNavigator'
import { RootStackParamList } from '../navigator/RootNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Login from './Login'

export type ProfileNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamlist, 'Home'>,
  NativeStackNavigationProp<RootStackParamList>
>

const Home = () => {
  const navigation = useNavigation<ProfileNavigationProp>()
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })

  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <Login />
    </ScrollView>
  )
}

export default Home