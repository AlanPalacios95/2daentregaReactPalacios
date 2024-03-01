import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Categories from "../components/Categories";

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Categories navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "grey",
  },
});