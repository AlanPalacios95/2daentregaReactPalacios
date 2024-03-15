import { View, FlatList } from "react-native";
import order from "../data/orders.json";
import OrderItem from "../components/OrderItem";

const Order = () => {
  return (
    <View>
      <FlatList
        data={order}
        keyExtractor={(order) => order.id}
        renderItem={({ item }) => <OrderItem item={item} />}
      />
    </View>
  );
};

export default Order;
