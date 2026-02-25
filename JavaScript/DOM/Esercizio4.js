let stato = 0;
const rosso = document.getElementById("rosso");
const giallo = document.getElementById("giallo");
const verde = document.getElementById("verde");
const button = document.getElementById("btn-prossimo");

function spegnitutto() {
  rosso.style.backgroundColor = "#ddd";
  giallo.style.backgroundColor = "#ddd";
  verde.style.backgroundColor = "#ddd";
}

button.addEventListener("click", () => {
  spegnitutto();

  if (stato === 0) {
    rosso.style.backgroundColor = "#e74c3c";
  } else if (stato === 1) {
    giallo.style.backgroundColor = "#f1c40f";
  } else if (stato === 2) {
    verde.style.backgroundColor = "#2ecc71";
  }

  stato = (stato + 1) % 3;
});
