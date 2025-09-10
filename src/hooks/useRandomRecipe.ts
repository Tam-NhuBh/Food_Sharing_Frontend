import { useState, useEffect } from "react";
import type { Recipe } from "../types";

const useRandomRecipes = (recipes: Recipe[] | undefined, count: number = 3) => {
  const [randomRecipes, setRandomRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    if (!recipes || recipes.length === 0) {
      setRandomRecipes([]);
      return;
    }

    // Shuffle once when recipes/count change
    const shuffled = [...recipes].sort(() => Math.random() - 0.5);
    setRandomRecipes(shuffled.slice(0, Math.min(count, recipes.length)));
  }, [recipes?.length, count]); 

  const getRandomRecipes = () => {
    if (!recipes || recipes.length === 0) {
      setRandomRecipes([]);
      return;
    }
    const shuffled = [...recipes].sort(() => Math.random() - 0.5);
    setRandomRecipes(shuffled.slice(0, Math.min(count, recipes.length)));
  };

  return { randomRecipes, getRandomRecipes };
};

export default useRandomRecipes;
