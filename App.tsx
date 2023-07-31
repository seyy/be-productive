import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './navigator/RootNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});
