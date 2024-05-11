import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Card from './Card.js';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
);

reportWebVitals();
