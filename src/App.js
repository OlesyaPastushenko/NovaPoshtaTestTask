import './App.css';
import env from "react-dotenv";
import axios from 'axios';
import {Route, Routes} from "react-router-dom"
import CheckTTN from './pages/CheckTTN/CheckTTN';
import List from './pages/List/List';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react';


function App() {
  
  const [status, setStatus] = useState('')

  const fetchData = async()=>{
  
  await axios.post('https://api.novaposhta.ua/v2.0/json/', {
    "apiKey": env.API_KEY,
    "modelName": "TrackingDocument",
    "calledMethod": "getStatusDocuments",
    "methodProperties": {
      "Documents": [
        {
          "DocumentNumber": "20400048799001"
        }
      ]
    }
  })
  .then(function (response) {
    setStatus(response.data.data[0].Status);
  })
  .catch(function (error) {
    console.log(error);
  });
  } 
  console.log(status)
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<CheckTTN/>}/>
      <Route path="/list" element={<List/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </>
  );
}

export default App;
