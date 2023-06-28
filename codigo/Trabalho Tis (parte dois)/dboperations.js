var config = require('./dbconfig');
const sql = require('mssql');

async function getpacotesdeViagens() {
    try {
        let pool = await sql.connect(config);
        let lojas = await pool.request().query("SELECT * from pacotesdeViagem");
        return lojas.recordsets;
    }
    catch (error) {
        console.log("aqui");
        console.log(error);
    }
}

async function getpacotesdeViagem(pacotesdeViagemId) {
    try {
        let pool = await sql.connect(config);
        let loja = await pool.request().input('input_parameter', sql.Int, pacotesdeViagemId).query("SELECT * from [dbo].[pacotesdeViagem] where id = @input_parameter");
        return loja.recordsets;
    }
    catch (error) {
        console.log("aqui2");
        console.log(error);
    }
}


async function deletePacote(pacotesdeViagemId) {
    try {
        let pool = await sql.connect(config);
        let loja = await pool
            .request()
            .input('input_parameter', sql.Int, pacotesdeViagemId)
            .query('SELECT * from [dbo].[pacotesdeViagem] where id = @input_parameter');

        // Faça o que for necessário com os dados recuperados antes de deletar

        // Exemplo de exclusão do pacote de viagem
        await pool
            .request()
            .input('input_parameter', sql.Int, pacotesdeViagemId)
            .query('DELETE FROM [dbo].[pacotesdeViagem] where id = @input_parameter');

        console.log('Pacote de viagem excluído com sucesso.');
    } catch (error) {
        console.log('Erro ao excluir o pacote de viagem:');
        console.log(error);
    }
}


async function addpacotesdeViagem(pacotesdeViagem) {
    try {
        let pool = await sql.connect(config);
        let loja = await pool.request()
            .query(`INSERT INTO [dbo].[pacotesdeViagem]
        ( 
            [Id],
            [Data],
            [Valor], 
            [Local] 
        
        ) VALUES (
            '${pacotesdeViagem.Id}',
            '${pacotesdeViagem.Data}',
            '${pacotesdeViagem.Valor}',
            '${pacotesdeViagem.Local}'
        )
    `);

        return loja.recordsets;
    }
    catch (error) {
        console.log("aqui3");
        console.log(error);
    }
}




/* ---------------------------Clientes------------------------------------------*/

async function getClientes() {
    try {
      let pool = await sql.connect(config);
      let result = await pool.request().query("SELECT * from Cliente");
      return result.recordset;
    } catch (error) {
      console.log("Ocorreu um erro ao obter os clientes:");
      console.log(error);
      throw error; // Lança o erro para que possa ser tratado na chamada da função
    }
  }
  

async function getCliente(ClienteId) {
  try {
    let pool = await sql.connect(config);
    let result = await pool
      .request()
      .input('input_parameter', sql.Int, ClienteId)
      .query('SELECT * FROM [dbo].[Cliente] WHERE Id = @input_parameter');
    return result.recordset;
  } catch (error) {
    console.log('Ocorreu um erro ao obter o cliente:', error);
    throw error;
  }
}





async function updClientes(Cliente) {
    try {
        let pool = await sql.connect(config);
        let loja = await pool.request()
            .input('input_parameter', sql.Int, Cliente.Id)
            .query(`UPDATE [dbo].[Cliente] SET
         
            [Telefone] = '${Cliente.Telefone}',
            [Nome] = '${Cliente.Nome}', 
            [CPF] = '${Cliente.CPF}',
            [Email] = '${Cliente.Email}',
            [dataNasc] = '${Cliente.dataNasc}', 
            [senha] = '${Cliente.senha}' 
            WHERE ID = @input_parameter`);

        return loja.recordsets;
    }
    catch (error) {
        console.log("aqui3");
        console.log(error);
    }
}

async function deleteClientes(ClienteId) {
    try {
        let pool = await sql.connect(config);
        let loja = await pool.request()
            .input('input_parameter', sql.Int, ClienteId)
            .query(`DELETE FROM [dbo].[Cliente] WHERE Id = @input_parameter`);

        return loja.recordsets;
    }
    catch (error) {
        console.log("aqui4");
        console.log(error);
    }
}

async function addClientes(Cliente) {
    try {
        let pool = await sql.connect(config);
        let loja = await pool.request()
            .query(`INSERT INTO [dbo].[Cliente]
        ( 
            [Id],
            [Telefone],
            [Nome], 
            [CPF],
            [Email],
            [dataNasc], 
            [senha] 
        
        ) VALUES (
            '${Cliente.Id}',
            '${Cliente.Telefone}',
            '${Cliente.Nome}',
            '${Cliente.CPF}',
            '${Cliente.Email}',
            '${Cliente.dataNasc}',
            '${Cliente.senha}'
        )
    `);

        return loja.recordsets;
    }
    catch (error) {
        console.log("aqui5");
        console.log(error);
    }
}

module.exports = {
    getpacotesdeViagens: getpacotesdeViagens,
    getpacotesdeViagem: getpacotesdeViagem,
    addpacotesdeViagem: addpacotesdeViagem,
    deletePacote: deletePacote,
    getClientes: getClientes,
    getCliente: getCliente,
    updClientes: updClientes,
    deleteClientes : deleteClientes,
    addClientes: addClientes

}