import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Body1 from './components/Body1';
import Aboutme from './components/Aboutme';

function App() {
  return (
    <div>
      <Navigation/>
      <Header/>
      <Aboutme/>
      <Body1/>
    </div>
  );
}

export default App;
