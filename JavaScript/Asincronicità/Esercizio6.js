const filtro = document.querySelector("select");
const barraRicerca = document.querySelector("input");
const contatoreUtenti = document.querySelector(".contatore");
const contenitoreCards = document.querySelector(".griglia");

let databaseUtenti = [];

document.addEventListener("DOMContentLoaded", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((Response) => Response.json())
    .then((data) => (databaseUtenti = data))
    .then(() => renderUsers());
});

function renderUsers() {
  let i = 0;

  let html = "";

  for (let utente of databaseUtenti) {
    html += `<div class="card">
      <h2>${utente.name}</h2>
      <p>
        <span class="label">📧 Email:</span> ${utente.email}
      </p>
      <p>
        <span class="label">🏙️ Città:</span> ${utente.address.city}
      </p>
      <p>
        <span class="label">🏢 Azienda:</span> ${utente.company.name}
      </p>
    </div>`;

    i++;
  }
  contenitoreCards.innerHTML = html;

  contatoreUtenti.textContent = `Utenti trovati : ${i}`;
}

let timer;

barraRicerca.addEventListener("input", () => {
  clearTimeout(timer);

  timer = setTimeout(() => {
    console.log(barraRicerca.value);
  }, 300);
});

function filtraUtenti(testo) {
  testo = barraRicerca.value.trim().toLowerCase();

  if (barraRicerca.value === "") {
    renderUsers(databaseUtenti);
    return;
  } else {
    const risultati = databaseUtenti.filter((utente) =>
      utente.name.toLowerCase().includes(testo),
    );
    renderUsers(risultati);
  }
}
