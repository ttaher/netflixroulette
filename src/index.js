import React from 'react';
import { render } from 'react-dom';
import './resources/index.css';
import HomePage from './pages/HomePage.js';

render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById("root")
)