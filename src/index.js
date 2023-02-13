import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from 'react-bootstrap/Button';
import Paragraph from './components/Paragraph';
import Header from './components/Header';
import Table from './components/Table';
const array = ["HI", "Bye", "Bye Again"]
const headers=["Name","Roll Number"]
const rowData=["Mazhar",542]
const headers1=["City Name","Population"]
const rowData1=["Hyderabad","1.2 Crores"]
const dynamicHeaders=["First Name","Last Name","City","State","Zip","Phone Number","Email"]
// [["Mazhar","Ali","Hyderabad","Telanganan","5000008","8125629427","chksjkcd"],[]]
//[ [ ],[ ].[ ]]
const dynamicData=[
  {
    "firstName": "Mazhar",
    "lastName": "Ali",
    "city": "Hyderabad",
    "state": "Telangana",
    "zip": "500008",
    "phoneNumber": "8125629427",
    "email": "syedmazharali742@gmail.com"
  },
  {
    "firstName": "Prashik",
    "lastName": "Kamble",
    "city": "akola",
    "state": "Maharastra",
    "zip": "444001",
    "phoneNumber": "8806187589",
    "email": "prashikkamble@gmail.com"
  },
  {
    "firstName": "Ratnadip",
    "lastName": "Bharde",
    "city": "amaravathi",
    "state": "Maharastra",
    "zip": "444601",
    "phoneNumber": "8983253934",
    "email": "ratnadipbharde@gmail.com"
  },
  {
    "firstName": "Priyanka",
    "lastName": "Shinde",
    "city": "Nasik",
    "state": "Maharastra",
    "zip": "420003",
    "phoneNumber": "9518905320",
    "email": "priyankashinde@gmail.com"
  },
  {
    "firstName": "Jaison",
    "lastName": "Adidela",
    "city": "Hyderabad",
    "state": "Telangana",
    "zip": "500001",
    "phoneNumber": "7013770364",
    "email": "jaisonadidela@gmail.com"
  }
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header  data="Welcome To My First Program" />
    <Paragraph data="HI" />
    <Paragraph data="HI1" />
    <Paragraph data="HI2" />
    <Table  headersData={headers} rowsData={rowData} />
    <Table  headersData={headers1} rowsData={rowData1} />
    <Table headersData={dynamicHeaders} rowsData={dynamicData} />
  </React.StrictMode>
);


// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
