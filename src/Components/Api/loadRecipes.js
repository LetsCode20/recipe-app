export const loadRecipes = async (recipeId, setRecipes) => {
  const res = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}`
  );

  const data = await res.json();

  if (!res.ok) throw new Error(`${data.message} ${res.status}`);

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
  };

  setRecipes([recipeData]);
};

export const loadSearchRecipe = async (search, setRecipesList) => {
  const res = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}&key=50fd228c-f2e7-40f9-82ab-aa0d3ffea4ab`
  );
  const data = await res.json();

  if (!res.ok) throw new Error(`${data.message} ${res.status}`);

  const { recipes } = await data.data;

  setRecipesList(recipes);
};
