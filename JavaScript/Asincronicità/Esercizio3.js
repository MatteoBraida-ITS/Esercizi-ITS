const utenti = [
  { id: 1, nome: "Mario" },
  { id: 2, nome: "Matteo" },
  { id: 3, nome: "Luca" },
  { id: 4, nome: "Giovanni" },
  { id: 5, nome: "Sabrina" },
];

function caricaUtente(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        nome: `Utente_${id}`,
        caricatoAlle: new Date().toLocaleTimeString(),
      });
    }, 1000);
  });
}

const ids = [1, 2, 3, 4, 5];

async function sequenziale() {
  const inizio = Date.now();
  for (const id of ids) {
    const utente = await caricaUtente(id);
    console.log(utente);
  }

  const tempoSeq = (Date.now() - inizio) / 1000;
  console.log(`Sequenziale: ${tempoSeq}s`);
  return tempoSeq;
}

async function parallelo() {
  const inizio = Date.now();
  const utenti = await Promise.all(ids.map(caricaUtente));
  utenti.forEach((u) => console.log(u));
  const tempoPar = (Date.now() - inizio) / 1000;
  console.log(`Parallelo: ${tempoPar}s`);
  return tempoPar;
}

async function main() {
  const tempoSeq = await sequenziale();
  const tempoPar = await parallelo();
  console.log(`Differenza: ${(tempoSeq - tempoPar).toFixed(2)}s`);
}

main();
