import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Use from './components/Use';
import Aboutme from './components/Aboutme'
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation/>
      <Header/>
      <Aboutme/>
      <Use />
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
