const formulario = document.querySelector("#formRegistro");

const Cemail = document.querySelector("#emailRegistrar");
const Cuser = document.querySelector("#usernameRegistrar");
const Csenha = document.querySelector("#passwordRegistrar");

function cadastrar(){

    fetch("http://localhost:8080/cadastrar",
    {
        Headers: {
            'Accept':'application/json',
            'Content-Type':'application/json',
        },
        method: "POST",
        body: JSON.stringify({a: 1, b: 2})
    })
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })
};


formulario.addEventListener('submit', function(event){
    event.preventDefault();
    
    const dados ={
        email: Cemail.value,
        username: Cuser.value,
        senha: Csenha.value
    };
});