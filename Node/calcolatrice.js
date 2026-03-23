const args = process.argv.slice(2); //Prendi solo gli argomenti utente

if (args.length === 0) {
  console.log("Uso: node calcolatrice.js è [numero1] <operazione> [numero2]");
  console.log("Esempio: node calcolatrice.js 2 + 2");
  process.exit(1); // Esci con codice di errore
}

const numero1 = parseFloat(args[0]);
const operazione = args[1];
const numero2 = parseFloat(args[2]);
let risultato = 0;

switch (operazione) {
  case "+":
    risultato = numero1 + numero2;
    console.log(`Risultato: ${risultato}`);
    break;
  case "-":
    risultato = numero1 - numero2;
    console.log(`Risultato: ${risultato}`);
    break;
  case "x":
    risultato = numero1 * numero2;
    console.log(`Risultato: ${risultato}`);
    break;
  case "/":
    if (numero2 === 0) {
      console.log("Errore il divisore non può essere minore/uguale a 0");
    } else {
      risultato = numero1 / numero2;
      console.log(`Risultato: ${risultato}`);
    }
    break;
}
