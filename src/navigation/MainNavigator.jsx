import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import TabNavigator from "./TabNavigatior";
import AuthStack from "./AuthStack";
import {NavigationContainer} from "@react-navigation/native";
import { useSelector } from "react-redux";

const MainNavigator = () => {
  //const { user, setUser } = useState(null);

  const user = useSelector(state => state.auth.value.user)

  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
