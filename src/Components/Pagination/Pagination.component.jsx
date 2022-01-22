import React from 'react';
import { PaginationNav } from './Pagination.style';

const Pagination = ({ recipesPerPage, totalRecipes, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationNav>
      <ul>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <button onClick={() => paginate(pageNumber)}>{pageNumber}</button>
          </li>
        ))}
      </ul>
    </PaginationNav>
  );
};

export default Pagination;
