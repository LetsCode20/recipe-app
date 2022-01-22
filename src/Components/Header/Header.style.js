import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
`;

export const HeaderTitle = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #222;

  svg {
    font-size: 20px;
    margin-right: 10px;
    color: #fff;
    background-color: orange;
    border-radius: 50%;
    padding: 5px;
  }
`;

export const HeaderForm = styled.form`
  display: flex;
  align-items: center;

  input {
    background: none;
    padding: 10px 20px;
    border: 1px solid #ffa500;
    box-shadow: 2px 2px 10px 0px rgba(255, 165, 0, 0.3);
    -webkit-box-shadow: 2px 2px 10px 0px rgba(255, 165, 0, 0.3);
    -moz-box-shadow: 2px 2px 10px 0px rgba(255, 165, 0, 0.3);

    ::placeholder {
      margin-right: -10px;
    }
  }

  button {
    padding: 10px;
    background: none;
    border: none;

    svg {
      margin-right: -45px;
      margin-top: 2px;
      color: #ffa500;
    }
  }
`;
