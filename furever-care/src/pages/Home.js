import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

const HomeContainer = styled.div`
  padding: 50px;
  text-align: center;
`;

const Button = styled.button`
  background-color: ${theme.secondary};
  padding: 15px 30px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Welcome to Our Pet Shop!</h1>
      <p>Find the best products for your furry friends.</p>
      <Button>Shop Now</Button>
    </HomeContainer>
  );
};

export default Home;
