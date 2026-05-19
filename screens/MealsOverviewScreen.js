import { StyleSheet, Text, View } from "react-native";

export default function MealsOverviewScreen({ route }) {
  const { categoryId } = route.params;

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
