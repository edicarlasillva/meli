import React from 'react';

import { Container, PaymentIcon, PaymentContent } from './styles';

function PaymentItem({ title, subtitle, icon, linkName }) {
  return (
    <Container>
      <PaymentIcon>
        <img src={icon} alt="" />
      </PaymentIcon>
      <PaymentContent>
        <div>
          <h3>{title}</h3>
          <span>{subtitle}</span>
        </div>
        <div className="linkName">{linkName}</div>
      </PaymentContent>
    </Container>
  );
}

export default PaymentItem;
