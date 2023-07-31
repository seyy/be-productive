import React, { useLayoutEffect } from 'react'
import { ScrollView } from 'react-native'
import { useNavigation, CompositeNavigationProp } from '@react-navigation/native' 
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabStackParamlist } from '../navigator/TabNavigator'
import { RootStackParamList } from '../navigator/RootNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type HomeNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamlist, 'Home'>,
  NativeStackNavigationProp<RootStackParamList>
>

const Home = () => {
  const navigation = useNavigation<HomeNavigationProp>()
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })

  return (
    <ScrollView style={{backgroundColor: 'black'}}>
    </ScrollView>
  )
}

export default Home