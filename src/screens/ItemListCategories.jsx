import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import allProducts from "../data/products.json";
import ProductsItem from "../components/ProductsItem";
import Search from "../components/Search";
import Header from "../components/Header";

const ItemListCategories = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (category) {
      const products = allProducts.filter(
        (product) => product.category === category
      );
      const filteredProducts = products.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(filteredProducts);
    } else {
      const filteredProducts = allProducts.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(filteredProducts);
    }
  }, [category, keyword]);

  return (
    <View style={styles.container}>
      <Header title={"Inicio"} />
      <Search keyword={keyword} onSearch={setKeyword} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductsItem product={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

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

export default ItemListCategories;
