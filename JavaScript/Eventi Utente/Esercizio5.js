const btnStart = document.querySelector(".btnStart");
const btnStop = document.querySelector(".btnStop");
const btnReset = document.querySelector(".btnReset");
const btnGiro = document.querySelector(".btnGiro");
const tempo = document.querySelector(".tempo");
const giro = document.querySelector(".giro");
const listaGiri = document.querySelector(".listaGiri");
let centesimi = 0;
let intervalID = null;
let numeroGiri = 0;
let tempoUltimoGiro = 0;

function tempoFormattato() {
  const minuti = Math.floor(centesimi / 6000);
  const secondi = Math.floor((centesimi % 6000) / 100);
  const cc = centesimi % 100;

  return (
    minuti.toString().padStart(2, "0") +
    ":" +
    secondi.toString().padStart(2, "0") +
    ":" +
    cc.toString().padStart(2, "0")
  );
}

btnStart.addEventListener("click", () => {
  if (intervalID === null) {
    intervalID = setInterval(fn, 10);
  }
});

function fn() {
  centesimi += 1;
  tempo.textContent = tempoFormattato();
}

btnStop.addEventListener("click", () => {
  if (intervalID !== null) {
    clearInterval(intervalID);
    intervalID = null;
  }
});

btnReset.addEventListener("click", () => {
  clearInterval(intervalID);
  intervalID = null;
  tempo.textContent = "00:00.00";
  tempoUltimoGiro = 0;
  giro.textContent = "";
});

btnGiro.addEventListener("click", () => {
  numeroGiri += 1;
  if (intervalID !== null) {
    const nuovoGiro = document.createElement("li");
    nuovoGiro.textContent = `Giro ${numeroGiri}: ${tempoFormattato()}`;
    listaGiri.appendChild(nuovoGiro);
  }
});
