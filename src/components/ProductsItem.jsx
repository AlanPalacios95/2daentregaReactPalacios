import { StyleSheet, Text, View, Image } from "react-native";
import Card from "./Card";

const ProductsItem = ({ product }) => {
  return (
    <Card style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <Image style={styles.images} source={{ uri: product.images[0] }} />
      </View>
    </Card>
  );
};

export default ProductsItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#0B606F",
  },
  content: {
    flexDirection: "row",
    alignItems: "center", 
    justifyContent: "space-between", 
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  images: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
});