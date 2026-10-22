import { useState } from "react";
import "./App.css";
import ActionButton from "./Laboratorio 4/ActionButton";
import Calcolatrice from "./Laboratorio 4/Calcolatrice";
import FaqItem from "./Laboratorio 4/FaqItem";
import LightDarkMode from "./Laboratorio 4/LigthDarkMode";
import LikeButton from "./Laboratorio 4/LikeButton";
import Saluti from "./Laboratorio 4/Saluti";
import ProfiloUtente from "./ProfiloUtente";
import FaqList from "./Laboratorio 4/FaqList";
import AnimaliSelezionati from "./Laboratorio 4/AnimaliSelezionati";
import Button from "@mui/material/Button";

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

function App() {
  return (
    <div className="lista-utenti">
      {utenti.map((utente) => (
        <ProfiloUtente
          key={utente.email}
          inizialiProfilo={`${utente.nome.charAt(0)}${utente.cognome.charAt(0)} `}
          nome={utente.nome}
          cognome={utente.cognome}
          email={utente.email}
          ruoli={utente.ruoli.map((ruolo) => (
            <span className="badge-ruolo">{ruolo}</span>
          ))}
          stato={utente.stato}
          isVerified={utente.isVerified}
          isAdmin={utente.isAdmin}
        ></ProfiloUtente>
      ))}
      <div className="flex gap-20">
        <Button variant="contained" style={{ width: "fit-content" }}>
          Ricarica Utenti
        </Button>
        <Button
          variant="contained"
          color="error"
          style={{ width: "fit-content" }}
        >
          Elimina utente
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{ width: "fit-content" }}
        >
          Aggiorna utente
        </Button>
      </div>
    </div>
  );
}

export default App;
