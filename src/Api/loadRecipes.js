import { getJSON } from '../helpers/getJSON.js';
import { API_URL, API_KEY } from '../helpers/controller';

export const loadRecipes = async (recipeId, setRecipes) => {
  const data = await getJSON(`${API_URL}/${recipeId}`);

  const { recipe } = await data.data;

  const recipeData = {
    id: recipe.id,
    image: recipe.image_url,
    sourceUrl: recipe.source_url,
    title: recipe.title,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    publisher: recipe.publisher,
    ingredients: recipe.ingredients,
    isFavorite: false,
  };

  setRecipes([recipeData]);
};

export const loadSearchRecipe = async (search, setRecipesList) => {
  const data = await getJSON(`${API_URL}?search=${search}&key=${API_KEY}`);

  const { recipes } = await data.data;

  setRecipesList(recipes);
};
