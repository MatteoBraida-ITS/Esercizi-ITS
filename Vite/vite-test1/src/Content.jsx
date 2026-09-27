import Prodotto from "./Prodotto.jsx";
import "./Content.css";

function Content() {
  return (
    <main className="content">
      <div className="content-header">
        <h2 className="content-title">Prodotti in evidenza</h2>
        <button className="content-btn">Vedi tutti</button>
      </div>
      <div className="content-cards">
        <Prodotto
          img="https://img.icons8.com/?size=100&id=85793&format=png&color=000000"
          name="Cuffie Wireless"
          description="Audio di alta qualità senza fili"
          price="€ 59,99"
        />
        <Prodotto
          img="https://img.icons8.com/?size=100&id=9394&format=png&color=000000"
          name="Smartwatch"
          description="Monitora la tua attività ogni giorno"
          price="€129,99"
        />
        <Prodotto
          img="https://img.icons8.com/?size=100&id=10337&format=png&color=000000"
          name="Zaino Travel"
          description="Spazioso e resistente per ogni viaggio"
          price="€39,99"
        />
      </div>
    </main>
  );
}

export default Content;
