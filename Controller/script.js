import { candidatos } from "/Controller/lists.js";
const btn_mudar_sessao = document.getElementById("btn_form_start");
const div_dados_usuario = document.getElementById("abaFormulario1");
const div_registrar = document.getElementById("abaFormulario2");
let candidato_escolhido = ""
div_registrar.style.visibility = "hidden"
let nome_usuario = ""
let cpf_usuario = ""
let email_usuario = ""
let cidade_usuario = ""


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
    alert("Problema ao mudar de sessão!")
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


document.getElementById("num_voto").addEventListener("change", (e)=>{
    let opcoes_select = document.getElementById('num_voto')
    let opcao_index = opcoes_select.selectedIndex -1
    let imagem_candidato = document.getElementById("img_candidato")
    let nome_candidatos = document.getElementById('nome_dados')
    let partido_candidatos = document.getElementById('partido_dados')
    let vice_candidatos = document.getElementById('vice_dados')
    console.log(opcoes_select.value);

    if(opcoes_select.value == candidatos[0].numero_eleitoral){
        mudarCandidatoInfo(imagem_candidato, nome_candidatos, partido_candidatos, vice_candidatos, opcao_index)
        candidato_escolhido = candidatos[0].nome
    }else if(opcoes_select.value == candidatos[1].numero_eleitoral){
        mudarCandidatoInfo(imagem_candidato, nome_candidatos, partido_candidatos, vice_candidatos, opcao_index)
        candidato_escolhido = candidatos[1].nome
    }else if(opcoes_select.value == candidatos[2].numero_eleitoral){
        mudarCandidatoInfo(imagem_candidato, nome_candidatos, partido_candidatos, vice_candidatos, opcao_index)
        candidato_escolhido = candidatos[2].nome
    }else if(opcoes_select.value == candidatos[3].numero_eleitoral){
        mudarCandidatoInfo(imagem_candidato, nome_candidatos, partido_candidatos, vice_candidatos, opcao_index)
        candidato_escolhido = candidatos[3].nome
    }else if(opcoes_select.value == candidatos[4].numero_eleitoral){
        mudarCandidatoInfo(imagem_candidato, nome_candidatos, partido_candidatos, vice_candidatos, opcao_index)
        candidato_escolhido = candidatos[4].nome
    }else if(opcoes_select.value == candidatos[5].numero_eleitoral){
        mudarCandidatoInfo(imagem_candidato, nome_candidatos, partido_candidatos, vice_candidatos, opcao_index)
        candidato_escolhido = candidatos[5].nome
    }
})

document.getElementById("btn_form_registro").addEventListener("click", (e)=>{
    if (document.getElementById("num_voto").value == ""){
        alert("Selecione um candidato para votar!")
    }else{
    removerElementos()
    div_registrar.innerHTML = `<h2>VOTO DO ELEITOR ${nome_usuario} REGISTRADO COM SUCESSO!</h2>
                                <p>Você votou em <strong>${candidato_escolhido}</strong>.
                                 Aguarde o resultado das eleições!.</p>`;
    }
})

function mudarCandidatoInfo(img, nome, partido, vice, index){
    img.src = candidatos[index].imagem
    nome.innerHTML = candidatos[index].nome
    partido.textContent = candidatos[index].partido
    vice.textContent = candidatos[index].vice
}

function removerElementos(){
    while (div_registrar.firstChild){
        div_registrar.removeChild(div_registrar.firstChild)
    }
}