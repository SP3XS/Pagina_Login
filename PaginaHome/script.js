let a = document.getElementById("loginBtn");
let b = document.getElementById("registerBtn");
let x = document.getElementById("login");
let y = document.getElementById("register");

function login(){
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register(){
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}

window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Seleciona o link "About" e a seção "about"
const aboutLink = document.querySelector('.nav-menu a[href="#about-section"]');
const aboutSection = document.getElementById('about-section');

// Adiciona um evento de clique ao link
aboutLink.addEventListener('click', (event) => {
    event.preventDefault();
    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Garante que o topo da seção seja visível
});


// Seleciona o link "Suporte" e a seção "suporte"
const suporteLink = document.getElementById('suporteLink');
const suporteSection = document.getElementById('suporte-section');

// Adiciona um evento de clique ao link
suporteLink.addEventListener('click', (event) => {
    event.preventDefault();
    suporteSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});