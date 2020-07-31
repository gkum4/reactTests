import styled from 'styled-components';

export const Component = styled.header`
  display: flex;
  background: #fff;
  align-items: center;
  justify-content: space-between;
  padding: 5px 50px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  img {
    height: 45px;
  }

  nav {
    margin-left: 30px;
    display: flex;
    align-items: center;
  }

  a {
    font-size: 16px;
    color: #000000;
    font-weight: bold;
    text-decoration: none;
    display: flex;

    svg {
      position: relative;
      top: 2px;
    }
  }

  a + a {
    margin-left: 15px
  }
`;