import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileImageQuery, useGetUserLocationQuery } from "../services/shopService";
import { setProfileImage, setUserLocation } from "../feactures/auth/authSlice";
;

const MainNavigator = () => {
  const {user, localId} = useSelector(state => state.authReducer.value)
  const {data, error, isLoading} = useGetProfileImageQuery(localId);
  const {data: location } = useGetUserLocationQuery(localId);

  const dispatch = useDispatch();

  useEffect(()=> {
    if(data) {
      console.log(data.image);
      dispatch(setProfileImage(data.image))
    }
    if(location) {
      dispatch(setUserLocation(location))
    }
  }, [data, location])

  return (
    <TabNavigator>{user ? <TabNavigator /> : <AuthStack />}</TabNavigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
