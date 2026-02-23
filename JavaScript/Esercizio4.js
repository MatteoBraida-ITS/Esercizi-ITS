const voti = [7, 5, 8, 6, 9, 4, 7, 8, 6, 5];

let media = 0;

let maxVoto = Math.max(...voti);

let minVoto = Math.min(...voti);

for (let i = 0; i < voti.length; i++) {
  media += voti[i];
}

console.log(media);
console.log(maxVoto);
console.log(minVoto);
