import React, { useState } from "react";
import axios from "axios";
import './MyEmail.css'

 export const MyEmail = () => {
    
  const [phoneNumber, setPhoneNumber] = useState(''); // Estado para armazenar o número de telefone
  const [message, setMessage] = useState(''); // Estado para armazenar a mensagem
  const [responseMessage, setResponseMessage] = useState(''); // Estado para armazenar a mensagem de resposta

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    try {
      // Faz uma requisição POST para o servidor Node.js com o número de telefone e a mensagem
      await axios.post('http://localhost:3001/send-whatsapp', {
        phoneNumber: '+14155238886',
        message: message,
      });

      setResponseMessage('Mensagem enviada com sucesso!'); // Define a mensagem de sucesso
      setPhoneNumber(''); // Limpa o número de telefone
      setMessage(''); // Limpa a mensagem
    } catch (error) {
      console.error('Erro ao enviar mensagem para o WhatsApp:', error); // Exibe o erro no console
      setResponseMessage('Erro ao enviar mensagem para o WhatsApp'); // Define a mensagem de erro
    }
  };

  // Função para lidar com a mudança nos campos do formulário
  const handleInputChange = (event) => {
    const { name, value } = event.target; // Extrai o nome e o valor do campo
    if (name === 'phoneNumber') {
      setPhoneNumber(value); // Atualiza o estado do número de telefone
    } else if (name === 'message') {
      setMessage(value); // Atualiza o estado da mensagem
    }
  };

  return (
    <div>
      <form className='container-email' onSubmit={handleSubmit}>
        <label htmlFor="phoneNumber">
          Telefone:
        <input 
          className='email-input'
          type="tel" id="" 
          required
          placeholder='(83)98888-8888'
        />
        </label>
        <label>
          Mensagem:
          <textarea
            name="message"
            value={message}
            onChange={handleInputChange}
            required
            placeholder='Deixe sua dúvida aqui!'
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>} {/* Exibe a mensagem de resposta, se houver */}
      </div>
  );
};


