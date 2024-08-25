import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Products = () => {
  return (
    <View>
      <Text>Products</Text>
      <Link href="/(tabs)/products/singleProduct/ebek">
        go to single products
      </Link>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
