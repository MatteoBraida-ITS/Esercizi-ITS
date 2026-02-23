let n1 = prompt("Inserisci il primo numero");

let n2 = prompt("Inserisci il secondo numero");

let operazione = prompt(
  "inserisci l'operazione che vuoi eseguire con questi due numeri (+,-,*,/)",
);

console.log(typeof n1);

n1 = parseInt(n1);

n2 = parseInt(n2);

console.log(typeof n1);

if (operazione == "+") {
  let risultato = n1 + n2;
  console.log(risultato);
} else if (operazione == "-") {
  let risultato = n1 - n2;
  console.log(risultato);
} else if (operazione == "*") {
  let risultato = n1 * n2;
  console.log(risultato);
} else if (risultato == "/" && n2 != 0) {
  let risultato = n1 / n2;
  console.log(risultato);
} else {
  console.log("Operatore selezionato non valido");
}
