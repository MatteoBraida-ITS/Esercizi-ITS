const data = new Date().toLocaleTimeString("it-IT");

let contatore = 0;
const btnAggiungi = document.getElementById("aggiungi");
const btnReset = document.getElementById("reset");
const btnSottrai = document.getElementById("sottrai");
const numero = document.getElementById("numero");

function aggiungi() {
  numero.textContent = contatore.toString();
}

function azzera() {
  numero.textContent = "0";
}

function sottrai() {
  numero.textContent = contatore.toString();
}

btnAggiungi.addEventListener("click", () => {
  contatore += 1;
  aggiungi();
});

btnReset.addEventListener("click", () => {
  azzera();
});

btnSottrai.addEventListener("click", () => {
  contatore -= 1;
  aggiungi();
});
