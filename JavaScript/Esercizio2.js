let n = prompt("Inserisci un numero per poi sapere se è pari o dispari!");

parseInt(n);

if (n % 2 == 0) {
  let risultato = `Il numero ${n} è pari!`;
  console.log(risultato);
} else {
  let risultato = `il numero ${n} è dispari`;
  console.log(risultato);
}
