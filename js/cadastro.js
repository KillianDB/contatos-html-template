// Capturar elementos de interesse da página
const form = document.querySelector('#form-cadastro');
const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');
const urlBase = "https://contatos-api.fly.dev/api/v1/";

form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(evt, onformSubmit) {
    evt.preventDefault();

    const dados = getDadosParaRegistro();

    const response = await sendDadosParaApi(dados);

    tratarResponseDoRegistro(response);
}

function getDadosParaRegistro() {
    const dados = {
        name: inputNome.value,
        email: inputEmail.value,
        password: inputSenha.value
    }

    return dados;
}

async function sendDadosParaApi(dados) {
    const url = `${urlBase}auth/register`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
            'Content-type': 'application/json'
        }
    });

    return response;
}

async function tratarResponseDoRegistro() {
    if(response.status == 201){
        // Ler o corpo da resposta
        let resultado = await response.json();

        // Salvar o token 
        sessionStorage.setItem('token', resultado.token); 
        //getItem le o que ta salvo, só guarda string
        //localStorage, igual ao sessionStorage, mas persiste a fechar a janela

        // Salvar os dados do usuário
        sessionStorage.getItem('user', JSON.stringify(resultado.user));

        // Redirecionar o usuário para home
        window.location = "home.html"

    }else{
        // ler o erro

        //exibir o erro
    }
}