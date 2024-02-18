import React, { useState } from "react";
import { StyleSheet, View } from "react-native"; 
import Constants from "expo-constants"; 
import { StatusBar } from "expo-status-bar";
import Home from "./src/screens/Home";
import ItemListCategories from "./src/screens/ItemListCategories";

export default function App() {
  const [categorySelected, setCategorySelected] = useState('');


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {categorySelected ? (
        <ItemListCategories category={categorySelected} />
      ) : (
        <Home setCategorySelected={setCategorySelected} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight, 
  },
});