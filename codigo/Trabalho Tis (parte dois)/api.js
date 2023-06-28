var Db = require('./dboperations');
var pacotesdeViagem = require('./pacotesdeViagem');
var Cliente = require('./Cliente')
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api',router);

router.use((request,response,next)=> {
    console.log('middleware');
    next();
})

router.route('/pacotesdeViagem').get((request,response)=>{
    dboperations.getpacotesdeViagens().then(result =>{
        response.json(result[0]);
    })
})

router.route('/pacotesdeViagem/:id').get((request,response)=>{
    dboperations.getpacotesdeViagem(request.params.id).then(result =>{
        response.json(result[0]);
    })
})

router.route('/pacotesdeViagem').post((request,response)=>{
    let Pacotes = {...request.body}


    dboperations.addpacotesdeViagem(Pacotes).then(result =>{
        response.status(201).json(result);
    })
})

/* ---------------Clientes-------------------- */

router.route('/Cliente').get((request,response)=>{
    dboperations.getClientes().then(result =>{
        response.json(result[0]);
    })
})

router.route('/login').post((request, response) => {
    const { email, senha } = request.body;
  
    dboperations.getClientes().then(clientes => {
      const cliente = clientes.find(c => c.Email === email && c.senha === senha);
  
      if (cliente) {
        response.status(200).json({ success: true, message: 'Login realizado com sucesso' });
      } else {
        response.status(401).json({ success: false, message: 'Credenciais inválidas' });
      }
    })
    .catch(error => {
      response.status(500).json({ error: 'Ocorreu um erro ao fazer login' });
    });
  });



router.route('/Cliente/:Id').delete((request, response) => {
    const id = request.params.Id;
  
    dboperations.deleteClientes(id)
      .then(() => {
        response.status(200).json({ message: 'Cliente deletado com sucesso' });
      })
      .catch(error => {
        response.status(500).json({ error: 'Ocorreu um erro ao deletar o cliente' });
      });
  });

  


router.route('/Cliente/:Id').get((request,response)=>{
    dboperations.getCliente(request.params.Id).then(result =>{
        response.json(result[0]);
    })
})

router.route('/Cliente').post((request,response)=>{
    let Cliente = {...request.body}


    dboperations.addClientes(Cliente).then(result =>{
        response.status(201).json(result);
    })
})




var port = process.env.PORT || 8090;
app.listen(port);
console.log('API de Pacotes esta rodando na ' + port);
