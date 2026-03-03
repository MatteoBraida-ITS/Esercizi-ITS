const btnRegistrazione = document.querySelector(".registrazione");
const campoNome = document.querySelector("#name");
const campoMail = document.querySelector("#email");
const campoPassword = document.querySelector("#password");
const campoConfirmPsw = document.querySelector("#confirmPsw");

campoNome.addEventListener("focus", () => {
  campoNome.style.borderColor = "blue";
  campoMail.style.borderColor = "";
  campoPassword.style.borderColor = "";
  campoConfirmPsw.style.borderColor = "";
});

campoMail.addEventListener("focus", () => {
  campoMail.style.borderColor = "blue";
  campoNome.style.borderColor = "";
  campoPassword.style.borderColor = "";
  campoConfirmPsw.style.borderColor = "";
});

campoPassword.addEventListener("focus", () => {
  campoPassword.style.borderColor = "blue";
  campoNome.style.borderColor = "";
  campoMail.style.borderColor = "";
  campoConfirmPsw.style.borderColor = "";
});

campoConfirmPsw.addEventListener("focus", () => {
  campoConfirmPsw.style.borderColor = "blue";
  campoMail.style.borderColor = "";
  campoPassword.style.borderColor = "";
  campoNome.style.borderColor = "";
});

function nomeValido() {
  let nome = document.forms["registrazione"]["fname"].value;

  if (nome.length >= 2) {
    console.log("Nome Valido");
  } else {
    console.log("Nome non valido");
    alert("Nome inserito non valido, deve contenere almeno 2 caratteri");
  }
}

btnRegistrazione.addEventListener("click", (e) => {
  e.preventDefault();
  nomeValido();
});
