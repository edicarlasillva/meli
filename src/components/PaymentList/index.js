import React from 'react';

import { Container } from './styles';

import PaymentItem from '../PaymentItem';

import Card from '../../assets/credit-card.svg';
import PaymentAgreement from '../../assets/payment-agreement.svg';
import ViewMore from '../../assets/view-more.svg';

function PaymentList() {
  return (
    <Container>
      <PaymentItem
        title="Até 12 vezes sem juros"
        linkName="Ver mais"
        icon={Card}
      />

      <PaymentItem
        title="À vista no boleto bancário"
        linkName="Ver mais"
        icon={PaymentAgreement}
      />

      <PaymentItem
        title="Mais formas de pagamento"
        linkName="Ver todos"
        icon={ViewMore}
      />
    </Container>
  );
}

export default PaymentList;
