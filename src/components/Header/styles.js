import styled from 'styled-components';

import {
  MdSearch,
  MdShoppingCart,
  MdMenu,
  MdPinDrop,
  MdKeyboardArrowRight,
} from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 90px;
  background-color: #fff159;
`;

export const HeaderTop = styled.header`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 7px;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);

  img {
    width: 44px;
    height: 32px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  width: 100%;
  margin-left: 20px;

  input {
    width: 100%;
    border: 0;
    outline: 0;
    color: #aaa;

    &::placeholder {
      color: #bbb;
    }
  }
`;

export const SearchIcon = styled(MdSearch)`
  width: 20px;
  height: 20px;
  color: #aaa;
  margin-right: 10px;
`;

export const Menu = styled(MdMenu)`
  width: 30px;
  height: 30px;
  margin-left: 20px;
`;

export const Cart = styled(MdShoppingCart)`
  width: 30px;
  height: 30px;
  margin-left: 20px;
`;

export const HeaderBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 7px;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  color: #736c28;
  font-size: 13px;
`;

export const LocationIcon = styled(MdPinDrop)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const Arrow = styled(MdKeyboardArrowRight)`
  width: 20px;
  height: 20px;
  color: #c1b74d;
`;
