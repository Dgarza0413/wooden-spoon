import axios from "axios";

const apiKey = "46a4bca137msh8d35c096a6b18f1p114dfdjsn060845846032";

const searchRecipeUrl =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=1&query=";

export default {
  searchRecipe: value => {
    return axios.get(searchRecipeUrl + value.recipeSearch, {
      headers: {
        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "X-RapidAPI-Key": apiKey,
      },
    });
  },
};
