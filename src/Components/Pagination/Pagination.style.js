import styled from 'styled-components';

export const PaginationNav = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  li {
    margin: 10px;
  }

  button {
    cursor: pointer;
    padding: 10px;
    background: #fff;
    border: none;
  }
`;
