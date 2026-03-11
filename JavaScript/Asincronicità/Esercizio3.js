const utenti = [
  { id: 1, nome: "Mario" },
  { id: 2, nome: "Matteo" },
  { id: 3, nome: "Luca" },
  { id: 4, nome: "Giovanni" },
  { id: 5, nome: "Sabrina" },
];

const inizio = new Date().toLocaleTimeString();
const fine = new Date().toLocaleTimeString();

function mostraUtente(id, nome) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: `${id}`,
        nome: `${nome}`,
        caricatoAlle: new Date().toLocaleTimeString(),
      });
    }, 1000);
  });
}

async function caricaUtente() {
  console.log(`Operazione di caricamento iniziata alle ${inizio}`);
  for (const utente of utenti) {
    const risultato = await mostraUtente(utente.id, utente.nome);
    console.log(risultato);
  }
  console.log("Tutti gli utenti caricati correttamente!");
  console.log(`Operazione di caricamento completata alle ${fine}`);
}

caricaUtente();
