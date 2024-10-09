const formulario = document.querySelector("#formRegistro");

const Cemail = document.querySelector("#emailRegistrar");
const Cuser = document.querySelector("#usernameRegistrar");
const Csenha = document.querySelector("#passwordRegistrar");

function cadastrar(){

    fetch("http://localhost:8080/usuarios",
    {
        headers: {
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        method: "POST",
        body: JSON.stringify(
            {
                email: Cemail.value,
                username: Cuser.value,
                senha: Csenha.value
            }
        )
    })
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })
};

function limpar(){
    Cemail.value = "";
    Cuser.value = "";
    Csenha.value = "";
};

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    
    cadastrar();
    limpar();
});