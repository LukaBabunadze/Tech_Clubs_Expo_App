import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { windowHeigth, windowWidth } from "@/constants/windowSize";

const SingleProduct = () => {
  const { slug } = useLocalSearchParams();
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${slug}`)
      .then((response) => response.json())
      .then((result) => setSingleProduct(result));
  }, []);

  const handleBuy = () => console.log("Buy This Product");

  return (
    <ScrollView>
      <ImageBackground
        source={{ uri: singleProduct.image }}
        style={styles.imgBackground}
        resizeMode="contain"
      >
        <View style={styles.headerWrapper}>
          <Text style={styles.title}>{singleProduct.title}</Text>
        </View>
      </ImageBackground>
      <Text style={styles.desc}>{singleProduct.description}</Text>
      <TouchableOpacity
        onPress={handleBuy}
        style={[
          styles.button,
          Platform.OS === "ios"
            ? { backgroundColor: "rgb(0, 70, 70)" }
            : { backgroundColor: "rgb(70, 70, 70)" },
        ]}
      >
        <Text style={styles.buttonTitle}>Buy</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SingleProduct;

const styles = StyleSheet.create({
  imgBackground: {
    height: windowHeigth / 3,
    width: "100%",
  },
  headerWrapper: {
    height: windowHeigth / 3,
    width: "100%",
    backgroundColor: "rgba(68, 46, 87, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "800",
    textAlign: "center",
    textTransform: "capitalize",
  },
  desc: {
    fontSize: 24,
    textAlign: "justify",
    padding: 20,
    lineHeight: 33,
  },
  button: {
    width: windowWidth - 40,
    backgroundColor: "rgb(0, 70, 70)",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    margin: 20,
  },
  buttonTitle: {
    fontSize: 24,
    color: "white",
    fontWeight: "600",
  },
});
