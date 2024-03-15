import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome, Entypo, Foundation } from "@expo/vector-icons";
import OrdersStack from "./OrderStack";
import MyProfileStack from "./MyProfileStack";

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tab.Screen
          name="ShopStack"
          component={ShopStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <FontAwesome
                    name="shopping-bag"
                    size={24}
                    color={focused ? "black" : "white"}
                  />
                  <Text style={{ color: focused ? "black" : "white" }}>
                    Shop
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="CartStack"
          component={CartStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Entypo
                    name="shopping-bag"
                    size={24}
                    color={focused ? "black" : "white"}
                  />
                  <Text style={{ color: focused ? "black" : "white" }}>
                    Cart
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="OrdersStack"
          component={OrdersStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Foundation
                    name="clipboard-notes"
                    size={24}
                    color={focused ? "black" : "white"}
                  />
                  <Text style={{ color: focused ? "black" : "white" }}>
                    Orders
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="MyProfileStack"
          component={MyProfileStack}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Foundation
                    name="clipboard-notes"
                    size={24}
                    color={focused ? "black" : "white"}
                  />
                  <Text style={{ color: focused ? "black" : "white" }}>
                    My Profile
                  </Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#0B606F",
    shadowColor: "black",
    height: 60,
  },
});

export default TabNavigation;
