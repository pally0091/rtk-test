import { useGetRecipesQuery } from "../Redux/service/Data";

const AllRecipe = () => {
  const tag = "Asian";
  const { data, isError, isLoading, error } = useGetRecipesQuery(tag);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <p>
        All Recipes from <b>{tag}</b>
      </p>
      {data.recipes.map((rec, index) => (
        <p key={index}>{rec.name}</p>
      ))}
    </div>
  );
};

export default AllRecipe;
