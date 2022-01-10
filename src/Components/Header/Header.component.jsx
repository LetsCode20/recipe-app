import React from 'react';
import * as Bi from 'react-icons/bi';
import * as Fi from 'react-icons/fi';

const Header = ({ search, handleChange, handleSubmit }) => {
  return (
    <header>
      <div>
        <Bi.BiRestaurant />
        <h2>Recipe App</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          placeholder='Search over 1,000,000 recipes...'
          value={search}
          onChange={handleChange}
        />
        <button onSubmit={handleSubmit}>
          Search
          <Fi.FiSearch />
        </button>
      </form>
    </header>
  );
};

export default Header;
