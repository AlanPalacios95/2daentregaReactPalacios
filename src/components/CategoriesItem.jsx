import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../feactures/shop/shopSlice";

const CategoriesItem = ({ category, navigation}) => {

  const dispatch = useDispatch()

  return (
    <Card style={styles.container}>
      <Pressable onPress={() => {
        dispatch(setCategorySelected(category))
         navigation.navigate("ItemListCategory", {category})}
      }>
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white",
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default CategoriesItem;