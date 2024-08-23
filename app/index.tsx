import { Text, View, StyleSheet, Image } from "react-native";
import ProductItem from "@/components/productItem/ProductItem";

const data = [
  {
    id: 0,
    name: "Apple Watch",
    description:
      "am trying something like this in my styles but only seems to work: elevation and shadowColor, the rest of the shadow styles do not seem to do anything in my android emulator (maybe in ios it does)",
    image:
      "https://static.itechnics.ge/uploads/products/9920e14983f09e166f6143087fba73398c928879126954b1d62da7cc4d41f60a.jpg",
  },
  {
    id: 1,
    name: "Macbook Pro M3",
    description:
      "but only seems to work: elevation and shadowColor, the rest of the shadow styles do not seem to do anything in my android emulator (maybe in ios it does)",
    image:
      "https://m.media-amazon.com/images/I/81Jp6ol-1kL._AC_UF350,350_QL80_.jpg",
  },
  {
    id: 2,
    name: "BMW - very good car",
    description:
      "elevation and shadowColor, the rest of the shadow styles do not seem to do anything in my android emulator (maybe in ios it does)",
    image:
      "https://www.bmw-georgia.com/content/dam/bmw/common/all-models/3-series/sedan/2022/navigation/bmw-3-series-sedan-lci-modelfinder.png",
  },
];

export default function Index() {
  return (
    <View>
      {data.map((item) => (
        <ProductItem product={item} key={item.id}/>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
