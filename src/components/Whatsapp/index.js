import React from 'react';

import { Link } from 'react-router-dom';

import { Container, WhatsappIcon } from './styles';

function Whatsapp() {
  return (
    <Link to="/chat">
      <Container>
        <WhatsappIcon />
      </Container>
    </Link>
  );
}

export default Whatsapp;
