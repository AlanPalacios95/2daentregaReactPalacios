import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar} from "react-native";
import ItemDetail from "../screens/ItemDetail";
import ItemListCategories from "../screens/ItemListCategories";
import Home from "../screens/Home";
import Header from "../components/Header";

const Navigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default Navigator;
