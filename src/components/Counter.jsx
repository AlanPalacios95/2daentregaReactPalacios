import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { increment, decrement } from "../feactures/counter/counterSlice"; 
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counterReducer.value);

  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Pressable  onPress={()=> dispatch(decrement())} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Text>{count}</Text>
        <Pressable onPress={()=> dispatch(increment())} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    marginBottom: 10,
  },
  counterText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});