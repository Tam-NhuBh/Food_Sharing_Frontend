import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Rating, Recipe } from "../../../types";
import ReviewCardList from "../../../components/Review/ReviewCardList";
import type { ReviewCardProps } from "../../../components/Review/ReviewCard";
import Input from "../../../components/Input";
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
      <section className="px-6 md:px-20 xl:px-32 bg-light-gray">
        <div className="flex flex-row py-4">
          <Input
            placeholder="Search recipes..."
            className="w-full bg-white border-0 py-3"
          />
          <Button variant="primary" className="rounded-sm py-3">
            Search
          </Button>
        </div>
      </section>

      {/* Recipe Part */}
      <section className="px-6 md:px-20 xl:px-32 bg-white pt-8">
        <h2 className="md:text-3xl text-xl font-bold font-playfair mb-3">
          {recipe?.title}
        </h2>
        <p className="font-worksans italic text-gray-600 mb-4">
          {recipe?.author}
        </p>
        <p className="font-worksans text-black font-bold mb-2">
          {recipe?.description}
        </p>
        <p className="font-worksans text-black mb-4">
          {recipe?.longDescription}
        </p>
      </section>

      <section>
        <img
          src={recipe?.image}
          alt={recipe?.title}
          className="w-full h-auto object-cover mb-4"
        />
      </section>

<section className="px-6 md:px-20 xl:px-32 bg-primary text-white pt-8">
  <div className="grid grid-cols-2 text-center font-worksans font-medium md:text-lg text-sm">
    <div className="flex flex-col">
      <p>Serving</p>
      <p>{recipe?.servings}</p>
    </div>

    <div className="flex flex-col">
      <p>Cooking Time</p>
      <p>{recipe?.cookingTime}</p>
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
