function FaqItem({ domanda, risposta, isAperto, onFaqItemClick }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        border: "2px solid black",
        padding: "0px 20px",
      }}
    >
      <h3>
        <button
          type="button"
          style={{
            background: "none",
            border: "none",
            fontSize: 20,
            margin: 0,
            padding: 0,
          }}
          onClick={() => {
            onFaqItemClick();
          }}
        >
          <span style={{ marginRight: 10 }}>{isAperto ? "▾" : "▸"}</span>
          {domanda}
        </button>
      </h3>
      <p
        style={{
          display: isAperto ? "block" : "none",
          fontSize: 15,
          margin: 0,
          paddingLeft: 25,
          paddingBottom: 10,
        }}
      >
        {risposta}
      </p>
    </div>
  );
}
export default FaqItem;
