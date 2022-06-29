let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";

let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function (){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random()*n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
}

function copyPassword(){
    alert("Senha gerada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}