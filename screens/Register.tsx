import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

interface registerFormData {
  username: string;
  email: string;
  password: string;
}


const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<registerFormData>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });




  const onSubmit = (data: registerFormData) => console.log(data);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textRegister}>Sign Up for beProductive</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor="#777"
          />
        )}
        name="username"
      />
      {errors.username && <Text style={styles.errorText}>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor="#777"
          />
        )}
        name="email"
      />
      {errors.email && <Text style={styles.errorText}>Invalid e-mail address.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
            placeholderTextColor="#777"
          />
        )}
        name="password"
      />
      {errors.password && (
        <Text style={styles.errorText}>This field is required and should be less than 100 characters.</Text>
      )}

      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
        <Text style={styles.text}>SIGN UP</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInLink}>
        <Text style={styles.signInText}>Already a member? Sign in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  textRegister: {
    color: 'white',
    fontWeight: '500',
    fontSize: 28,
    marginBottom: 20, 
  },
  input: {
    backgroundColor: 'lightgray', 
    borderRadius: 25,
    width: 300,
    height: 44, 
    paddingHorizontal: 15,
    marginBottom: 10,
    color: 'black', 
  },
  button: {
    backgroundColor: '#831fe0',
    borderRadius: 25,
    width: 300,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20, 
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  errorText: {
    color: '#FF0000', 
    marginBottom: 10, 
  },
  signInLink: {
    marginTop: 10,
  },
  signInText: {
    color: '#4f2f6d',
    fontSize: 16,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});

export default Register;
