import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyContextProvider } from './components/context/MyContext';
import Contatos from './components/pages/contatos/Contatos';
import Treino from './components/pages/treino/Treino';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <MyContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/contatos" element={<Contatos/>}/>
            <Route path="/treino" element={<Treino/>}/>
          </Routes>
        </Router>
      </MyContextProvider>
  </React.StrictMode>
);

reportWebVitals();
