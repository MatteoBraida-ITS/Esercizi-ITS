//Creo la funzione per capitalizzare una stringa
//ed uso "export funcion..." per poi poter esportare la funzione nella mia app.js
export function capitalizza(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function inverti(str) {
  return str.split("").reverse().join("");
}

export function contaVocali(str) {
  const vocali = ["a", "e", "i", "o", "u"];

  const stringa = str.split("");

  let totaleVocali = 0;

  stringa.forEach((carattere) => {
    if (vocali.includes(carattere)) {
      totaleVocali += 1;
    }
  });

  return totaleVocali;
}
