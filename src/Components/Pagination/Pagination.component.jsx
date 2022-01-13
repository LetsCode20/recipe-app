import React from 'react';

const Pagination = ({ recipesPerPage, totalRecipes, paginate }) => {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(totalRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <button onClick={() => paginate(pageNumber)}>{pageNumber}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
