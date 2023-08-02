import React, { useLayoutEffect } from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import { useNavigation, CompositeNavigationProp } from '@react-navigation/native' 
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabStackParamlist } from '../navigator/TabNavigator'
import { RootStackParamList } from '../navigator/RootNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { theme } from '../constants/theme'

export type TimerNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamlist, 'Home'>,
  NativeStackNavigationProp<RootStackParamList>
>

const Timer = () => {
  const navigation = useNavigation<TimerNavigationProp>()
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })

  return (
    <ScrollView style={styles.container}>
    </ScrollView>
  )
}

export const styles = StyleSheet.create({
  text: {

  },
  container: {
    backgroundColor: 'black',
  }
})


export default Timer
