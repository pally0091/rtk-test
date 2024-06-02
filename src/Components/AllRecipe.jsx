import { useGetRecipesQuery } from "../Redux/service/Data";

const AllRecipe = () => {
  const res = useGetRecipesQuery();
  const { data, isError, isLoading, error } = res;

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <p>All Recipes</p>
      {data.recipes.map((rec, index) => (
        <p key={index}>{rec.name}</p>
      ))}
    </div>
  );
};

export default AllRecipe;
