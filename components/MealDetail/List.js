import { StyleSheet, Text, View } from "react-native";

export default function List({ data }) {
  return data.map((item) => (
    <View style={styles.listItem} key={item}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginVertical: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#e2b497",
    borderRadius: 6,
  },
  itemText: {
    textAlign: "center",
    color: "#351401",
  },
});
