import React, { useEffect } from 'react';

import { IoIosGlobe, IoIosArrowDown } from 'react-icons/io'

import Header from './components/Header';

import { 
  Container,
  DismissibleBanner,
  Content,
  Section,
  Carrossel,
} from './styles';

const DigitalHouseClone = () => {
  useEffect(() => {
    document.title = 'Digital House Clone | Testes';
    document.body.style.backgroundColor = '#e6e7e8'
  }, []);
  return (
    <Container>
      <Header />

      <DismissibleBanner>
        <span>Transforme sua carreira onde estiver. Cursos 100% remotos com aulas ao vivo.</span>
      </DismissibleBanner>

      <Content>
        <Section>
          <Carrossel>

          </Carrossel>
        </Section>

        <Section>
          <h2>Conheça nossos cursos</h2>
          <nav></nav>
        </Section>
      </Content>
    </Container>
  );
}

export default DigitalHouseClone;