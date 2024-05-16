import './App.css';

import { BrowserRouter, Routes, Route} from "react-router-dom";

import DetalheIcon from './components/detalhe-icon/DetalheIcon';

import Header from './components/header/Header';
import Icone from './components/icone/Icone';
import MyCarousel from './components/MyCarousel/MyCarousel';
import { MyEmail } from './components/email/MyEmail';
import Baseboard from './components/baseboard/Baseboard';
import BaseboardMeio from './components/baseboard-meio/BasebordMeio';

import Home from './components/pages/home/Home'

import {MyContextProvider} from './components/context/MyContext'; // Importe o provedor de contexto

const App = () => {
 

  return (
      <>
        <Header />
        <MyCarousel />
         <Icone />
        <DetalheIcon />
         <section className='baseboard'>
            <BaseboardMeio/>
            <MyEmail />
            <Baseboard />
         </section>
      </>

  );
};

export default App;




//============================================================================
//esse é o codigo junto com o server que esta comentado que envia um msg para pessoa que digitou o e-mail

// import React, { useState } from 'react';
// import axios from 'axios';
// import Home from './components/pages/home/Home';

// const App = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3001/send-email', {
//         to: email,
//         subject: 'Assunto do E-mail',
//         text: 'Conteúdo do E-mail',
//       });
//       console.log('Resposta do servidor:', response.data);
//       setMessage('E-mail enviado com sucesso!');
//     } catch (error) {
//       console.error('Erro ao enviar e-mail:', error);
//       setMessage('Erro ao enviar o e-mail');
//     }
//   };

//   const handleChange = (event) => {
//     setEmail(event.target.value);
//   };

//   return (

    

//     <div>
//       <h1>Enviar E-mail</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           E-mail:
//           <input
//             type="email"
//             value={email}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <button type="submit">Enviar</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default App;

//============================================================================
// function App() {
//   return (
//     <div>
//       <Header />
//       <MyCarousel />
//       <Icone />
//       <DetalheIcon />
//       <section className='baseboard'>
//         <Baseboard />
//         <BaseboardMeio/>
//         <MyEmail />
//       </section>

//     </div>
//   );
// }

// export default App;
