import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from 'react-bootstrap/Button';
import Paragraph from './components/Paragraph';
import Header from './components/Header';
const array = ["HI", "Bye", "Bye Again"]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header  data="Welcome To My First Program" />
    <Paragraph data="HI" />
  </React.StrictMode>
);


// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
