import "./ProfiloUtente.css";

const utenti = [
  {
    nome: "Mario",
    cognome: "Rossi",
    ruoli: ["Sviluppatore frontend", "Tech lead", "Mentor"],
    email: "m.rossi@email.com",
    stato: "online",
    isVerified: true,
    isAdmin: true,
  },
  {
    nome: "Laura",
    cognome: "Bianchi",
    ruoli: ["UX Designer", "Ricercatrice"],
    email: "l.bianchi@email.com",
    stato: "occupato",
    isVerified: true,
    isAdmin: false,
  },
  {
    nome: "Giovanni",
    cognome: "Verdi",
    ruoli: ["Sviluppatore frontend", "Tech lead", "Mentor"],
    email: "g.verdi@email.com",
    stato: "offline",
    isVerified: false,
    isAdmin: false,
  },
  {
    nome: "Anna",
    cognome: "Ferrari",
    ruoli: ["Data Analyst"],
    email: "a.ferrari@email.com",
    stato: "online",
    isVerified: false,
    isAdmin: true,
  },
];

function ProfiloUtente({
  nome,
  cognome,
  ruoli,
  email,
  stato,
  isVerified,
  isAdmin,
  inizialiProfilo,
}) {
  return (
    <div className="card">
      <div className="content-card">
        <div className="foto-profilo">{inizialiProfilo}</div>
        <div className="dati-utente">
          <div className="utente-verificato">
            <div className="nomeCognome-utente">
              <h3 className="nomeCognome">{nome}</h3>
              <h3 className="nomeCognome">{cognome}</h3>
            </div>
            <span
              className="badge-verificato"
              style={{ display: isVerified ? "block" : "none" }}
            >
              ✓ Verificato
            </span>
            <span
              className="admin-badge"
              style={{ display: isAdmin ? "block" : "none" }}
            >
              Admin
            </span>
          </div>
          <div className="ruoli-utente">{ruoli}</div>
          <div className="mail-utente">{email}</div>
        </div>
        <span
          className="badge-stato"
          style={{
            backgroundColor:
              stato === "online"
                ? "lightgreen"
                : stato === "offline"
                  ? "#FF7F7F"
                  : "#FFD580",
            color:
              stato === "online"
                ? "darkgreen"
                : stato === "offline"
                  ? "darkred"
                  : "darkorange",
          }}
        >
          {stato}
        </span>
      </div>
      <div className="sezione-accesso">
        <span style={{ color: "gray", fontWeight: 600 }}>ACCESSO</span>
        <span
          className="badge-accesso"
          style={{ color: isAdmin ? "black" : "gray" }}
        >
          {isAdmin ? "Accesso completo" : "Accesso standard"}
        </span>
      </div>
    </div>
  );
}
export default ProfiloUtente;
