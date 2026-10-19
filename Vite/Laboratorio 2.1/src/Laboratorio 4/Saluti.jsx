const nomi = ["Marco", "Giulia", "Luca", "Sara"];

function saluta(nome) {
  alert(`Ciao ${nome}!`);
}

function Saluti() {
  return (
    <>
      {nomi.map((nome) => (
        <button key={nome} onClick={() => saluta(nome)}>
          {nome}
        </button>
      ))}
    </>
  );
}

export default Saluti;
