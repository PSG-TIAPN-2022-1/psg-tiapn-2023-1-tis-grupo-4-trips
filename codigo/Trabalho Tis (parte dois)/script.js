window.addEventListener('DOMContentLoaded', () => {
  const clienteForm = document.getElementById('clienteForm');
  const loginForm = document.getElementById('loginForm');

  clienteForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nomeInput = document.getElementById('Nome');
    const telefoneInput = document.getElementById('Telefone');
    const dataInput = document.getElementById('dataNasc');
    const cpfInput = document.getElementById('CPF');
    const emailInput = document.getElementById('Email');
    const senhaInput = document.getElementById('senha');

    const clienteData = {
      Nome: nomeInput.value,
      Telefone: telefoneInput.value,
      CPF : cpfInput.value,
      dataNasc : dataInput.value,
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
      })
      .catch(error => {
        console.error('Ocorreu um erro ao cadastrar o cliente:', error);
      });
  });

 /* loginForm.addEventListener('submit', (event) => {
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
  
    fetch('http://localhost:8090/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Login realizado:', data);
  
        // Verifique se o login foi bem-sucedido
        if (data.success) {
          // Redirecione o usuário para a página do site
          window.location.replace('Pacote01.html') ;
        } else {
          // Exiba uma mensagem de erro de login
          alert('Credenciais inválidas. Por favor, verifique seu email e senha.');
        }
      })
      .catch(error => {
        console.error('Ocorreu um erro ao fazer o login:', error);
      });
  });*/
  
});


