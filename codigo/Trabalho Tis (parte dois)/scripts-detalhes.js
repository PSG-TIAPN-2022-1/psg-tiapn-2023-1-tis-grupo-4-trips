const { response } = require("express");

const urlParams = new URLSearchParams(window.location.search);
const getId = urlParams.get('id');

const url =  'http://localhost:8090/api/Cliente' + getId;
const carbool = true;

function atualizarCampos2(Id,Telefone,Nome,CPF,Email,dataNasc,senha){

    let Idmod = getId;
    let Telefonemod = "31985881714";
    let Nomemod = "Abner Freire Martins";
    let CPFmod = "123456789";
    let Emailmod = "abner@gmail.com";
    let dataNascmod = "10/10/2000";
    let senhamod = "abnerfm782"

}

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        alert("Atualização realizada")
    }
};

xhttp.open("PATCH", 'http://localhost:8090/api/Cliente',true);
xhttp.setRequestHeader("Content-type","application/json");

xhttp.send(JSON.stringify({
Id : Id,
Telefone : Telefone,//A
Nome : Nome,//B
CPF : CPF,//C
Email : Email,//D
dataNasc : dataNasc,//E
senha : senha//F

}))


async function getOneProduct(){

    let products = document.querySelector('.products');
    let A,B,C,D,E,F;

    if (carbool){
        data = await fetch(url);
        response = await data.json();
        A = response[0].Telefone;
        B = response[0].Nome;
        C = response[0].CPF;
        D = response[0].Email;
        E = response[0].dataNasc;
        F = response[0].senha;
    }

    else {
        data = await fetch(urldiw);
        response = await data.json();
        A = response.A;
        B = response.B; 
        C = response.C;
        D = response.D;
        E = response.E;
        F = response.F;
    }

   
    products.innerHTML += `
  <div class="product">
    <p>Telefone: ${A}</p>
    <p>Nome: ${B}</p>
    <p>CPF: ${C}</p>
    <p>Email: ${D}</p>
    <p>Data de Nascimento: ${E}</p>
    <p>Senha: ${F}</p>
  </div>
`;


}

