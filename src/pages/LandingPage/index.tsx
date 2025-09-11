import { Link } from "react-router-dom";
import refreshIcon from "../../assets/refresh-icon.svg";
import Button from "../../components/Button";
import RecipeCardList from "../../components/CardList";
import type { RecipeCardProps } from "../../components/Recipe/RecipeCard";
import type { Recipe } from "../../types";
import { useEffect, useState } from "react";
import useRandomRecipes from "../../hooks/useRandomRecipe";


export default function LandingPage() {
  const [recipes, setRecipes] = useState<Recipe[]>();
  const { randomRecipes, getRandomRecipes } = useRandomRecipes(recipes, 3);

  useEffect(() => {
    fetch("/api/recipes")
      .then((res) => res.json())
      .then((res) => {
        setRecipes((res as Recipe[]).slice(0, 3));
      });
  }, []);
  return (
    <div className="font-worksans flex flex-col gap-8">
      {/* Section 1: Hero with background */}
      <section className="relative flex items-center justify-end px-10 md:px-20 py-16 min-h-[50px] sm:min-h-[500px]">
        {/* Background Image */}
        <img
          src="/cooking.PNG"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="absolute inset-0 bg-white/10 -z-10"></div>
        {/* Content (aligned right) */}
        <div className="sm:pl-40 font-worksans w-full md:w-1/2 text-right sm:text-left relative z-10">
          <h2 className="text-2xl md:text-4xl font-lobster text-primary mb-4">
            Nom Nom
          </h2>
          <p className="text-lg md:text-2xl text-black sm:text-white font-semibold mb-6">
            Find recipes you’ll love, <br /> with the ease you need.
          </p>
          <Link to="/recipes">
            <button className="text-md md:text-xl bg-primary font-playfair text-white px-6 py-3 rounded-full font-bold hover:bg-[#732c4e] transition">
              Explore
            </button>
          </Link>
        </div>
      </section>

      {/* Section 2: Most picked recipe */}
      <section className="px-6 md:px-20 xl:px-32">
        <h2 className="md:text-2xl text-lg font-bold font-playfair mb-5">
          Most Picked <span className="text-primary">Dishes</span>
        </h2>
        {recipes && (
          <RecipeCardList
            recipes={
              recipes.map((recipe) => {
                return {
                  id: recipe.id,
                  image: recipe.image,
                  title: recipe.title,
                  description: recipe.description,
                  category: recipe.category,
                  actions: "Read Recipe",
                };
              }) as unknown as RecipeCardProps[]
            }
          ></RecipeCardList>
        )}
      </section>

      {/* Section 3: Sharing your recipe */}
      <section className="flex flex-col items-center py-9 bg-cream gap-4 text-center">
        <p className="font-extrabold font-playfair text-primary md:text-3xl text-lg">
          Share Your Story, Share Your Dish
        </p>
        <p className="font-worksans font-normal md:text-lg text-sm px-3">
          Every dish has a story - what's yours? Share your favorite recipes
          with our community of home cooks and inspire others.
        </p>
        <Link to="/recipes/add">
          <Button
            variant="primary"
            className="cursor-pointer md:text-md text-sm"
          >
            SHARE YOUR RECIPE
          </Button>
        </Link>
      </section>

      {/* Section 4: Random Recipes */}
      <section className="px-6 md:px-20 xl:px-32">
        <div className="flex justify-between items-center mb-5">
          <h2 className="md:text-2xl text-lg font-bold font-playfair">
            Random <span className="text-primary">Dishes</span>
          </h2>
          <button
            onClick={getRandomRecipes}
            className="bg-cream py-2 px-4 cursor-pointer font-medium flex gap-2 items-center 
             md:text-[1rem] text-[.9rem] 
             transition-colors duration-300 
             hover:bg-primary hover:text-white 
             active:scale-95"
          >
            <img
              src={refreshIcon}
              alt="refresh-icon"
              className="md:w-[1.5rem] w-[1rem] transition-transform duration-500 hover:rotate-180"
            />
            Random
          </button>
        </div>
        {randomRecipes.length > 0 && (
          <RecipeCardList
            recipes={
              randomRecipes.map((recipe) => ({
                id: recipe.id,
                image: recipe.image,
                title: recipe.title,
                description: recipe.description,
                category: recipe.category,
                actions: "Read Recipe",
              })) as unknown as RecipeCardProps[]
            }
          />
        )}
      </section>
    </div>
  );
}
