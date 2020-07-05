import styled from 'styled-components';

import { MdChat } from 'react-icons/md';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #1a73e8;
  box-shadow: 5px 15px 25px #0f163d1a;
  position: fixed;
  z-index: 9999;
  right: 60px;
  bottom: 60px;
`;

export const MessageIcon = styled(MdChat)`
  width: 30px;
  height: 30px;
  color: #fff;
`;
