const quadrati = document.querySelectorAll(".item");

const btnReset = document.querySelector(".reset");

quadrati.forEach((quadrato) => {
  quadrato.addEventListener("mouseenter", () => {
    quadrato.style.backgroundColor = `rgb(${(Math.random() * 255) | 0}, ${(Math.random() * 255) | 0}, ${(Math.random() * 255) | 0})`;
  });
});

btnReset.addEventListener("click", () => {
  quadrati.forEach((quadrato) => {
    quadrato.style.backgroundColor = "";
  });
});
