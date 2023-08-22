const btn_mudar_sessao = document.getElementById("btn_form_start");
const div_dados_usuario = document.getElementById("abaFormulario1");
const div_registrar = document.getElementById("abaFormulario2");

let nome_usuario = ""
let cpf_usuario = ""
let email_usuario = ""
let cidade_usuario = ""

div_registrar.style.visibility = "hidden"



btn_mudar_sessao.addEventListener("click", (e) => {    

nome_usuario = document.getElementById('nome').value
cpf_usuario = document.getElementById('cpf').value
email_usuario = document.getElementById('email').value
cidade_usuario = document.getElementById('cidade_cliente').value

const estado = document.getElementById('estado_cliente')
const estado_value = estado.value


if(verificar_input(nome_usuario, cpf_usuario, email_usuario, estado,cidade_usuario)){ 
    mudar_sessão( )
}else{
    console.log('Não foi')
}
})

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

function mudar_sessão(){

btn_mudar_sessao.addEventListener("click", function() {
  if (div_dados_usuario.classList.contains("visible")) {
    div_dados_usuario.classList.remove("visible");
    div_dados_usuario.classList.add("hidden");
    div_dados_usuario.innerHTML = "<h2>Seus Dados Foram Registrados com Sucesso!</h2><p>Agora você já pode votar!.</p>";
    div_registrar.style.visibility = "visible"
    inserir_dados_usu()
  } else {
    div_dados_usuario.classList.remove("hidden");
    div_dados_usuario.classList.add("visible");
    
  }
});
}

function inserir_dados_usu(){
    document.getElementById("nome_cliente").innerHTML = nome_usuario
    document.getElementById("cpf_cliente").innerHTML = cpf_usuario
}