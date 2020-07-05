import React from 'react';

import { Container } from './styles';

import Banner from '../../assets/hero.webp';

function Hero() {
  return (
    <Container>
      <img src={Banner} alt="" />
    </Container>
  );
}

export default Hero;
