import React from 'react';
import RecipeCard from '../RecipeCard';
import type { RecipeCardProps } from '../RecipeCard';

export interface RecipeCardListProps {
	recipes: RecipeCardProps[];
	className?: string;
}

const RecipeCardList: React.FC<RecipeCardListProps> = ({ recipes, className = '' }) => {
	return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ${className}`}
    >
      {recipes.map((recipe, idx) => (
        <RecipeCard key={recipe.title + idx} {...recipe} />
      ))}
    </div>
  );
};

export default RecipeCardList;
