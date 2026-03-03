const keyPressed = document.querySelector(".container");

const key = document.querySelector(".key");

const code = document.querySelector(".code");

const condizione = document.querySelector(".condizione");

document.addEventListener("keydown", (e) => {
  console.log(`Tasto premuto: ${e.key}`);
  console.log(`Tasto premuto: ${e.code}`);

  if (e.key === "ArrowUp") {
    keyPressed.textContent = "↑";
  } else if (e.key === "ArrowDown") {
    keyPressed.textContent = "↓";
  } else if (e.key === "ArrowLeft") {
    keyPressed.textContent = "←";
  } else if (e.key === "ArrowRight") {
    keyPressed.textContent = "→";
  } else {
    keyPressed.textContent = e.key;
  }

  key.textContent = `Key: ${e.key}`;
  code.textContent = `Code: ${e.code}`;

  condizione.textContent = `Shift: ${e.shiftKey} Ctrl: ${e.ctrlKey} Alt: ${e.altKey}`;
});
