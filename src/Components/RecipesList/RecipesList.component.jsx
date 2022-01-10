import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

const RecipesList = ({ recipesList, isLoading, handleChangeId }) => {
  return (
    <section>
      {isLoading && <Loading />}
      {recipesList ? (
        recipesList.map((item, idx) => (
          <div key={idx} onClick={() => handleChangeId(item.id)}>
            <Link to={`/${item.id}`}>
              <div>
                <img
                  src={item.image_url}
                  alt={item.title}
                  width='200'
                  height='200'
                />
              </div>
              <div>
                <h2 style={{ width: '200px' }}>{item.title}</h2>
                <p>{item.publisher}</p>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div>
          <p>Start by searching for a recipe.</p>
        </div>
      )}
    </section>
  );
};

export default RecipesList;
