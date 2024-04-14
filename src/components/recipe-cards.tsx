import { useEffect, useState } from "react";
import { Card } from "./card";
import axios from "axios";

interface Recipe {
  id: number;
  image: string;
  title: string;
  summary: string;
}

export const RecipeCards = () => {
  const [randomRecipes, setRandomRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/random?number=12&apiKey=024fabe782cd49cca228066b00d6f529`
        );
        const data = await res.data;
        setRandomRecipes(data.recipes);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  console.log(randomRecipes);

  return (
    <div className="grid grid-cols-3 gap-x-10 max-w-7xl mx-auto mt-10 gap-y-5 mb-10">
      {randomRecipes &&
        randomRecipes.map((recipe) => (
          <Card
            key={recipe.id}
            id={recipe.id}
            image={recipe.image}
            title={recipe.title}
            summary={recipe.summary}
          />
        ))}
    </div>
  );
};
