import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const SingleProduct = () => {
  const { slug } = useLocalSearchParams();

  console.log(slug)
  return (
    <View>
      <Text>SingleProduct</Text>
    </View>
  );
};

export default SingleProduct;

const styles = StyleSheet.create({});
