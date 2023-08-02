import React, { useLayoutEffect } from 'react';
import { ScrollView, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamlist } from '../navigator/TabNavigator';
import { RootStackParamList } from '../navigator/RootNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { theme } from '../constants/theme';
import GoBack from '../components/GoBack';
import { Controller, useForm } from 'react-hook-form';

export type HelpNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamlist, 'Home'>,
  NativeStackNavigationProp<RootStackParamList>
>;

interface questionFormData {
    question: string;
    email: string;
}

const isEmailValid = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

const Help = () => {
  const navigation = useNavigation<HelpNavigationProp>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
        question: "",
        email: "",
    },
  })

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });


  const onSumbit = (data: questionFormData) => console.log(data)

  return (
    <SafeAreaView style={styles.container}>
        <GoBack />
        <ScrollView>
          <Text style={styles.text}>
            Got any questions? Ask <Text style={styles.pro}>Us</Text>
          </Text>

          <Controller
            control={control}
            rules={{
                required: true,
            }}
            render={({ field:  { onChange, onBlur, value} }) => (
                <TextInput
                    style={styles.input}
                    placeholder='Question'
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholderTextColor="777"
                />
            )}
            name="question"
          />
          {errors.question && <Text style={styles.errorText}>Type your question.</Text>}

          <Controller
            control={control}
            rules={{
                required: true,
                validate: isEmailValid,
            }}
            render={({ field:  { onChange, onBlur, value} }) => (
                <TextInput
                    style={styles.input}
                    placeholder='e-mail'
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholderTextColor="777"
                />
            )}
            name="email"
          />
          {errors.email && <Text style={styles.errorText}>Invalid e-mail address</Text>}

          <TouchableOpacity style={styles.button} onPress={handleSubmit(onSumbit)}>
            <Text style={{ color: theme.colors.white }}>Send Question</Text>
          </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.black,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.colors.white,
    fontStyle: 'italic',
    fontSize: 24,
    fontWeight: '500',
    marginTop: 100,
    marginBottom: 20,
  },
  pro: {
    color: theme.colors.purple.dark,
    fontSize: 24,
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
  errorText: {
    color: '#FF0000', 
    marginBottom: 10, 
  },
});

export default Help;
