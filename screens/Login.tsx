import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useForm, Controller } from 'react-hook-form';


interface loginFormData {
  username: string;
  password: string;
}

const Login = () => {
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
  
  const onSubmit = (data: loginFormData) => console.log(data)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textLogin}>Log in to beProductive</Text>
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

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={styles.button}
      >
        <Text style={styles.text}>
          SIGN IN
        </Text>
      </TouchableOpacity>
        <Text style={styles.joinText}>No account? Join us</Text>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black', // Background color for the whole website
  },
  textLogin: {
    color: 'white',
    fontWeight: '500',
    fontSize: 28,
    marginBottom: 20, // Adjusted the margin to look better
  },
  input: {
    backgroundColor: 'lightgray', // Changed input background color to light gray
    borderRadius: 25,
    width: 300,
    height: 44, // Increased the height for better visibility
    paddingHorizontal: 15, // Added some padding to the input text
    marginBottom: 10, // Adjusted the margin to look better
    color: 'black', // Text color for the input
  },
  button: {
    backgroundColor: '#831fe0',
    borderRadius: 25,
    width: 300,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20, // Adjusted the margin to look better
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  errorText: {
    color: '#FF0000', // Red color for error text
    marginBottom: 10, // Adjusted the margin to look better
  },
  joinLink: {
    marginTop: 10,
  },
  joinText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
})

export default Login;
