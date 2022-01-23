import styled from 'styled-components';

export const DetailsRecipeSection = styled.div`
  padding: 20px;
  width: 50vw;
  margin: 0 auto;
`;

export const DetailsRecipeFigure = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    overflow: hidden;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 250px;
    background-color: rgba(251, 171, 126, 0.5);
  }

  h2 {
    margin: 10px 0;
    line-height: 1.4;
  }
`;

export const DetailsRecipeServing = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;

  div {
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 5px;
  }
`;

export const DetailsRecipeIngredients = styled.div`
  h3 {
    text-align: center;
    color: #eee;
  }

  ul {
    list-style: none;

    li {
      margin: 20px 0;
      display: flex;

      svg {
        margin-right: 10px;
        color: #fff;
      }

      div {
        margin-right: 10px;
      }
    }
  }
`;

export const DetailsRecipeCook = styled.div`
  h2 {
    text-align: center;
    color: #fff;
    margin-bottom: 20px;
  }
`;
