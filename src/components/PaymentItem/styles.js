import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const PaymentIcon = styled.div`
  width: 50px;
  height: 50px;

  margin-right: 10px;
`;

export const PaymentContent = styled.div`
  h3 {
    font-size: 18px;
    line-height: 28px;
    white-space: nowrap;
    font-weight: 400;
  }

  span {
    color: #999;
    font-size: 14px;
  }

  .linkName {
    color: #1a73e8;
    font-size: 14px;
  }
`;
