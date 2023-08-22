function abrirVoto(){    
const nome_usuario = document.getElementById('nome').value
const cpf_usuario = document.getElementById('cpf').value
const email_usuario = document.getElementById('email').value
const cidade_usuario = document.getElementById('cidade_cliente').value


const estado = document.getElementById('estado_cliente')
const estado_value = estado.value


if(verificar_input(nome_usuario, cpf_usuario, email_usuario, estado,cidade_usuario)){ 
    console.log('foi')
}else{
    console.log('Não foi')
}
}

function verificar_input(nome,cpf,email, estado, cidade_cliente){
    if (nome == "" && nome.length <= 10){
        alert("NOME: Este campo deve conter seu nome e sobrenome")
        mudar_cor_bordar('nome')
        return false
    }else if(cpf == "" && cpf.length < 11){
        alert("CPF: Este campo não deve estar vazio ou ter menos de 11 caracteres")
        mudar_cor_bordar('cpf')
        return false
    }else if(validar_email(email) == false){
        alert("EMAIL: Este campo deve conter seu email!")
        mudar_cor_bordar('email')
        return false
    }else if(estado == ""){
        alert("ESTADO: Selecione um estado!")
        mudar_cor_bordar('estado_cliente')
        return false
    }else if(cidade_cliente == ""){
        alert("CIDADE: Digite o seu estado!")
        mudar_cor_bordar('cidade_cliente')
        return false
    }else{
        return true
    }
}

function mudar_cor_bordar(elemento){ 
    document.getElementById(elemento).style.border ="2px solid #FF0000";
}

function validar_email(email) {
    var resposta = /\S+@\S+\.\S+/;
    return resposta.test(email);
  }

console.log("Validar email: ", validar_email("thi"))