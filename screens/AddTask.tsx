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

export type AddTaskNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamlist, 'Home'>,
  NativeStackNavigationProp<RootStackParamList>
>

interface AddTaskFormData {
  taskName: string;
  description: string;
}

const AddTask = () => {
  const navigation = useNavigation<AddTaskNavigationProp>()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddTaskFormData>({
    defaultValues: {
      taskName: "",
      description: "",
    },
  })

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })
  
  const onSubmit = (data: AddTaskFormData) => {
    console.log(data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <GoBack />
      <Text style={styles.text}>Add a Task</Text>

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Task Name'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor="#777"
          />
        )}
        name='taskName'
      />
      {errors.taskName && <Text style={styles.errorText}>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Description'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor="#777"
          />
        )}
        name="description"
      />
      {errors.description && <Text style={styles.errorText}>This is required.</Text>}
      
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={styles.button}
      >
        <Text style={styles.textButton}>ADD TASK</Text>
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
  text: {
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
  textButton: {
    color: theme.colors.white,
    fontSize: 20,
    fontWeight: '500'
  },
  errorText: {
    color: '#FF0000', 
    marginBottom: 10, 
  },
})

export default AddTask;
