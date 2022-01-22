import styled from 'styled-components';

export const RecipesListSection = styled.section`
  /* padding: 10px 0;
  margin-left: 40px;
  width: 20vw;
background: #ffa500; */
`;

export const RecipesListContainer = styled.div`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #222;
    padding: 10px;
    transition: background 0.3s linear, color 0.3s linear;

    &:hover {
      background: #ff7500;
      color: #fff;
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
