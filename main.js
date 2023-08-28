const header = document.querySelector('.header')

window.addEventListener("scroll", () => {
    
    header.classList.toggle('scroll', window.scrollY>7)
});

const menuHambuguer = document.querySelector("#menu-hamburguer")

menuHambuguer.addEventListener("click", () => {

    let nav = document.querySelector(".navMobile")
    menuHambuguer.classList.toggle("hamburguerActive")
    nav.classList.toggle('active')
})

function fecharNav(){
    let nav = document.querySelector(".navMobile")
    let input = document.querySelector("#menu-hamburguer")
    input.checked = false;
    nav.classList.toggle('active')
}

const fecharMobile = ()=>{
    let nav = document.querySelector(".navMobile")
    nav.classList.remove('active')
    removerFundo()
}

//FUNÇÃO SUBMIT


function submitForm(event) {
    event.preventDefault();
    
    var form = document.getElementById("contactForm");
    var formData = new FormData(form);
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formsubmit.com/lucasvilarim.souza@gmail.com", true);
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                showConfirmation();
            } else {
                alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.");
            }
        }
    };
    
    xhr.send(formData);
}

function showConfirmation() {
    alert("Ótimo, recebemos seu E-mail, Entraremos em contato");
}
function scrollToContact() {
    var contatoSection = document.getElementById("sobre-nos");
    var offset = 175; // Ajuste este valor para definir a quantidade de deslocamento para cima
    var topPos = contatoSection.offsetTop - offset;
    window.scrollTo({ top: topPos, behavior: "smooth" });
}
function scrollToSobre() {
    var contatoSection = document.getElementById("sobre-nos");
    var offset = 133; // Ajuste este valor para definir a quantidade de deslocamento para cima
    var topPos = contatoSection.offsetTop - offset;
    window.scrollTo({ top: topPos, behavior: "smooth" });
}
function scrollToPlanoDayCare() {
    var contatoSection = document.getElementById("planoDayCare");
    var offset = 80; // Ajuste este valor para definir a quantidade de deslocamento para cima
    var topPos = contatoSection.offsetTop - offset;
    window.scrollTo({ top: topPos, behavior: "smooth" });
}
function scrollToPlanoDaySobre(){
    var contatoSection = document.getElementById("desc-moto");
    var offset = 80; // Ajuste este valor para definir a quantidade de deslocamento para cima
    var topPos = contatoSection.offsetTop - offset;
    window.scrollTo({ top: topPos, behavior: "smooth" });
}
function scrollToPlanoHospedagem() {
    var contatoSection = document.getElementById("planoHospedagem");
    var offset = 80; // Ajuste este valor para definir a quantidade de deslocamento para cima
    var topPos = contatoSection.offsetTop - offset;
    window.scrollTo({ top: topPos, behavior: "smooth" });
}
function scrollToPlanoHospedagemSobre() {
    var contatoSection = document.getElementById("desc-moto");
    var offset = 80; // Ajuste este valor para definir a quantidade de deslocamento para cima
    var topPos = contatoSection.offsetTop - offset;
    window.scrollTo({ top: topPos, behavior: "smooth" });
}
function scrollToEmail() {
    var contatoSection = document.getElementById("contactForm");
    var offset = 260; // Ajuste este valor para definir a quantidade de deslocamento para cima
    var topPos = contatoSection.offsetTop - offset;
    window.scrollTo({ top: topPos, behavior: "smooth" });
}