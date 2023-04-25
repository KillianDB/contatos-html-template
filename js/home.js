const urlBase = "https://contatos-api.fly.dev/api/v1/";
const modal = document.getElementById("modal");

let mostrarModal = () => {
    modal.style.display = "flex"
    modal.style.opacity = 1
}

let esconderModal = () => {
    modal.style.display = "none"
    modal.style.opacity = 0
}

let onLinkAbrirModalClick = evt =>{
    mostrarModal();
}

let onButtonEditarClick = evt => {
    mostrarModal();
}

let onCancelarClick = evt => {
    esconderModal();
}

onFormSubmit = async evt => {
    // Impedindo o envio do form
    evt.preventDefault();

    // Capturar os dados do contato
    const dados = capturarDadosDoForm();

    // Cadastrar contato
    const response = await cadastrarContato(dados);

    // Tratar response
    tratarResponse(response);
    esconderModal();
}

function capturarDadosDoForm(){
    const dados ={
        name: DocumentTimeline.getElementById('nome').value,
        emails: [
            document.getElementById('email_1').value,
            document.getElementById('email_2').value
        ],
        phoneNumbers: [
            document.getElementById('telefone_1').value,
            document.getElementById('telefone_2').value,
            document.getElementById('telefone_3').value
        ]
    }
}

async function cadastrarContato(){
    const url = `${urlBase}contact`;
    const token = sessionStorage.getItem('token');
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
            'Content-type': 'application/json',
            'authorization': `bearer ${token}`
        }
    });

    return response;
}

function tratarResponse(response){
    console.log(response);
}

let link = document.getElementById("linkAbrirModal");
link.addEventListener('click', mostrarModal);

let edits = document.querySelectorAll("section > a");
edits.forEach(
    e => e.addEventListener('click', mostrarModal)
)

let form = document.querySelector('form');
form.addEventListener('submit');

let btAdicionarClick = document.getElementById("btAdicionar");
btAdicionarClick.addEventListener('click', esconderModal);

let btCancelarClick = document.getElementById('btCancelar')
btCancelarClick.addEventListener('click', esconderModal);


