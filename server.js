require('dotenv').config();

const express = require('express'); // Importa o framework Express
const bodyParser = require('body-parser'); // Importa o middleware para análise de corpos de requisição JSON
const twilio = require('twilio'); // Importa a biblioteca Twilio
const cors = require('cors'); // Importe o middleware cors

const app = express(); // Inicializa o aplicativo Express
const port = 3001; // Define a porta onde o servidor será executado

// Configure o middleware para análise de corpos de requisição JSON
app.use(bodyParser.json());
app.use(cors()); // Use o middleware cors para resolver problemas de CORS

// Configure o Twilio com suas credenciais
// const accountSid = 'AC0fcdc67a01a12a45c3fca06d11c931de';
// const authToken = '81c9bd9d2d760ee7eb9d870cc1b92a26';
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

// Rota para lidar com o envio de mensagens para o WhatsApp
app.post('/send-whatsapp', async (req, res) => {
  const { message } = req.body; // Extrai os dados do corpo da requisição

  try {
    // Envie a mensagem para o WhatsApp usando o Twilio
    const response = await client.messages.create({
      from: `whatsapp:+14155238886`, // Número do Twilio associado ao seu WhatsApp Business
      to: 'whatsapp:+558388038630', // Número de telefone do destinatário no formato "whatsapp:+1234567890"
      body: message, // Corpo da mensagem
    });

    console.log('Mensagem enviada:', response.sid); // Exibe o SID da mensagem no console
    res.status(200).send('Mensagem enviada com sucesso para o WhatsApp'); // Responde com sucesso para o cliente
  } catch (error) {
    console.log(error)
    console.error('Erro ao enviar mensagem para o WhatsApp:', error); // Exibe o erro no console
    res.status(500).send('Erro ao enviar mensagem para o WhatsApp'); // Responde com erro para o cliente
  }
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor Node.js rodando na porta ${port}`); // Exibe uma mensagem indicando que o servidor está rodando
});








//===========================================================================
//esse serve envia uma msg para o email digitado

// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');

// const app = express();

// app.use(express.json());
// app.use(cors());

// const transporter = nodemailer.createTransport({
//   host: 'smtp.office365.com',
//   port: 587,
//   secure: false,
//   auth: {
//     user: 'jefferson.joseane@hotmail.com',
//     pass: 'autoImune@2020',
//   },
// });

// app.post('/send-email', (req, res) => {
//   const { to, subject, text } = req.body;

//   const mailOptions = {
//     from: 'jefferson.joseane@hotmail.com',
//     to: to,
//     subject: subject,
//     text: 'Obrigado por se inscrever no meu site, sempre vou mandando novidade de treino e vida saudável.',
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Erro ao enviar e-mail:', error);
//       res.status(500).send('Erro ao enviar e-mail');
//     } else {
//       console.log('E-mail enviado:', info.response);
//       res.status(200).send('E-mail enviado com sucesso');
//     }
//   });
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Servidor Node.js rodando na porta ${PORT}`);
// });