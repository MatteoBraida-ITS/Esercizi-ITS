import { useState } from "react";

const nonSelezionati = ["Cane", "Gatto", "Coniglio", "Pappagallo", "Tartaruga"];
const selezionati = [];

function AnimaliSelezionati() {
  const [nonSelezionatoList, setNonSelezionatoList] = useState(nonSelezionati);
  const [selezionatoList, setSelezionatiList] = useState(selezionati);

  return (
    <div style={{ display: "flex", gap: 15, flexDirection: "column" }}>
      <div>
        <h3 style={{ margin: "10px 0" }}>Non selezionati</h3>
        <div style={{ display: "flex", gap: 10 }}>
          {nonSelezionatoList.map((animale) => {
            return (
              <span
                key={animale}
                style={{
                  border: "1px solid black",
                  borderRadius: 15,
                  padding: 10,
                }}
                onClick={() => {
                  const arraySenzaAnimaleCliccato = nonSelezionatoList.filter(
                    (item) => item !== animale,
                  );
                  setNonSelezionatoList(arraySenzaAnimaleCliccato);
                }}
              >
                {animale}
              </span>
            );
          })}
        </div>
      </div>
      <div>
        <h3 style={{ margin: "10px 0" }}>Selezionati</h3>
      </div>
    </div>
  );
}
export default AnimaliSelezionati;
