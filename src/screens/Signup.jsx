import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'; 
import { useSignUpMutation } from '../services/authService';
import { setUser } from "../feactures/auth/authSlice";
import SubmitButton from '../components/SubmitButton';
import { useDispatch } from 'react-redux';
import {signupSchema} from '../validations/signupSchema'

const Signup = () => {

    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const [triggerSignup, result] = useSignUpMutation();

    const dispatch = useDispatch()

    const onSubmit = () => {
        try {
            signupSchema.validateSync({email, password, confirmPassword})
            triggerSignup({email, password})
        } catch(err) {
            switch(err.path) {
                case "email":
                    setErrorMail(err.message);
                    break;
                case "password":
                    setErrorPassword(err.message);
                    break;
                case "confirmPassword":
                    setErrorConfirmPassword(err.message);
                    break;
                default:
                    break;
            }
        }
    }

    useEffect(() => {
        if(result.data) {
            dispatch(setUser(result.data))
        }
    }, [result])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <InputForm label={"Email"} error={errorMail} onChange={setEmail}/>
      <InputForm label={"Password"} error={errorPassword} onChange={setPassword} isSecure={true}/>
      <InputForm label={"Confirm Password"} error={errorConfirmPassword} onChange={setConfirmPassword} isSecure={true}/> 
      <SubmitButton title={"Register"} onPress={onSubmit}/>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white', 
  },
  button: {
    backgroundColor: '#0B606F',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});