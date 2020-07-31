import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
`;

export const Header = styled.header`
  background: #eaeaea;
  padding: 15px 0;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #000000;
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

export const ItemContainer = styled.div`
  width: 100%;

  a {
    text-decoration: none;
    background: #eaeaea;
    border-radius: 8px;
    display: flex;
    width: 100%;
    padding: 10px 0;
    justify-content: center;
    align-items: center;
    transition: opacity 0.2s;

    h2 {
      color: #000000;
    }

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
`;