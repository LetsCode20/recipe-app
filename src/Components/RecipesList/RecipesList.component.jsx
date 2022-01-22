import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import {
  RecipesListContainer,
  RecipesListMsg,
  RecipesListSection,
} from './RecipesList.style';

const RecipesList = ({ recipesList, isLoading, handleChangeId }) => {
  return (
    <RecipesListSection>
      {/* Loading */}
      {isLoading && <Loading />}

      {/* Recipes List */}
      {recipesList.length ? (
        recipesList.map((item, idx) => (
          <RecipesListContainer
            key={idx}
            onClick={() => handleChangeId(item.id)}
          >
            <Link to={`/${item.id}`}>
              <div>
                <img src={item.image_url} alt={item.title} />
              </div>
              <div>
                <h2>{item.title}</h2>
                <span>{item.publisher}</span>
              </div>
            </Link>
          </RecipesListContainer>
        ))
      ) : (
        <RecipesListMsg>
          <p>Start by searching for a recipe.</p>
        </RecipesListMsg>
      )}
    </RecipesListSection>
  );
};

export default RecipesList;
