import styled from 'styled-components';

export const RecipesListSection = styled.section`
  position: relative;
`;

export const RecipesListContainer = styled.div`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #222;
    padding: 10px;
    transition: background 0.3s linear;

    &:hover {
      background-color: #fbab79;
      background-image: linear-gradient(62deg, #f7ce99 0%, #fbab79 100%);
      color: #444;
    }
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  h2 {
    font-size: 18px;
  }

  span {
    font-size: 12px;
  }
`;

export const RecipesListMsg = styled.div`
  margin-top: 20px;
  text-align: center;
`;
