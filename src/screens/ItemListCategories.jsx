import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ProductsItem from "../components/ProductsItem";
import Search from "../components/Search";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../services/shopService";

const ItemListCategories = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  //const productsFilteredByCategory = useSelector(
  //   (state) => state.shopReducer.value.productsFilteredByCategory
  // );

    const category = useSelector(
    (state) => state.shopReducer.value.categorySelected
  );
  const {
    data: productsFilteredByCategory,
    isLoading,
    error,
  } = useGetProductsByCategoryQuery(category);

  useEffect(() => {
    console.log(productsFilteredByCategory);
    if (productsFilteredByCategory) {
      const productsRaw = Object.values(productsFilteredByCategory);
      const productsFiltered = productsRaw.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(productsFiltered);
    }
  }, [productsFilteredByCategory, keyword]);

  return (
    <View style={styles.container}>
      <Search keyword={keyword} onSearch={setKeyword} />
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductsItem product={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    backgroundColor: "grey",
  },
});

export default ItemListCategories;
