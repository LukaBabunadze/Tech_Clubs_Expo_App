import { View, StyleSheet, FlatList } from "react-native";
import ProductItem from "@/components/productItem/ProductItem";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/app/_layout";
import { Link } from "expo-router";

export default function Index() {
  const [products, setProducts] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => setProducts(result));
  }, []);

  return (
    <View>
      {user ? (
        <FlatList
          numColumns={2}
          bounces={false}
          contentContainerStyle={styles.flatList}
          data={products}
          renderItem={({ item }) => <ProductItem product={item} />}
        />
      ) : (
        <View style={styles.linkWrapper}>
          <Link style={styles.link} href={"/(tabs)/profile"}>
            you must be logged in to see products
          </Link>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  flatList: {
    backgroundColor: "skyblue",
    paddingBottom: 200,
  },
  linkWrapper: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    fontSize: 16,
    textAlign: 'center',
    color: 'rgb(0, 0, 120)'
  },
});
