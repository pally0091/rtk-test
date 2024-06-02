import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
  }),
});
export const categoriesApi = createApi({
  reducerPath: "categories",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/products/categories",
    }),
  }),
});
export const recipesApi = createApi({
  reducerPath: "recipes",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => "/recipes/meal-type/snack",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
export const { useGetCategoriesQuery } = categoriesApi;
export const { useGetRecipesQuery } = recipesApi;
