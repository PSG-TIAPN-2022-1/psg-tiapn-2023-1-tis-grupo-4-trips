class Cliente{
    constructor(Id,Telefone,Nome,CPF,Email,dataNasc,senha){
        this.Id = Id;
        this.Telefone = Telefone;
        this.Nome = Nome;
        this.CPF = CPF;
        this.Email = Email;
        this.dataNasc = dataNasc;
        this.senha = senha;
        
    }
}

module.exports = Cliente;