const formulario = document.querySelector("#register");

const Cemail = document.querySelector("#emailRegistrar");
const Cuser = document.querySelector("#usernameRegistrar");
const Csenha = document.querySelector("#passwordRegistrar");

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    
    console.log(Cemail.value)
});