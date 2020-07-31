import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { Container, Header, HeaderContent, Content, ItemContainer } from './styles';

const Home = () => {

  useEffect(() => {
    document.title = 'Home | Testes';
    document.body.style.backgroundColor = ''
  }, []);
  
  return (
    <Container>
      <Header>
        <HeaderContent>
          <h1>Testes</h1>
        </HeaderContent>
      </Header>
      <Content>
        <ItemContainer>
          <Link to="/digital-house-clone">
            <h2>Digital House Clone</h2>
          </Link>
        </ItemContainer>
      </Content>
    </Container>
  );
}


export default Home;