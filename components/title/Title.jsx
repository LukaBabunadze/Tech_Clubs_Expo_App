import { Text, StyleSheet, View } from "react-native";

const Title = ({ title }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    height: 120,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
  },
});
export default Title;
