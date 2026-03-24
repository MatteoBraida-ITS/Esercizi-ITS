import { capitalizza, inverti, contaVocali } from "./utils/stringhe.js";
import { isPari, fattoriale, fibonacci } from "./utils/numeri.js";

console.log("=== TEST MODULI stringhe.js ===");
console.log(capitalizza("ciao mondo"));
console.log(inverti("supercalifragilisticospiralitoso"));
console.log(contaVocali("supercalifragilisticospiralitoso"));

console.log("=== TEST MODULI numeri.js ===");
console.log(isPari(7));
console.log(fattoriale(5));
console.log(fibonacci(8));
