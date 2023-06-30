window.addEventListener('DOMContentLoaded', () => {
  const clienteForm = document.getElementById('clienteForm');
  const loginForm = document.getElementById('loginForm');

  // Defina uma variável global para o contador do ID
  let idContador = 1;

  clienteForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nomeInput = document.getElementById('Nome');
    const telefoneInput = document.getElementById('Telefone');
    const dataInput = document.getElementById('dataNasc');
    const cpfInput = document.getElementById('CPF');
    const emailInput = document.getElementById('Email');
    const senhaInput = document.getElementById('senha');

    const clienteData = {
      Id: idContador, // Atribui o valor do contador ao campo ID
      Nome: nomeInput.value,
      Telefone: telefoneInput.value,
      CPF: cpfInput.value,
      dataNasc: dataInput.value,
      Email: emailInput.value,
      senha: senhaInput.value
    };

    fetch('http://localhost:8090/api/Cliente', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(clienteData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Cliente cadastrado:', data);
        // Lógica adicional após o cadastro do cliente

        // Incrementa o contador para o próximo ID
        idContador++;
      })
      .catch(error => {
        console.error('Ocorreu um erro ao cadastrar o cliente:', error);
      });
  });

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const emailInput = document.getElementById('loginEmail');
    const senhaInput = document.getElementById('loginSenha');
    const email = emailInput.value;
    const senha = senhaInput.value;
    // Verifique se o email e a senha foram preenchidos
    if (!email || !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    // Validação básica de email usando expressão regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um email válido.');
      return;
    }
    const loginData = {
      Email: email,
      senha: senha
    };
    try {
      const queryParams = new URLSearchParams(loginData);
      const url = `http://localhost:8090/api/Cliente?${queryParams}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Erro ao fazer a requisição.');
      }
      const data = await response.json();
      console.log('Login realizado:', data);      
      // Verifique se o login foi bem-sucedido
      if (data[0].CPF) {
        // Redirecione o usuário para a página do site
        window.location.href = 'Pacote01.html';
      } else {
        // Exiba uma mensagem de erro de login
        alert('Credenciais inválidas. Por favor, verifique seu email e senha.');
      }
    } catch (error) {
      console.error('Ocorreu um erro ao fazer o login:', error);
    }
  });
});


