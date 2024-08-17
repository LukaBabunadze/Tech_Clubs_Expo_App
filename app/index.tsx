import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.child}>
          <Text style={styles.title}>1</Text>
        </View>
        <View style={styles.child}>
          <Text style={styles.title}>2</Text>
        </View>
        <View style={styles.child}>
          <Text style={styles.title}>3</Text>
        </View>
        <View style={styles.child}>
          <Text style={styles.title}>2</Text>
        </View>
        <View style={styles.child}>
          <Text style={styles.title}>3</Text>
        </View>
        <View style={styles.child}>
          <Text style={styles.title}>2</Text>
        </View>
        <View style={styles.child}>
          <Text style={styles.title}>3</Text>
        </View>
        <View style={styles.child}>
          <Text style={styles.title}>3</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    height: 380,
    width: "95%",
    margin: 10,
    borderWidth: 5,
    borderColor: "black",
    display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-between",
    // alignItems: "center",
    flexDirection: "row",
    justifyContent: "center", //flex-start; flex-end; center, space-between, space-around, space-evenly
    alignItems: "flex-start", //flex-start; flex-end; center
    flexWrap: "wrap",
    alignContent: "center", ////flex-start; flex-end; center, space-between, space-around, space-evenly
    // rowGap: 10,
    // columnGap: 10,
    gap: 10,
  },
  child: {
    height: 80,
    width: 80,
    backgroundColor: "blue",
    borderWidth: 5,
  },
  title: {
    color: "white",
    fontSize: 30,
  },
});
