import React from 'react';
import * as Bi from 'react-icons/bi';
import * as Fi from 'react-icons/fi';
import { HeaderContainer, HeaderForm, HeaderTitle } from './Header.style';

const Header = ({ search, handleChange, handleSubmit }) => {
  return (
    <HeaderContainer>
      <HeaderTitle to='/'>
        <Bi.BiRestaurant />
        <h2>Recipe App</h2>
      </HeaderTitle>

      <HeaderForm onSubmit={handleSubmit}>
        <button onSubmit={handleSubmit}>
          <Fi.FiSearch />
        </button>

        <input
          type='text'
          name='search'
          placeholder='Search over 1,000,000 recipes...'
          value={search}
          onChange={handleChange}
        />
      </HeaderForm>
    </HeaderContainer>
  );
};

export default Header;
