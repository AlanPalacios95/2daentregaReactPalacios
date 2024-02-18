import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";

const CategoriesItem = ({ category, setCategorySelected }) => {
  return (
    <Card style={styles.container}>
      <Pressable onPress={() => setCategorySelected(category)}>
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  text: {
    fontSize: 16,
  },
});

export default CategoriesItem;