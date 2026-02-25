const input = document.querySelector("input");
const bottone = document.querySelector("button");
const lista = document.querySelector("ul");

bottone.addEventListener("click", (e) => {
  let testo = input.value;

  if (testo.trim() === "") {
    alert("Inserisci del testo!");
    return;
  }

  const item = document.createElement("li");
  item.textContent = testo;

  lista.append(item);

  input.value = "";

  input.focus();
});
