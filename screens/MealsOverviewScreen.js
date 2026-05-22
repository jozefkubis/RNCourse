import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

export default function MealsOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params;

  const dispalyedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  const categoryTitle = CATEGORIES.find(
    (category) => category.id === categoryId,
  ).title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryTitle, navigation]);

  function renderMealItem(itemData) {
    const mealItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={dispalyedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
