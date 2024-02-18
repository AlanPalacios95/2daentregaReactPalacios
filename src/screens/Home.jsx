import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Categories from "../components/Categories";

const Home = ({ setCategorySelected }) => {
  return (
    <View style={styles.container}>
      <Header title={"Inicio"} />
      <Categories setCategorySelected={setCategorySelected} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#0B606F",
  },
});