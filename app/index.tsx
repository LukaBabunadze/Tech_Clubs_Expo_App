import { Text, View, StyleSheet, Image } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        // source={require("@/assets/images/favicon.png")}
        source={{uri: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg'}}
        style={styles.img}
        resizeMode="contain"
      />
      <Text style={styles.title}>This is for Flexbox and Image testing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 280,
    backgroundColor: "gray",
    borderRadius: 10,
    margin: 20,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '50%',
    backgroundColor: "black",
    // borderRadius: 10,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
  },
  title: {
    fontSize: 28,
    color: 'white',
    textAlign: "center",
  },
});
