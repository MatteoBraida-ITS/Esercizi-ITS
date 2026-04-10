const BASE_URL = `http://localhost:3000/api`;

const formArea = document.getElementById("form-area");
const results = document.getElementById("results");

function mostraLoading() {
  const cardsUtenti = document.getElementById("CardsUtenti");
  cardsUtenti.innerHTML = `<p>Caricamento dati in corso...</p>`;
}

function mostraRisultato(data, status) {
  if (status < 200 || status >= 300) {
    results.innerHTML = `<p class="status-error">Errore ${status}: ${data.errore}</p>`;
    return;
  }

  const cardsUtenti = document.getElementById("CardsUtenti");
  cardsUtenti.innerHTML = ""; // svuota prima di aggiungere nuove card

  const template = document.getElementById("card-template");
  const utenti = Array.isArray(data) ? data : [data.utente ?? data];

  utenti.forEach((utente) => {
    const clone = template.cloneNode(true); // clona dentro il forEach
    clone.id = "";
    clone.style.display = "block";
    clone.querySelector(".card-nome").textContent = utente.nome;
    clone.querySelector(".card-email").textContent = "Email: " + utente.email;
    clone.querySelector(".card-citta").textContent = "Città: " + utente.citta;
    cardsUtenti.appendChild(clone);
    clone.addEventListener("click", () => {
      clone.classList.toggle("aperta");
    });
  });
}

document.getElementById("GET").addEventListener("click", async () => {
  formArea.innerHTML = "Seleziona una operazione dalla barra laterale";
  mostraLoading();
  const res = await fetch(`${BASE_URL}/utenti`);
  const data = await res.json();
  mostraRisultato(data, res.status);
});

document.getElementById("POST").addEventListener("click", () => {
  formArea.innerHTML = `
    <h2>Crea nuovo utente</h2>
    <input type="text" id="input-nome" placeholder="Nome *" />
    <input type="email" id="input-email" placeholder="Email *" />
    <input type="text" id="input-citta" placeholder="Città" />
    <button id="btn-conferma">Crea utente</button>
  `;

  document
    .getElementById("btn-conferma")
    .addEventListener("click", async () => {
      const nome = document.getElementById("input-nome").value;
      const email = document.getElementById("input-email").value;
      const citta = document.getElementById("input-citta").value;

      mostraLoading();
      const res = await fetch(`${BASE_URL}/utenti`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, citta }),
      });
      const data = await res.json();
      mostraRisultato(data, res.status);
    });
});
