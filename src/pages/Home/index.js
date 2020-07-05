import React from 'react';

import Header from '../../components/Header';
import PaymentList from '../../components/PaymentList';
import Hero from '../../components/Hero';
import WhatsappIcon from '../../components/Whatsapp';
import Message from '../../components/Message';
import CardBoard from '../../components/CardBoard';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <PaymentList />
      <CardBoard />
      <WhatsappIcon />
      <Message />
    </>
  );
};

export default Home;
