import styled from 'styled-components';

import { FaWhatsapp } from 'react-icons/fa';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #18c139;
  box-shadow: 5px 15px 25px #0f163d1a;
  position: fixed;
  z-index: 9999;
  right: 60px;
  bottom: 140px;
`;

export const WhatsappIcon = styled(FaWhatsapp)`
  width: 30px;
  height: 30px;
  color: #fff;
`;
