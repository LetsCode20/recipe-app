import { Fraction } from 'fractional';
import React from 'react';
import * as Ai from 'react-icons/ai';
import * as Bs from 'react-icons/bs';
import Loading from '../Loading/Loading';
import {
  DetailsRecipeFigure,
  DetailsRecipeSection,
  DetailsRecipeImage,
  DetailsRecipeServing,
  DetailsRecipeIngredients,
  DetailsRecipeCook,
} from './DetailsRecipe.style';

const DetailsRecipe = ({ recipes, isLoading }) => {
  return (
    <DetailsRecipeSection>
      {isLoading && <Loading />}
      {recipes.map((recipe, idx) => (
        <div key={idx}>
          {/* Recipe Header */}

          <DetailsRecipeFigure>
            <img src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
          </DetailsRecipeFigure>

          {/* Cooking / Serving Recipe */}
          <DetailsRecipeServing>
            <div>
              <Ai.AiOutlineClockCircle />
              {recipe.cookingTime} MINUTES
            </div>

            <div>
              <Bs.BsPeople />
              {recipe.servings} SERVING
            </div>
          </DetailsRecipeServing>

          {/* Recipe Ingredients */}
          <DetailsRecipeIngredients>
            <h3>RECIPE INGREDIENTS</h3>

            <ul>
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx}>
                  <Bs.BsFillCheckCircleFill />
                  {ing.quantity ? (
                    <div>{new Fraction(ing.quantity).toString()}</div>
                  ) : (
                    ''
                  )}
                  <div>
                    <span>{ing.unit}</span>
                    {ing.description}
                  </div>
                </li>
              ))}
            </ul>
          </DetailsRecipeIngredients>

          {/* How To Cook */}
          <DetailsRecipeCook>
            <h2>HOW TO COOK IT</h2>
            <p>
              This recipe was carefully designed and tested by{' '}
              <b>{recipe.publisher}</b>. Please check out directions at their
              website.
            </p>
          </DetailsRecipeCook>
        </div>
      ))}
    </DetailsRecipeSection>
  );
};

export default DetailsRecipe;
