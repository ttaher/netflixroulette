import React from 'react';
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

export default HomePage;
