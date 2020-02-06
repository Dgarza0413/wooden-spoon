import React, {useEffect} from "react";

import {Grid} from "@material-ui/core";
import RecipeList from "../components/List/RecipeList";

//hooks
// import useInputChange from "../hooks/useInputChange";

const search = () => {
  // const [value, handleInputChange] = useInputChange();
  // const [recipeList, setRecipeList] = useState([]);

  const handleSearch = e => {
    e.preventDefault();

    // axios
    //   .get(
    //     "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=" +
    //     value.recipeSearch +
    //     "&number=1",
    //     {
    //       headers: {
    //         "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    //         "X-RapidAPI-Key": apiKey,
    //       },
    //     }
    //   )
    // .then(res => setRecipeList(res.data.results));

    // axios.get('https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=dJzH19XDqc7edkAbkGq3I1y1cuwbYzPAp3EY5AcA&location=Denver+CO')
  };

  useEffect(() => {
    // api()
  }, []);

  return (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={12}>
        <form onSubmit={handleSearch}>
          <label>Food Search</label>
          <input
            // onChange={handleInputChange}
            name="recipeSearch"
            type="string"
          />
          <button>Search</button>
        </form>
      </Grid>
      <RecipeList
      // recipeList={recipeList}
      />
    </Grid>
  );
};

export default search;
