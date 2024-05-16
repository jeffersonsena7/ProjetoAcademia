import React, { createContext, useState } from 'react';

// Crie o contexto
const MyContext = createContext();

// Crie um provedor para fornecer o contexto aos componentes filhos
const MyContextProvider = ({ children }) => {
  // Defina o estado ou outras variáveis ​​que deseja compartilhar
  const [basename, setBasename] = useState('valor padrão');

  // Forneça os valores do contexto
  return (
    <MyContext.Provider value={{ basename, setBasename }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };