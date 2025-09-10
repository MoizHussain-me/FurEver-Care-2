import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const ShopContainer = styled.div`
  padding: 50px;
  text-align: center;
`;

const Shop = () => {
  return (
    <ShopContainer>
      <h1>Our Shop</h1>
      <p>Here you'll find all the products you need for your pets.</p>
      <button>Browse Products</button>
    </ShopContainer>
  );
};

export default Shop;
