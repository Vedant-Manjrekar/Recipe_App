import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Filters, { INITIAL_STATE, filterReducer } from "./components/Filters";
import SearchBar from "./components/SearchBar";
import { Button } from "@chakra-ui/react";
import Intolerance from "./components/Filter";
import Filter from "./components/Filter";

function App() {
  const [reducerState, dispatch] = useReducer(filterReducer, INITIAL_STATE);

  const API_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=5175a8d61f164782acce649273330f3c&includeIngredients=${
    reducerState.INGREDIENTS
  }&diet=${reducerState.DIET}|${
    reducerState.VEG && "Vegetarian"
  }&addRecipeInformation=true&intolerances=${
    reducerState.INTOLARANCES
  }&excludeCuisine=${reducerState.A_CUISINE}`;

  async function fetchData() {
    const api_data = await fetch(API_URL);
    const data = await api_data.json();
    console.log(data);
  }

  useEffect(() => {
    console.log(reducerState);
  }, [reducerState]);

  return (
    <div className='App'>
      <div className='search'>
        <SearchBar dispatch={dispatch} />
        <Button h={"7vh"} onClick={fetchData}>
          Search
        </Button>
      </div>
      <Filters dispatch={dispatch} reducerState={reducerState} />
      <Filter
        tags={reducerState.INTOLARANCE}
        tagName='INTOLERANCE'
        type='INTOLERANCE'
        dispatch={dispatch}
      />
      <Filter
        tags={reducerState.A_CUISINE}
        tagName='CUISINES TO AVOID'
        type='A_CUISINE'
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
