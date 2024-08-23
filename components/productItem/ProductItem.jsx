import { Image, Pressable, StyleSheet, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";

const ProductItem = ({ product }) => {
  const handlePress = () => {
    console.log("button pressed!");
  };

  return (
    <Pressable style={styles.item} onPress={handlePress}>
      <Image
        source={{
          uri: product.image,
        }}
        style={styles.image}
      />
      <Text numberOfLines={2} style={[styles.title, styles.anotherTitleStyle]}>
        {product.name}
        <Feather name="shopping-cart" size={24} color="black" />
      </Text>
      <Text numberOfLines={4} style={styles.desc}>
        {product.description}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    padding: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 3.84,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    marginVertical: 15,
    fontSize: 18,
    fontWeight: "700",
    marginHorizontal: 10,
    textAlign: "center",
  },
  desc: {
    fontSize: 12,
    fontWeight: "400",
  },
  anotherTitleStyle: {
    color: '#000'
  }
});

export default ProductItem;
