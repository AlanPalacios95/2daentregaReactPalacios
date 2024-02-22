import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CategoryItem from "./CategoriesItem";
import categories from "../data/categories.json";

const Categories = ({ navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem category={item} navigation={navigation}/>
        )}
        keyExtractor={(category) => category}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default Categories;