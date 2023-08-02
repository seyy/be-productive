import React, { useLayoutEffect } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { useNavigation, CompositeNavigationProp } from '@react-navigation/native' 
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabStackParamlist } from '../navigator/TabNavigator'
import { RootStackParamList } from '../navigator/RootNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Login from './Login'
import { theme } from '../constants/theme'

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
    <ScrollView style={styles.container}>
      <Login />
    </ScrollView>
  )
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.black,
  },
})

export default Home