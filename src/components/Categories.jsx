import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CategoryItem from "./CategoriesItem";
import Counter from "./Counter";
import { useSelector } from "react-redux";

const Categories = ({ navigation}) => {
const categories = useSelector((state) => state.shopReducer.value.categories)

  return (
    <View style={styles.container}>
      <Counter ></Counter>
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
    paddingHorizontal: 60,
    width: '%80',
  },
});

export default Categories;