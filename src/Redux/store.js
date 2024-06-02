import { configureStore } from "@reduxjs/toolkit";
import { categoriesApi, productsApi, recipesApi } from "./service/Data";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [recipesApi.reducerPath]: recipesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      categoriesApi.middleware,
      recipesApi.middleware
    ),
});
setupListeners(store.dispatch);
