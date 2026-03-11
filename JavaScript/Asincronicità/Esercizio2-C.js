function caricaDatabase(tabella) {
  const db = {
    //utenti: [
    //  { id: 1, nome: "Mario" },
    //  { id: 2, nome: "Luigi" },
    //],
    prodotti: [
      { id: 1, nome: "Laptop" },
      { id: 2, nome: "Mouse" },
    ],
  };

  return new Promise((resolve, reject) => {
    if (db[tabella]) {
      resolve(db[tabella]);
    } else {
      reject(new Error(`Tabella "${tabella}" non trovata`));
    }
  });
}

caricaDatabase("utenti")
  .then((db) => console.log(db))
  .catch((err) => console.error(err.message));

caricaDatabase("prodotti")
  .then((db) => console.log(db))
  .catch((err) => console.error(err.message));
