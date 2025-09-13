import React, { useEffect } from "react";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import type { Recipe } from "../../types";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  placeholder?: string;
  buttonText?: string;
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const navigate = useNavigate();
  const handleSearch = () => {
    if (onSearch) onSearch(query);
  };
  console.log(recipes);
  useEffect(() => {
    if (query.length > 0) {
      fetch(`api/recipes?title=${query}&description=${query}`)
        .then((res) => res.json())
        .then((res) => setRecipes(res as Recipe[]));
    }
    else {
      setRecipes([])
    }
  }, [query])

  const onClick = (id: number) => {
    navigate(`/recipes/${id}`);
  }

  return (
    <section className="px-6 md:px-20 xl:px-32 bg-cream">
      <div className="flex flex-row relative py-4">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search recipes..."
          className="w-full bg-white border-0 py-3 pr-[130px]"
        />
        <Button
          onClick={handleSearch}
          variant="primary"
          className="absolute right-0 cursor-pointer rounded-lg py-3 w-[120px]"
        >
          Search
        </Button>
        {recipes.length > 0 && (
          <div className="w-full bg-primary absolute top-18 rounded-md p-5 text-white z-100 flex flex-col gap-3">
            {recipes.map((recipe) => (
              <div className="flex gap-5 cursor-pointer hover:bg-dark-primary p-2 rounded-md" onClick={() => onClick(recipe.id)}>
                <img src={recipe.image} alt={recipe.title} width={120} className="rounded-md"/>
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <p className="font-bold text-[1.2rem]">{recipe.title}</p>
                    <p className="border-white border-[1px] px-2 rounded-md text-[.7rem]">
                      {recipe.category}
                    </p>
                  </div>
                  <p>{recipe.description}</p>
                  <p>
                    <span className="font-bold mr-1">
                      {recipe.cookingTime.split(" ")[0]} 
                    </span>
                    {recipe.cookingTime.split(" ")[1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchBar;
