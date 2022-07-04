import React from 'react';
import Header from './components/Header/Header';
// import FirstSection from './components/FirstSection/FirstSection';
// import Discover from './components/Discover/Discover';
// import Join from './components/Join/Join'
import { BrowserRouter } from 'react-router-dom';
import Pages from './components/pages';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
