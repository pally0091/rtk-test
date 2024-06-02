import "./App.css";
import AllCategories from "./Components/AllCategories";
import AllRecipe from "./Components/AllRecipe";
import AllProducts from "./Components/AllProducts";

function App() {
  return (
    <>
      <h1>App</h1>
      <div
        style={{
          display: "flex",
          gap: "100px",
          justifyContent: "space-between",
          padding: "25px",
          border: "1px solid black",
          margin: "auto",
        }}
      >
        <AllCategories />
        <AllProducts />
        <AllRecipe />
      </div>
    </>
  );
}

export default App;
