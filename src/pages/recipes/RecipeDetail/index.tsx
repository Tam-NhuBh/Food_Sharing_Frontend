import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Rating, Recipe } from "../../../types";
import ReviewCardList from "../../../components/Review/ReviewCardList";
import type { ReviewCardProps } from "../../../components/Review/ReviewCard";
import SearchBar from "../../../components/Search";
import Button from "../../../components/Button";

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
        <p className="font-playfair font-bold text-base text-black mb-2">
          {recipe?.category}
        </p>
        <h2 className="md:text-7xl text-xl font-bold font-playfair mb-3">
          {recipe?.title}
        </h2>
        <p className=" mb-7">
          <span className="text-base">👩‍🍳 </span>
          <span className="text-base font-worksans italic text-gray-600">
            {recipe?.author}
          </span>
        </p>
        <p className="text-base font-worksans text-black">
          {recipe?.longDescription}
        </p>
        <p className="text-base font-worksans text-primary mb-4">
          {recipe?.tags.map((tag, index) => (
            <span key={index} className="text-sm mr-2">
              #{tag}
            </span>
          ))}
        </p>
      </section>

      <section className="relative w-full mx-auto overflow-visible mb-20">
        <img
          src={recipe?.image}
          alt={recipe?.title}
          className="w-full h-140 object-cover mb-4"
        />
        <div className="absolute h-30 bottom-0 left-1/2 px-6 md:px-10 xl:px-90 bg-primary text-white rounded-3xl py-6 -translate-x-1/2 translate-y-1/2">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
          <div className="bg-white px-4 py-7 mb-15">
            <h3 className="text-center font-playfair font-semibold md:text-2xl text-lg mb-4">
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
          <div className="bg-white px-4 py-7 mb-15">
            <h3 className="text-center font-playfair font-semibold md:text-2xl text-lg mb-4">
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
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-20">
          <div className="sm:col-span-3 col-span-1 bg-light-gray px-4 py-7 mb-16">
            <h3 className="text-center font-playfair font-semibold md:text-2xl text-lg mb-4">
              Nutritions
            </h3>

            <div className="grid grid-cols-2 gap-4 mt-4 font-worksans">
              <div className="flex items-center gap-3 bg-yellow-100 p-4 rounded-lg shadow">
                <span className="text-2xl">🔥</span>
                <div>
                  <span className="md:text-base text-lg font-bold">
                    Calories: 
                  </span>
                  <span className="md:text-base text-lg font-semibold">
                    {" "}
                    {recipe?.nutrition.calories}g
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-red-100 p-4 rounded-lg shadow">
                <span className="text-2xl">🥩</span>
                <div>
                  <span className="md:text-base text-lg font-bold">
                    Protein:
                  </span>
                  <span className="md:text-base text-lg font-semibold">
                    {" "}
                    {recipe?.nutrition.protein}g
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-green-100 p-4 rounded-lg shadow">
                <span className="text-2xl">🌾</span>
                <div>
                  <span className="md:text-base text-lg font-bold">
                    Carbs: 
                  </span>
                  <span className="md:text-base text-lg font-semibold">
                    {" "}
                    {recipe?.nutrition.carbs}g
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-purple-100 p-4 rounded-lg shadow">
                <span className="text-2xl">🥥</span>
                <div>
                  <span className="md:text-base text-lg font-bold">Fat: </span>
                  <span className="md:text-base text-lg font-semibold">
                    {" "}
                    {recipe?.nutrition.fat}g
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center col-span-1 bg-primary rounded-4xl mb-16">
            <p className="text-8xl text-white font-playfair">
              {recipe?.rating}
            </p>
            <p className="text-2xl text-white py-6 font-playfair">Rating</p>
          </div>
        </div>

        <h2 className="flex items-center md:text-2xl text-lg font-bold font-playfair mb-4">
          Review <span className="text-primary">Rating</span>
          <Button
            variant="primary"
            className="ml-auto cursor-pointer text-sm rounded-lg py-3"
          >
            Write a Review
          </Button>
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
