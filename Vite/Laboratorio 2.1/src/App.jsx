import "./App.css";
import Button from "./Button";

function App() {
  return (
    <div style={{ display: "flex", gap: 15, alignItems: "flex-end" }}>
      <Button variante="secondario" dimensione="sm" icona="icona"></Button>
      <Button variante="secondario" icona="iconaDX">
        Continua
      </Button>
      <Button variante="primario" dimensione="lg">
        Acquista
      </Button>
      <Button variante="primario" dimensione="full" icona="iconaSX">
        Aggiungi al carrello
      </Button>
    </div>
  );
}

export default App;
