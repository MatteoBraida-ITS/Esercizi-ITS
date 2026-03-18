const bottoniContainer = document.getElementById("bottoni");
const risultato = document.getElementById("risultato");

//Crea i 10 bottoni
for (let i = 1; i <= 10; i++) {
  const btn = document.createElement("button");
  btn.textContent = `Utente ${i}`;
  btn.addEventListener("click", () => caricaProfilo(i, btn));
  bottoniContainer.appendChild(btn);
}

async function caricaProfilo(id, bottone) {
  //Stato caricamento
  const Testo = bottone.textContent;
  bottone.textContent = "Caricamento...";
  bottone.disabled = true;
  risultato.innerHTML = "<p> Caricamento in corso... <p>";

  try {
    //Carica utente e Todo in parallelo
    const [rispostaUtente, rispostaTodos] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`),
      fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`),
    ]);

    //Controlla errori HTTP
    if (!rispostaUtente.ok)
      throw new Error(`Errore utente: HTTP ${rispostaUtente.status}`);
    if (!rispostaTodos.ok)
      throw new Error(`Errore utente: HTTP ${rispostaTodos.status}`);

    const utente = await rispostaUtente.json();
    const todos = await rispostaTodos.json();

    //Calcola statistiche todo
    const totale = todos.length;
    const completati = todos.filter((t) => t.completed).length;
    const nonCompletati = totale - completati;
    const percentuale =
      totale > 0 ? ((completati / totale) * 100).toFixed(0) : 0;

    // Mostra la card
    risultato.innerHTML = `
            <div class="card">
                <h2>${utente.name}</h2>
                <p><span class="label">📧 Email:</span> ${utente.email}</p>
                <p><span class="label">🏙️ Città:</span> ${utente.address.city}</p>
                <p><span class="label">🏢 Azienda:</span> ${utente.company.name}</p>
                <hr style="margin: 12px 0; border: none; border-top: 1px solid #eee;">
                <p><span class="label">📋 Todo totali:</span> ${totale}</p>
                <p><span class="label">✅ Completati:</span> ${completati}</p>
                <p><span class="label">❌ Non completati:</span> ${nonCompletati}</p>
                <div class="barra-container">
                    <div class="barra-progresso" style="width: ${percentuale}%">
                        ${percentuale}%
                    </div>
                </div>
            </div>
        `;
  } catch (errore) {
    risultato.innerHTML = `
            <div class="errore">
                <strong>❌ Errore:</strong> ${errore.message}
            </div>
        `;
  } finally {
    // Ripristina il bottone
    bottone.textContent = Testo;
    bottone.disabled = false;
  }
}
