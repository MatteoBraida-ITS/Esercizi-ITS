const args = process.argv.slice(2).join(" ");

if (args.length === 0) {
  console.log("Nessuna frase inserita");
  process.exit(1);
}

const parole = args;

let paroleTotali = parole.split(" ");

let parolaLunga = paroleTotali.reduce(
  (acc, parola) => (parola.length > acc.length ? parola : acc),

  //    parola.length > acc.length ? parola : acc
  //
  // equivale a:
  //
  //    if (parola.length > acc.length) {
  //      return parola; // la parola corrente è più lunga → diventa il nuovo acc
  //    } else {
  //      return acc;    // acc è già più lungo → lo teniamo
  //    }
  "",
);

let parolaCorta = paroleTotali.reduce(
  (acc, parola) => (parola.length < acc.length ? parola : acc),
  paroleTotali[0], //Qui per la parola più piccola dobbiamo partire dalla prima parola nell'array
);

//voglio contare i caratteri di ogni parola e
//poi fare la media dei caratteri delle parole utilizzate nella frase
paroleTotali.forEach((parola) => {
  parola.length;
});

console.log(`Frase: ${parole}`);
console.log(`Parole: ${paroleTotali.length}`);
console.log(`Parola più lunga: "${parolaLunga}"`);
console.log(`Parola più corta: "${parolaCorta}"`);
