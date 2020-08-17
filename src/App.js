import React from 'react';
import logo from './logo.svg';
import Searchresult from './components/Searchresult.js';
import Header from './components/Header.js';
import './App.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <Searchresult/>
    </div>
  );
}

export default App;
