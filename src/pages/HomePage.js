import React from 'react';
import { hot } from 'react-hot-loader';
import Header from '../components/Header.js';
import Searchresult from '../components/Searchresult.js';
import '../resources/homepage.css';
function HomePage() {
  return (
    <div className="App">
      <Header />
      <Searchresult />
    </div>
  );
}

export default hot(module)(HomePage);
