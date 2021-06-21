import React, { memo } from 'react';

import { Container } from './styles';

import NavBar from './Containers/NavBar';
import Header from './Containers/Header';
import Footer from './Containers/Footer';

function Home() {
  return (
    <Container id="page-top">
      <NavBar />
      <Header />
      <Footer />
    </Container>
  );
}

export default memo(Home);
