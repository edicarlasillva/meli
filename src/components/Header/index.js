import React from 'react';

import {
  Container,
  HeaderTop,
  SearchBar,
  SearchIcon,
  HeaderBottom,
  Menu,
  Cart,
  Location,
  LocationIcon,
  Arrow,
} from './styles';

import Logo from '../../assets/logo.png';

function Header() {
  return (
    <Container>
      <HeaderTop>
        <img src={Logo} alt="Meli" />
        <SearchBar>
          <SearchIcon />
          <input
            type="text"
            placeholder="Buscar produtos, marcas e muito mais..."
          />
        </SearchBar>
        <Menu />
        <Cart />
      </HeaderTop>
      <HeaderBottom>
        <Location>
          <LocationIcon />
          <span>Informe seu CEP</span>
        </Location>
        <Arrow />
      </HeaderBottom>
    </Container>
  );
}

export default Header;
