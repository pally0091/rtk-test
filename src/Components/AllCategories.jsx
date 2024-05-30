import { useGetCategoriesQuery } from "../Redux/service/Data";

const AllCategories = () => {
  const res = useGetCategoriesQuery();
  const { data, error, isLoading } = res;
  //   console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
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
