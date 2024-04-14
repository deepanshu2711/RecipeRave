import { Card } from "./card";

export const RecipeCards = () => {
  return (
    <div className="grid grid-cols-3 gap-x-10 max-w-7xl mx-auto mt-10 gap-y-5 mb-10">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
