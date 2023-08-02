import { Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { TabStackParamlist } from '../navigator/TabNavigator';
import { RootStackParamList } from '../navigator/RootNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import GoBack from '../components/GoBack';
import { theme } from '../constants/theme'

export type LoginNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamlist, 'Home'>,
  NativeStackNavigationProp<RootStackParamList>
>

interface loginFormData {
  username: string;
  password: string;
}

const Login = () => {
  const navigation = useNavigation<LoginNavigationProp>()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  })

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })
  
  const onSubmit = (data: loginFormData) => console.log(data)

  return (
    <SafeAreaView style={styles.container}>
    <GoBack />
      <Text style={styles.textLogin}>Log in to be<Text style={styles.pro}>Pro</Text>ductive</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Username'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor="#777"
          />
        )}
        name='username'
      />
      {errors.username && <Text style={styles.errorText}>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Password'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
            placeholderTextColor="#777"
          />
        )}
        name="password"
      />
      {errors.password && <Text style={styles.errorText}>This is required.</Text>}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={styles.button}
      >
        <Text style={styles.text}>
          SIGN IN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.joinText}>No account? Join <Text style={styles.pro}>Us</Text></Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.black, 
  },
  textLogin: {
    color: theme.colors.white,
    fontWeight: '500',
    fontSize: 28,
    marginBottom: 20,
  },
  input: {
    backgroundColor: theme.colors.grey, 
    borderRadius: 25,
    width: 300,
    height: 44, 
    paddingHorizontal: 15,
    marginBottom: 10, 
    color: theme.colors.black, 
  },
  button: {
    backgroundColor: theme.colors.purple.dark,
    borderRadius: 25,
    width: 300,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20, 
  },
  text: {
    color: theme.colors.white,
    fontSize: 20,
    fontWeight: '500',
  },
  errorText: {
    color: '#FF0000', 
    marginBottom: 10, 
  },
  joinLink: {
    marginTop: 10,
  },
  joinText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: '500',
    marginTop: 12
  },
  pro: {
    color: theme.colors.purple.dark,
  },
})

export default Login;
