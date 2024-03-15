import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import InputForm from '../components/InputForm';

const Login = () => {

    const onChange = () => {

    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <InputForm label={"Email"} error={""} onChange={onChange}/>
      <InputForm label={"Password"} error={""} onChange={onChange}/>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0B606F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});