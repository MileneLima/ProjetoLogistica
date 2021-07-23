import styled from 'styled-components';
import { shade } from 'polished';

import missy from "../../assets/missy.jpg"

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-itens: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;

      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2,'#f4ede8')}
      }
    }
  }
  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')}
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${missy}) no-repeat center;
  background-size: cover;
`;
