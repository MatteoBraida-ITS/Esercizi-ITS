import "./Prodotto.css";

function Prodotto({ img, name, description, price }) {
  return (
    <div>
      <div className="card-container">
        <div className="imgContainer">
          <img className="prdImg" src={img} alt={name} />
        </div>
        <div className="prdInfo">
          <span className="prdName">{name}</span>
          <span className="prdDesc">{description}</span>
          <span className="prdPrice">{price}</span>
        </div>
        <button className="cartBtn">Aggiungi al carrello</button>
      </div>
    </div>
  );
}

export default Prodotto;
