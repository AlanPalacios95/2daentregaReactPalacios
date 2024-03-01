import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { increment, decrement, incrementByAmount, reset, } from '../feactures/counter/counterSlice';
import { UseDispatch, useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => state.counterReducer.value);

  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <Pressable onPress={() => dispatch(decrement())} style={styles.button}>
        <Text>-</Text>
      </Pressable>
      <Text style={styles.counterText}>{count}</Text>
      <Pressable onPress={() => dispatch(increment())} style={styles.button}>
        <Text>+</Text>
      </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 10, 
  },
  counterText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10, 
  },
});