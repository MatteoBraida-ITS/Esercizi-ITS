const btnAumento = document.querySelector(".aumento");

const btnReset = document.querySelector(".reset");

const valore = document.querySelector("h2");

let conteggio = 0;

btnAumento.addEventListener("click", () => {
  conteggio += 1;
  valore.textContent = `Click: ${conteggio}`;
});

btnReset.addEventListener("click", () => {
  conteggio = 0;
  valore.textContent = `Click: ${conteggio}`;
});
