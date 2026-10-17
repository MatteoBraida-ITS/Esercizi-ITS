import "./App.css";
import Button from "./Button";

function App() {
  return (
    <div style={{ display: "flex", gap: 15, alignItems: "flex-end" }}>
      <Button variante="primario" dimensione="sm">
        Acquista
      </Button>
      <Button variante="primario">Acquista</Button>
      <Button variante="primario" dimensione="lg">
        Acquista
      </Button>
      <Button variante="primario" dimensione="full">
        Acquista
      </Button>
    </div>
  );
}

export default App;
