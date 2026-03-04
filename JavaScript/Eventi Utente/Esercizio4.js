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

function validazione() {
  const nome = campoNome.campoNome.value.trim();
  const mail = campoMail.value.trim();
  const psw = campoPassword.value;
  const confirmPsw = campoConfirmPsw.value;

  return (
    nome.lenght >= 2 &&
    mail.includes("@") &&
    psw.lenght >= 8 &&
    psw === confirmPsw
  );
}

function abilitaPulsante() {
  btnRegistrazione.disabled = !validazione();
}

[campoNome, campoMail, campoPassword, campoConfirmPsw].forEach((campo) => {
  addEventListener("input", aggiornaPulsante);
});

btnRegistrazione.addEventListener("click", (e) => {
  e.preventDefault();
  nomeValido();
});
