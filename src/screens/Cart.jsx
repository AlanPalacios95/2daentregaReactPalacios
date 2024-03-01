import { StyleSheet, View, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";
import allCartItems from "../data/cart.json";
import CartItem from "../components/CartItem";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState();

  useEffect(() => {
    const total = allCartItems.reduce(
      (acc, currentItem) => (acc += currentItem.quantity * currentItem.price),
      0
    );
    setTotal(total);
    setCartItems(allCartItems);
  }, []);

  return (
    <View>
      <FlatList
        data={cartItems}
        keyExtractor={(cartItems) => cartItems.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <Text>Total: ${total} </Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
