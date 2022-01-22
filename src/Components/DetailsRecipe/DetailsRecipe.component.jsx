import { Fraction } from 'fractional';
import React from 'react';
import * as Ai from 'react-icons/ai';
import * as Bs from 'react-icons/bs';
import Loading from '../Loading/Loading';

const DetailsRecipe = ({ recipes, isLoading }) => {
  return (
    <section>
      {isLoading && <Loading />}
      {recipes.map((recipe, idx) => (
        <div key={idx}>
          {/* Recipe Header */}
          <figure>
            <img
              src={recipe.image}
              alt={recipe.title}
              width='200'
              height='200'
            />
            <figcaption>{recipe.title}</figcaption>
          </figure>

          {/* Cooking / Serving Recipe */}
          <div>
            <div>
              <div>
                <Ai.AiOutlineClockCircle />
                {recipe.cookingTime} MINUTES
              </div>
              <div>
                <Bs.BsPeople />
                {recipe.servings} SERVING
              </div>
              <div>
                <Ai.AiOutlineMinusCircle />
                <Bs.BsPlusCircle />
              </div>
            </div>
          </div>

          {/* Recipe Ingredients */}
          <div>
            <h2>RECIPE INGREDIENTS</h2>

            <ul>
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx}>
                  <Bs.BsFillCheckCircleFill />
                  <div>
                    {ing.quantity ? new Fraction(ing.quantity).toString() : ''}
                  </div>
                  <div>
                    <span>{ing.unit}</span>
                    {ing.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* How To Cook */}
          <div>
            <h2>HOW TO COOK IT</h2>
            <p>
              This recipe was carefully designed and tested by{' '}
              <b>{recipe.publisher}</b>. Please check out directions at their
              website.
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default DetailsRecipe;
