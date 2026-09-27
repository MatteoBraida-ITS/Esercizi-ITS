import "./App.css";
import Prodotto from "./Prodotto.jsx";

function App() {
  return (
    <div className="container">
      <Prodotto
        img="https://img.icons8.com/?size=100&id=85793&format=png&color=000000"
        name="Laptop"
        price="399$"
      />
      <Prodotto
        img="https://img.icons8.com/?size=100&id=9394&format=png&color=000000"
        name="Cuffie Wireless"
        price="399$"
      />
      <Prodotto
        img="https://img.icons8.com/?size=100&id=10337&format=png&color=000000"
        name="Mouse Ergonomico"
        price="399$"
      />
      <Prodotto
        img="https://img.icons8.com/?size=100&id=StdACfl8dVMs&format=png&color=000000"
        name="Tastiera Meccanica"
        price="399$"
      />
    </div>
  );
}

export default App;
