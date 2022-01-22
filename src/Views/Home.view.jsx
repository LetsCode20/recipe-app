import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { loadRecipes, loadSearchRecipe } from '../Api/loadRecipes';

import DetailsRecipe from '../Components/DetailsRecipe/DetailsRecipe.component';
import RecipesList from '../Components/RecipesList/RecipesList.component';
import Header from '../Components/Header/Header.component';
import Pagination from '../Components/Pagination/Pagination.component';
import { RecipesListPage } from './Home.styled';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipeId, setRecipesId] = useState('');
  const [recipesList, setRecipesList] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoadingRecipes, setIsLoadingRecipes] = useState(false);
  const [isLoadingRecipesList, setIsLoadingRecipesList] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(10);

  // Get Current Recipes
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipesList.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get the recipe id
  const handleChangeId = (id) => {
    setRecipesId(id);
  };

  // Get the recipes by search
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // Get the recipes by submit search
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search.length) {
      return;
    }

    setSearch(e.target.value);
    setSearch('');
  };

  // Load Recipes by id
  const showRecipes = async () => {
    if (!recipeId.length) return;

    try {
      setIsLoadingRecipes(true);

      await loadRecipes(recipeId, setRecipes);

      setIsLoadingRecipes(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    showRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipeId]);

  // Load Search Recipes
  const searchRecipe = async () => {
    try {
      if (!search.length) return;
      setIsLoadingRecipesList(true);

      await loadSearchRecipe(search, setRecipesList);

      setIsLoadingRecipesList(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <>
      <Header
        search={search}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <RecipesListPage>
        <RecipesList
          recipesList={currentRecipes}
          isLoading={isLoadingRecipes}
          handleChangeId={handleChangeId}
        />

        <Pagination
          recipesPerPage={recipesPerPage}
          totalRecipes={recipesList.length}
          paginate={paginate}
        />
      </RecipesListPage>

      <Routes>
        <Route path='/' element={<></>} />

        <Route
          path='/:recipeId'
          element={
            <DetailsRecipe
              recipes={recipes}
              isLoading={isLoadingRecipesList}
              recId={recipeId}
            />
          }
        />
      </Routes>
    </>
  );
};

export default Home;
