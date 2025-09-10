import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './theme';
import styled from 'styled-components';

// Components (you will build these later)
import Home from './pages/Home';
import Shop from './pages/Shop';

// Styled Components (For layout and structure)
const Header = styled.header`
  background-color: ${theme.primary};
  padding: 20px;
  text-align: center;
  color: white;
  font-size: 2rem;
`;

const Footer = styled.footer`
  background-color: ${theme.primary};
  color: white;
  padding: 10px;
  text-align: center;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header>
        Pet Shop
      </Header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </main>
      <Footer>
        © 2025 Pet Shop. All rights reserved.
      </Footer>
    </Router>
  );
}

export default App;
