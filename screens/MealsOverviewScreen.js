import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
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

  return <MealsList items={dispalyedMeals} />;
}
