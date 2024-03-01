import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Card from "./Card";

const ProductsItem = ({ product, navigation }) => {
  return (
    <>
      <Pressable
        style={styles.card}
        onPress={() => navigation.navigate("ItemDetail", { id: product.id })}
      >
        <Card style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.text}>{product.title}</Text>
            <Image style={styles.images} source={{ uri: product.images[1] }} />
          </View>
        </Card>
      </Pressable>
    </>
  );
};

export default ProductsItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0B606F",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  images: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
});
