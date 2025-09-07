// import Button from "../../components/Button";
// import Input from "../../components/Input";
// import ReviewCard from "../../components/Review/ReviewCard";
import landingPageBg from "../../assets/Landing-page-bg.png";
import refreshIcon from "../../assets/refresh-icon.svg"
import Button from "../../components/Button";
import RecipeCardList from "../../components/CardList";
import type { RecipeCardProps } from "../../components/Recipe/RecipeCard";
import type { Recipe } from "../../types";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [recipes, setRecipes] = useState<Recipe[]>();
    useEffect(() => {
      fetch("/api/recipes")
        .then((res) => res.json())
        .then((res) => {
          setRecipes((res as Recipe[]).slice(0, 3));
        });
    }, [])
  return (
    <div className="flex flex-col gap-8">
      <picture>
        <img
          src={landingPageBg}
          alt="landing-page-bg"
          className="bg-cover w-full"
        />
      </picture>
      <section className="px-6 md:px-20 xl:px-32">
        <h2 className="text-[2.5rem] font-bold font-playfair mb-5">
          Most Picked <span className="text-primary">Dishes</span>
        </h2>
        {recipes && (
          <RecipeCardList
            recipes={
              recipes.map((recipe) => {
                return {
                  image: recipe.image,
                  title: recipe.title,
                  description: recipe.description,
                  category: recipe.category,
                  actions: "Read Recipe",
                };
              }) as RecipeCardProps[]
            }
          ></RecipeCardList>
        )}
      </section>
      <section className="flex flex-col items-center py-9 bg-cream gap-4">
        <p className="font-extrabold text-primary text-4xl">
          Share Your Story, Share Your Dish
        </p>
        <p className="font-medium text-[1.25rem]">
          Every dish has a story - what's yours? Share your favorite recipes
          with our community of home cooks and inspire others.
        </p>
        <Button variant="primary" className="cursor-pointer">
          SHARE YOUR RECIPE
        </Button>
      </section>
      <section className="px-6 md:px-20 xl:px-32">
        <div className="flex justify-between items-center">
          <h2 className="text-[2.5rem] font-bold font-playfair mb-5">
            Random <span className="text-primary">Dishes</span>
          </h2>
          <button className="bg-cream py-2 px-4 cursor-pointer font-medium flex gap-2 items-center">
            <img src={refreshIcon} alt="refresh-icon" width={24}/>
            Refresh
          </button>
        </div>
        {recipes && (
          <RecipeCardList
            recipes={
              recipes.map((recipe) => {
                return {
                  image: recipe.image,
                  title: recipe.title,
                  description: recipe.description,
                  category: recipe.category,
                  actions: "Read Recipe",
                };
              }) as RecipeCardProps[]
            }
          ></RecipeCardList>
        )}
      </section>
    </div>
  );
//   return (
//     <>
//       <h1 className="bg-primary font-lobster">Landing Page</h1>
//       <p className="font-worksans">Welcome to the Nom Nom app!</p>

//       <Button variant="primary">Submit</Button>
// <Button variant="secondary" loading>Loading</Button>
// <Button variant="danger" disabled>Delete</Button>

// <Input
//   label="Username"
//   placeholder="Enter your username"
//   // value={value}
//   // onChange={handleChange}
//   // error={errorMsg}
// />

// <ReviewCard
//   name="Jane Doe"
//   comment="This recipe was amazing!"
//   rating={4}
// />
//     </>
//   );
}
