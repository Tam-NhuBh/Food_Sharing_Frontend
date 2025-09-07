import { useEffect, useState } from "react";
import RecipeCardList from "../../../components/CardList";
import type { Recipe } from "../../../types";
import type { RecipeCardProps } from "../../../components/Recipe/RecipeCard";

export default function RecipeList() {
  const [recipes, setRecipes] = useState<Recipe[]>();
  useEffect(() => {
    fetch('/api/recipes').then((res) => res.json())
                         .then((res) => setRecipes(res as Recipe[]));
  }, [])
  return (recipes && 
  <RecipeCardList
    recipes={
      recipes.map((recipe) => {
        return {
          image: recipe.image,
          title: recipe.title,
          description: recipe.description,
          category: recipe.category,
          actions: 'Read Recipe'
        };
      }) as RecipeCardProps[]
    }
  />)
}
