import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import ItemDetail from "../screens/ItemDetail";
import ItemListCategories from "../screens/ItemListCategories";
import Home from "../screens/Home";
import Header from "../components/Header";

const ShopStack = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          header: () => {
            return (
              <Header
                title={
                  route.name === "Home"
                    ? "Categories"
                    : route.name === "ItemListCategory"
                    ? route.params.category
                    : "Detail"
                }
              />
            );
          },
        })}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
        <Stack.Screen name="ItemListCategory" component={ItemListCategories} />
      </Stack.Navigator>
    </>
  );
};

export default ShopStack;