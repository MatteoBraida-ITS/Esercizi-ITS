import { useState } from "react";

function Calcolatrice() {
  const [valore, setRisultato] = useState(0);

  return (
    <div>
      <div>Risultato: {valore}</div>
      <button
        onClick={() => {
          setRisultato(valore + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setRisultato(valore - 1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          setRisultato(valore * 2);
        }}
      >
        x2
      </button>
      <button
        onClick={() => {
          setRisultato(valore / 2);
        }}
      >
        /2
      </button>
      <button
        onClick={() => {
          risultato(0);
        }}
      ></button>
    </div>
  );
}
export default Calcolatrice;
