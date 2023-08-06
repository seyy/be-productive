import React, { useLayoutEffect } from 'react'
import { ScrollView, Text, StyleSheet, SafeAreaView, View } from 'react-native'
import { useNavigation, CompositeNavigationProp } from '@react-navigation/native' 
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabStackParamlist } from '../navigator/TabNavigator'
import { RootStackParamList } from '../navigator/RootNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { theme } from '../constants/theme'
import QuestionButton from '../components/QuestionButton'
import Tasks from '../components/home/Tasks'
import { tasks } from '../assets/mocks'
import { Moon } from 'react-native-feather'

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
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <QuestionButton />
        <ScrollView>
          <Text style={styles.text}>be<Text style={styles.pro}>Pro</Text>ductive</Text>
          <Tasks />
        </ScrollView>
      </View>
      <Text style={styles.reminderTextTasks}>You have got {tasks.length} tasks to complete</Text>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  text: {
    color: theme.colors.white,
    fontStyle: 'italic',
    fontSize: 34,
    fontWeight: '500',
  },
  pro: {
    color: theme.colors.purple.dark,
    fontSize: 45
  },
  container: {
    padding: 12,
    backgroundColor: theme.colors.black,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  reminderTextTasks: {
    color: 'white',
    fontSize: 22,
    marginBottom: 185,
    fontStyle: 'italic',
    fontWeight: '500'
  }
})

export default Home