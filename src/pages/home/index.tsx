import React from 'react';
import { Container } from './styles';
import Header from '../../components/header';
import Start from '../../components/start';
import About from '../../components/about';
import Skills from '../../components/skills';
import Portfolio from '../../components/portfolio';
import Journey from '../../components/journey';
import Contact from '../../components/contact';

function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Start />
        <About />
        <Skills />
        <Portfolio />
        <Journey />
        <Contact />
      </main>
    </Container>
  );
}

export default Home;
