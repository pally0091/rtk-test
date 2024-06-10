import { useGetCategoriesQuery } from "../Redux/service/Data";

const AllCategories = () => {
  const { data, error, isLoading, isError } = useGetCategoriesQuery();
  //   console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <h5>Error : {error.message}</h5>;
  }
  return (
    <div>
      <p>All Category Name lists</p>
      {data.map((cat, index) => (
        <p key={index}>{cat.name}</p>
      ))}
    </div>
  );
};

export default AllCategories;
