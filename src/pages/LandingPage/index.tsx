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
        <h2 className="md:text-[2.5rem] text-[1.7rem] font-bold font-playfair mb-5">
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
      <section className="flex flex-col items-center py-9 bg-cream gap-4 text-center">
        <p className="font-extrabold text-primary md:text-4xl text-2xl">
          Share Your Story, Share Your Dish
        </p>
        <p className="font-medium md:text-[1.25rem] text-[1rem] px-3">
          Every dish has a story - what's yours? Share your favorite recipes
          with our community of home cooks and inspire others.
        </p>
        <Button
          variant="primary"
          className="cursor-pointer text-[.8rem] md:text-[1rem]"
        >
          SHARE YOUR RECIPE
        </Button>
      </section>
      <section className="px-6 md:px-20 xl:px-32">
        <div className="flex justify-between items-center mb-5">
          <h2 className="md:text-[2.5rem] text-[1.7rem] font-bold font-playfair">
            Random <span className="text-primary">Dishes</span>
          </h2>
          <button className="bg-cream py-2 px-4 cursor-pointer font-medium flex gap-2 items-center md:text-[1rem] text-[.9rem]">
            <img src={refreshIcon} alt="refresh-icon" className="md:w-[1.5rem] w-[1rem]" />
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
