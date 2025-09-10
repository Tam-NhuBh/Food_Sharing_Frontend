import { useState, useCallback, useEffect } from "react";
import type { Recipe } from "../types";

const useRandomRecipes = (recipes: Recipe[] = [], count: number = 3) => {
  const [randomRecipes, setRandomRecipes] = useState<Recipe[]>([]);

  const getRandomRecipes = useCallback(() => {
    if (!recipes || recipes.length === 0) {
      setRandomRecipes([]);
      return;
    }
    const shuffled = [...recipes].sort(() => Math.random() - 0.5);
    setRandomRecipes(shuffled.slice(0, Math.min(count, recipes.length)));
  }, [recipes, count]);

  // Generate initial random recipes on mount
  useEffect(() => {
    getRandomRecipes();
  }, [getRandomRecipes]);

  return { randomRecipes, getRandomRecipes };
};

export default useRandomRecipes;
