// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Counter from './components/Counter';
import { PrintName } from './components/PrintName';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter />
    <PrintName />
  </React.StrictMode>
);



reportWebVitals();
