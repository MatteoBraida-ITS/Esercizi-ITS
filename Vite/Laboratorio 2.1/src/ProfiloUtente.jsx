import "./ProfiloUtente.css";

const utenti = [
  {
    nome: "Mario",
    cognome: "Rossi",
    ruoli: ["Sviluppatore frontend", "Tech lead", "Mentor"],
    email: "m.rossi@email.com",
    isVerified: true,
    isAdmin: true,
  },
  {
    nome: "Laura",
    cognome: "Bianchi",
    ruoli: ["UX Designer", "Ricercatrice"],
    email: "m.rossi@email.com",
    isVerified: true,
    isAdmin: true,
  },
  {
    nome: "Giovanni",
    cognome: "Verdi",
    ruoli: ["Sviluppatore frontend", "Tech lead", "Mentor"],
    email: "m.rossi@email.com",
    isVerified: true,
    isAdmin: true,
  },
];

function ProfiloUtente(
  nome,
  cognome,
  ruoli,
  email,
  stato,
  isVerified,
  isAdmin,
  immagine,
) {
  return (
    <div className="lista-utenti">
      {utenti.map((utente, index) => (
        <div key={index} className="card">
          <div className="contentCard"></div>
        </div>
      ))}
    </div>
  );
}
export default ProfiloUtente;
