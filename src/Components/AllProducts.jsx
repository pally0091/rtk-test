import { useGetProductsQuery } from "../Redux/service/Data";

const AllProducts = () => {
  const { data, error, isLoading, isError } = useGetProductsQuery();
  //   console.log(data, error, isLoading);

  return (
    <div>
      {isLoading ? (
        <h5>Loading...</h5>
      ) : isError ? (
        <h5>Error: {error.message}</h5>
      ) : (
        <>
          <h5>Found products {data.products.length}</h5>
          <ul style={{ width: "500px", textAlign: "left", margin: "auto" }}>
            {data.products.map((product) => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default AllProducts;
