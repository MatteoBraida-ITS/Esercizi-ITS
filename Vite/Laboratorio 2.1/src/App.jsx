import "./App.css";
import Button from "./Button";
import ActionButton from "./Laboratorio 4/ActionButton";
import Calcolatrice from "./Laboratorio 4/Calcolatrice";
import LightDarkMode from "./Laboratorio 4/LigthDarkMode";
import LikeButton from "./Laboratorio 4/LikeButton";
import Saluti from "./Laboratorio 4/Saluti";
import ProfiloUtente from "./ProfiloUtente";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
      <LikeButton likeIniziali={0}></LikeButton>
      <LikeButton likeIniziali={12}></LikeButton>
      <LikeButton likeIniziali={340}></LikeButton>
    </div>
  );
}

export default App;
