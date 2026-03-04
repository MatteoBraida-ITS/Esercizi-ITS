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

campoNome.addEventListener("input", () => {
  if (campoNome.value.trim().length < 2) {
    campoNome.style.borderColor = "red";
  } else {
    campoNome.style.borderColor = "blue";
  }
});

campoMail.addEventListener("focus", () => {
  campoMail.style.borderColor = "blue";
  campoNome.style.borderColor = "";
  campoPassword.style.borderColor = "";
  campoConfirmPsw.style.borderColor = "";
});

campoMail.addEventListener("input", () => {
  if (campoMail.value.includes("@")) {
    campoMail.style.borderColor = "blue";
  } else {
    campoMail.style.borderColor = "red";
  }
});

campoPassword.addEventListener("focus", () => {
  campoPassword.style.borderColor = "blue";
  campoNome.style.borderColor = "";
  campoMail.style.borderColor = "";
  campoConfirmPsw.style.borderColor = "";
});

campoPassword.addEventListener("input", () => {
  if (campoPassword.value.trim().length < 8) {
    campoPassword.style.borderColor = "red";
  } else {
    campoPassword.style.borderColor = "blue";
  }
});

campoConfirmPsw.addEventListener("focus", () => {
  campoConfirmPsw.style.borderColor = "blue";
  campoMail.style.borderColor = "";
  campoPassword.style.borderColor = "";
  campoNome.style.borderColor = "";
});

campoConfirmPsw.addEventListener("input", () => {
  if (campoConfirmPsw.value === campoPassword.value) {
    campoConfirmPsw.style.borderColor = "blue";
  } else {
    campoConfirmPsw.style.borderColor = "red";
  }
});

function validazione() {
  const nome = campoNome.value.trim();
  const mail = campoMail.value.trim();
  const psw = campoPassword.value;
  const confirmPsw = campoConfirmPsw.value;

  return (
    nome.length >= 2 &&
    mail.includes("@") &&
    psw.length >= 8 &&
    psw === confirmPsw
  );
}

function abilitaPulsante() {
  btnRegistrazione.disabled = !validazione();
}

[campoNome, campoMail, campoPassword, campoConfirmPsw].forEach((campo) => {
  addEventListener("input", abilitaPulsante);
});

btnRegistrazione.addEventListener("click", (e) => {
  e.preventDefault();
  nomeValido();
});
