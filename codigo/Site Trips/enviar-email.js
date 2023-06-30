const nodemailer = require('nodemailer');

// Configuração do transporte de e-mail
const transporter = nodemailer.createTransport({
  service: 'Outlook', // Exemplo: 'Gmail'
  auth: {
    user: '1314240@sga.pucminas.br',
    pass: 'Abnerfm682',
  },
});

// Função para enviar o e-mail
async function enviarEmail(destinatario, assunto, mensagem) {
  try {
    const info = await transporter.sendMail({
      from: '1314240@sga.pucminas.br',
      to: destinatario,
      subject: assunto,
      text: mensagem,
    });

    console.log('E-mail enviado:', info.messageId);
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
  }
}

// Exemplo de uso
const nome = 'Abner'; // Recupere o nome do formulário
const email = 'abnerfreire682@gmail.com'; // Recupere o e-mail do formulário

const assunto = 'Confirmação de Pagamento';
const mensagem = `Olá, ${nome}! Seu pagamento foi confirmado. Obrigado por usar nosso serviço.`;

enviarEmail(email, assunto, mensagem);
