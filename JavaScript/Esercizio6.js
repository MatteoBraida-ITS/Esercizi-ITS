const random = Math.floor(Math.random() * 100) + 1;

let risposta = false;

let counter = 0;

while (risposta == false) {
  let tentativo = Number(prompt("indovina un numero tra uno e cento"));

  counter += 1;

  switch (true) {
    case tentativo > random:
      alert("Errato, il numero è più piccolo!");
      break;
    case tentativo < random:
      alert("Errato, il numero è più grande!");
      break;
    case tentativo == random:
      risposta = true;
      console.log(`Esatto il numero da indovinare era ${random}!`);
      console.log(`Il numero di tentativi è ${counter}`);
      break;
    default:
      alert("Inserisci un numero valido!");
  }
}
