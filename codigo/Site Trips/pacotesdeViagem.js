class pacotesdeViagem{
    constructor(Id,Data,Valor,Local){
        this.Id = Id;
        this.Data = Data;
        this.Valor = Valor;
        this.Local = Local;
    }
}

/*
class passagemAerea{
    constructor(Id,dataEntr,dataSaida,Assento,Horario){
        this.Id = Id;
        this.dataEntr = dataEntr;
        this.dataSaida = dataSaida;
        this.Assento = Assento;
        this.Horario = Horario;
    }
}
class passagemHotel{
    constructor(Local,Reserva,numPessoas,Estadia,dataEntr,dataSaida){
        this.Local = Local;
        this.Reserva = Reserva;
        this.numPessoas= numPessoas;
        this.Estadia = Estadia;
        this.dataEntr = dataEntr;
        this.dataSaida = dataSaida;
    }
}*/

module.exports = pacotesdeViagem;
