import { View,  FlatList } from 'react-native'
import order from '../data/orders.json'
import OrderItem from '../components/OrderItem'

const Order = () => {
  return (
    <View>
      <FlatList
      data={order}
      renderItem={({item}) => <OrderItem item={item}/>}/>
      keyExtractor={(order) => order.id}
    </View>
  )
}

export default Order