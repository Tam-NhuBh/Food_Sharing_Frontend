import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Rating, Recipe } from "../../../types";
import ReviewCardList from "../../../components/Review/ReviewCardList";
import type { ReviewCardProps } from "../../../components/Review/ReviewCard";
import SearchBar from "../../../components/Search";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe>();
  const [ratings, setRatings] = useState<Rating[]>([]);

  useEffect(() => {
    fetch(`/api/recipes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setRecipe(res as Recipe);
      });
  }, [id]);

  useEffect(() => {
    fetch(`/api/recipes/${id}/ratings`)
      .then((res) => res.json())
      .then((res) => setRatings(res as Rating[]));
  }, [id]);

  return (
    <>
      {/* Search Bar */}
      <SearchBar />

      {/* Recipe Part */}
      <section className="px-6 md:px-20 xl:px-32 bg-white pt-8">
        <h2 className="md:text-7xl text-xl font-bold font-playfair mb-3">
          {recipe?.title}
        </h2>
        <p className="font-worksans italic text-gray-600 mb-7">
          👩‍🍳 {recipe?.author}
        </p>
        <p className="font-worksans text-black mb-4">
          {recipe?.longDescription}
        </p>
      </section>

      <section className="relative w-full max-w-7xl mx-auto overflow-visible">
        <img
          src={recipe?.image}
          alt={recipe?.title}
          className="w-full h-auto object-cover mb-4"
        />
        <div className="absolute bottom-0 left-1/2 px-6 md:px-20 xl:px-32 bg-primary text-white rounded-lg py-6 -translate-x-1/2 translate-y-1/2">
        <div className="grid grid-cols-2 font-worksans font-medium md:text-lg text-sm">
          <div className="flex flex-col items-center">
            <p className="font-bold">Serving</p>
            <p>{recipe?.servings}</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-bold">Cooking Time</p>
            <p>{recipe?.cookingTime}</p>
          </div>
          </div>

          {/* <div className="flex flex-col">
      <p>Difficulty</p>
      <p>{recipe?.difficulty}</p>
    </div> */}
        </div>
      </section>
      <section className="px-6 md:px-20 xl:px-32 bg-light-gray pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4">
            <h3 className="font-playfair font-semibold md:text-2xl text-lg">
              Ingredients
            </h3>
            <ul className="list-disc list-inside mt-2">
              {recipe?.ingredients.map((ingredient, index) => (
                <li key={index} className="font-worksans text-black">
                  {ingredient.amount} {ingredient.unit.toLowerCase()}{" "}
                  {ingredient.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-4">
            <h3 className="font-playfair font-semibold md:text-2xl text-lg">
              Instructions
            </h3>
            <ul className="list-decimal list-inside mt-2">
              {recipe?.steps.map((step, index) => (
                <li key={index} className="font-worksans text-black">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 xl:px-32 mt-8 pb-8">
        <h2 className="md:text-2xl text-lg font-bold font-playfair mb-4">
          Review <span className="text-primary">Rating</span>
        </h2>

        {ratings.length > 0 && (
          <ReviewCardList
            reviews={ratings.map(
              (rating): ReviewCardProps => ({
                //id: rating.id,
                user: rating.user,
                comment: rating.comment,
                rating: rating.rating,
              })
            )}
          />
        )}
      </section>
    </>
  );
}
